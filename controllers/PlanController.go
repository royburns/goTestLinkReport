package controllers

import (
	// "fmt"
	"github.com/astaxie/beego"
	"github.com/royburns/goTestLinkReport/models"
	// "strconv"
	// "strings"
)

type PlanController struct {
	beego.Controller
}

type planinfo struct {
	SprintName       string
	RegressionDetail string
	TotalTime        float32
}

func (this *PlanController) Get() {

	// var ExecutionsTableHeader = []string{
	// 	"ID",
	// 	"ProductName",
	// 	"RegressionDetail",
	// 	"SprintName",
	// 	"EstimatedTime",
	// }

	// Get TestPlans
	sprintname := make(map[int]string)
	res := models.GetAllSprintNames()
	for key, item := range res {
		sprintname[key] = string(item["SprintName"])
	}

	var tp []interface{}
	for i := 0; i < len(sprintname); i++ {
		temp := models.GetAllPlansBySprintName(sprintname[i])
		tp = append(tp, temp)
	}

	this.Data["TableHeader"] = sprintname
	this.Data["TestPlanTree"] = tp
	this.Data["IsIndex"] = true
	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"

	this.TplNames = "plan.tpl"
}
