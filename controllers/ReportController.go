package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/alphazero/Go-Redis"
	"github.com/astaxie/beego"
	"github.com/royburns/goTestLinkReport/models"
	"strconv"
	"time"
	// "strings"
)

type ReportController struct {
	beego.Controller
}

func (this *ReportController) Get() {

	ExecutionsTableHeader := models.GetExectutionTableHeader()

	ExecutionsTableHeader = []string{
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

	expiration := 60 * 60
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
			tp = append(tp, TestPlan{
				Name:  name,
				Count: count,
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
		// var temp planinfo
		err := json.Unmarshal(value_tp, &tp)
		if err != nil {
			fmt.Println("Failed to unmarshal: ", err)
			return
		}
	}

	// var executions []*V_testlink_testexecution_tree
	executions := []models.V_testlink_testexecution_tree{}
	testplan := this.Input().Get("testplan")
	if testplan != "" {
		key := testplan
		value, err := client.Get(key)
		if err != nil {
			fmt.Println("Failed to get value: ", err)
			return
		}

		if value == nil {
			fmt.Println("The plan is not exists. We will query it from mysql and then store them in redis.")

			// Get Executions
			maxTPNum := 10000
			testexecution_where, err := models.GetAllExecutionsWhere(testplan)
			tpCount := len(testexecution_where)
			if err != nil || tpCount > maxTPNum {
				testplan = ""
			}

			// for i := 0; i < tpCount; i++ {
			// 	// executions = []models.V_testlink_testexecution_tree(testexecution_where)
			// 	// executions[i] = new(V_testlink_testexecution_tree)
			// 	executions[i].Build = testexecution_where[i].Build
			// 	executions[i].LasTimeRun = testexecution_where[i].LasTimeRun
			// 	executions[i].Notes = testexecution_where[i].Notes
			// 	executions[i].Platform = testexecution_where[i].Platform
			// 	executions[i].Status = testexecution_where[i].Status
			// 	executions[i].SubModule = testexecution_where[i].SubModule
			// 	executions[i].TestCase = testexecution_where[i].TestCase
			// 	executions[i].TestPlan = testexecution_where[i].TestPlan
			// 	executions[i].Testcase_id = testexecution_where[i].Testcase_id
			// 	executions[i].Tester = testexecution_where[i].Tester
			// 	executions[i].ToadModule = testexecution_where[i].ToadModule
			// 	// executions[i].Testcase_id = testexecution_where[i].Build
			// }

			// 100, (page-1)*100
			// testexecution_tree, err := models.GetAllExecutions(pagenum, (pn-1)*pagenum)

			// if err != nil {
			// 	beego.Debug(fmt.Sprintf("Failed to get reports from db: %v\n", err))
			// } else {
			// 	beego.Debug("Success!!!")
			// }

			executions = testexecution_where
			value, err := json.Marshal(testexecution_where)
			if err != nil {
				fmt.Println("Failed to marshal: ", err)
			}
			client.Set(key, value)
			client.Expire(key, expiration)
		} else {
			fmt.Println("The plan is exists. We will unmarshal them.")
			// var temp planinfo
			err := json.Unmarshal(value, &executions)
			if err != nil {
				fmt.Println("Failed to unmarshal: ", err)
				return
			}
		}
	}

	this.Data["TestPlans"] = tp
	this.Data["TableHeader"] = ExecutionsTableHeader
	this.Data["TestExecutionTree"] = executions

	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"

	this.TplNames = "report.tpl"
}

type TestPlan struct {
	Name  string
	Count int
}

type V_testlink_testexecution_tree struct {
	TestPlan    string    `xorm:"VARCHAR(100) 'TestPlan'"`
	Platform    string    `xorm:"VARCHAR(100) 'Platform'"`
	ToadModule  string    `xorm:"VARCHAR(100) 'ToadModule'"`
	SubModule   string    `xorm:"VARCHAR(403) 'SubModule'"`
	Testcase_id int       `xorm:"INT 'testcase_id'"`
	TestCase    string    `xorm:"VARCHAR(100) 'TestCase'"`
	Status      string    `xorm:"CHAR(1) 'status'"`
	Build       string    `xorm:"VARCHAR(100) 'Build'"`
	LasTimeRun  time.Time `xorm:"DATETIME 'LasTimeRun'"`
	Notes       string    `xorm:"TEXT 'notes'"`
	Tester      string    `xorm:"VARCHAR(30) 'Tester'"`

	// TestSuite string `xorm:"VARCHAR(100) 'TestSuite'"`
}
