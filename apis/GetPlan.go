package apis

import (
// "fmt"
// "github.com/astaxie/beego"
// "github.com/royburns/goTestLinkReport/models"
// "strconv"
// "strings"
)

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

type test struct {
	title string
	data  []string
}

func (this *ApiController) GetPlan() {

	p := new(plan)
	p.SprintName = "sprint 4"
	p.infos = make(info_m)
	// p.infos[0] = new(info)
	// p.infos[0].RegressionDetail = "access the file."
	// p.infos[0].TotalTime = 30

	// var i info
	// i.RegressionDetail = "access the file."
	// i.TotalTime = 10
	// p.infos[0] = i

	var ia []info
	for i := 0; i < 5; i++ {
		var i info
		i.RegressionDetail = "access the file."
		i.TotalTime = 10
		ia = append(ia, i)
	}
	p2 := make(plan2)
	p2["sprint4"] = ia
	p2["sprint5"] = ia

	this.Data["json"] = &p2
	this.ServeJson()
	// this.TplNames = "alert.tpl"
}
