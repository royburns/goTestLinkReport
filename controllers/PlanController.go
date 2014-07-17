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

	expiration := int64(60 * 60)
	spec := redis.DefaultSpec().Db(0)
	client, err := redis.NewSynchClientWithSpec(spec)
	if err != nil {
		fmt.Println("Failed to create the client: ", err)
		return
	}

	key := "plan"
	value, err := client.Get(key)
	if err != nil {
		fmt.Println("Failed to get value: ", err)
		return
	}

	// Get TestPlans
	sprintname := make(map[int]string)
	var tp []interface{}
	if value == nil {
		fmt.Println("The plan is not exists. We will query it from mysql and then store them in redis.")

		res := models.GetAllSprintNames()
		for key, item := range res {
			sprintname[key] = string(item["SprintName"])
		}

		for i := 0; i < len(sprintname); i++ {
			temp := models.GetAllPlansBySprintName(sprintname[i])
			tp = append(tp, temp)
		}

		value, err := json.Marshal(tp)
		if err != nil {
			fmt.Println("Failed to marshal: ", err)
		}
		client.Set(key, value)
		client.Expire(key, expiration)
	} else {
		fmt.Println("The plan is exists. We will unmarshal them.")
		// var temp planinfo
		err := json.Unmarshal(value, &tp)
		if err != nil {
			fmt.Println("Failed to unmarshal: ", err)
			return
		}
	}

	this.Data["TableHeader"] = sprintname
	this.Data["TestPlanTree"] = tp
	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"

	this.TplNames = "plan.tpl"
}
