package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/alphazero/Go-Redis"
	"github.com/astaxie/beego"
	"github.com/royburns/goTestLinkReport/models"
	// "strconv"
	// "strings"
)

type PlanController struct {
	beego.Controller
}

type planinfo struct {
	// SprintName       string
	RegressionDetail string
	TotalTime        float32
}

func (this *PlanController) Get() {

	expiration := int64(12 * 60 * 60)
	spec := redis.DefaultSpec().Db(0)
	client, err := redis.NewSynchClientWithSpec(spec)
	if err != nil {
		fmt.Println("Failed to create the client: ", err)
		return
	}

	key1 := "sprintname"
	key2 := "sp-plan"

	value1, err := client.Get(key1)
	if err != nil {
		fmt.Println("Failed to get value: ", err)
		return
	}
	value2, err := client.Get(key2)
	if err != nil {
		fmt.Println("Failed to get value: ", err)
		return
	}

	// Get TestPlans
	var sp []interface{}
	var tp []interface{}
	if value1 == nil || value2 == nil {
		fmt.Println("The plan is not exists. We will query it from mysql and then store them in redis.")

		res := models.GetAllSprintNames()
		for _, item := range res {
			sp = append(sp, string(item["SprintName"]))

			temp := models.GetAllPlansBySprintName(string(item["SprintName"]))
			tp = append(tp, temp)
		}
		value1, err := json.Marshal(sp)
		if err != nil {
			fmt.Println("Failed to marshal: ", err)
		}
		client.Set(key1, value1)
		client.Expire(key1, expiration)

		value2, err := json.Marshal(tp)
		if err != nil {
			fmt.Println("Failed to marshal: ", err)
		}
		client.Set(key2, value2)
		client.Expire(key2, expiration)
	} else {
		fmt.Println("The plan is exists. We will unmarshal them.")
		// var temp planinfo
		err := json.Unmarshal(value1, &sp)
		if err != nil {
			fmt.Println("Failed to unmarshal: ", err)
			return
		}
		err2 := json.Unmarshal(value2, &tp)
		if err2 != nil {
			fmt.Println("Failed to unmarshal: ", err2)
			return
		}
	}

	this.Data["TableHeader"] = sp
	this.Data["TestPlanTree"] = tp
	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"

	this.TplNames = "plan.tpl"
}
