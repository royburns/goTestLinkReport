package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/alphazero/Go-Redis"
	"github.com/astaxie/beego"
	"github.com/royburns/goTestLinkReport/models"
	"strconv"
)

type GetLastExecutionController struct {
	beego.Controller
}

func (this *GetLastExecutionController) Get() {

	fmt.Println("In GetLastExecutionController()...")
	var ExecutionsTableHeader = []string{
		// "TestPlan",
		"Platform",
		"ToadModule",
		"SubModule",
		"Testcase_id",
		"TestCase",
		"Status",
		"Build",
		"LasTimeRun",
		"Notes",
		"Tester",
		// "TestSuite",
	}

	expiration := int64(12 * 60 * 60)
	spec := redis.DefaultSpec().Db(0)
	client, err := redis.NewSynchClientWithSpec(spec)
	if err != nil {
		fmt.Println("Failed to create the client: ", err)
		return
	}

	key_tp := "testplan"
	value_tp, err := client.Get(key_tp)
	if err != nil {
		fmt.Println("Failed to get value: ", err)
		return
	}

	testplan := this.Input().Get("testplan")
	fmt.Println("GetExecution of TestPlan: " + testplan)
	var tp []TestPlan
	if value_tp == nil {
		fmt.Println("The plan is not exists. We will query it from mysql and then store them in redis.")

		// Get TestPlans
		testplans := make(map[int]string)
		res := models.GetAllTestPlans("V_testlink_testexecution_tree")
		for key, item := range res {
			testplans[key] = string(item["TestPlan"])
		}

		res = models.GetAllTestPlansAndCount()
		for _, item := range res {
			name := string(item["TestPlan"])
			count, _ := strconv.Atoi(string(item["COUNT(*)"]))
			bActive := false
			if testplan != "" && testplan == name {
				bActive = true
			}
			tp = append(tp, TestPlan{
				Name:   name,
				Count:  count,
				Active: bActive,
			})
		}

		value, err := json.Marshal(tp)
		if err != nil {
			fmt.Println("Failed to marshal: ", err)
		}
		client.Set(key_tp, value)
		client.Expire(key_tp, expiration)

	} else {
		fmt.Println("The plan is exists. We will unmarshal them.")
		var res []TestPlan
		err := json.Unmarshal(value_tp, &res)
		if err != nil {
			fmt.Println("Failed to unmarshal: ", err)
			return
		}
		for _, item := range res {
			bActive := false
			if testplan != "" && testplan == item.Name {
				bActive = true
			}
			tp = append(tp, TestPlan{
				Name:   item.Name,
				Count:  item.Count,
				Active: bActive,
			})
		}
	}

	this.Data["TestPlans"] = tp
	this.Data["TableHeader"] = ExecutionsTableHeader

	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"

	this.TplNames = "getlastexecution_test.tpl"
}
