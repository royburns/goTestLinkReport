package controllers

import (
	// "fmt"
	"github.com/astaxie/beego"
	"github.com/royburns/goTestLinkReport/models"
	// "strconv"
	// "strings"
)

type API_GetPlan struct {
	beego.Controller
}

type plan struct {
	SprintName string
	infos      info_m
}

type info_m map[int]info
type info struct {
	// SprintName       string
	RegressionDetail string
	TotalTime        float32
}
type plan2 map[string]interface{}

func (this *API_GetPlan) Get() {

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

	// p := new(plan)
	// p.SprintName = "sprint 4"
	// p.infos = make(info_m)

	// var ia []info
	// for i := 0; i < 5; i++ {
	// 	var i info
	// 	i.RegressionDetail = "access the file."
	// 	i.TotalTime = 10
	// 	ia = append(ia, i)
	// }
	// p2 := make(plan2)
	// p2["sprint4"] = ia
	// p2["sprint5"] = ia

	this.Data["json"] = &tp
	this.ServeJson()
	// this.TplNames = "alert.tpl"
}
