package controllers

import (
	// "fmt"
	"github.com/astaxie/beego"
	"github.com/royburns/goTestLinkReport/models"
	// "github.com/astaxie/beego/httplib"
	// "strings"
)

type StatisticsController struct {
	beego.Controller
}

type Sprint struct {
	SprintName    string
	Planed        int32
	Executed      []int32
	Remaining     int32
	CompletedRate []float32
}

var (
	title     = []string{"Sprint Name", "Plan cases", "Executed cases", "Complete PCT"}
	spname    = []string{"Sprint 4/5", "Sprint 6", "Sprint 7", "Sprint 7, Final Sprint", "Sprint 8"}
	planed    = []int32{333, 440, 521, 162, 731}
	executed  = [][]int32{{64, 436, 507, 2, 483}, {77, 300, 100, 44, 200}, {64, 436, 507, 90, 478}, {22, 333, 234, 100, 643}, {64, 436, 507, 60, 701}}
	completed = [][]float32{{0.19, 0.99, 0.97, 0.0, 0.66}, {0.19, 0.99, 0.97, 0.0, 0.66}, {0.19, 0.99, 0.97, 0.0, 0.66}, {0.19, 0.99, 0.97, 0.0, 0.66}, {0.19, 0.99, 0.97, 0.0, 0.66}}
)

func (this *StatisticsController) Get() {

	// title := models.GetStatisticsSprintTableHeader()

	title := []string{
		"Date",
		"Estimated",
		"Executed",
		"Remaining",
	}

	rs := models.GetStatisticsSprint()

	// sp := make([]Sprint, 0)
	// for i := 0; i < 5; i++ {
	// 	var tmp Sprint
	// 	tmp.SprintName = spname[i]
	// 	tmp.Planed = planed[i]
	// 	tmp.Executed = executed[i]
	// 	tmp.CompletedRate = completed[i]

	// 	sp = append(sp, tmp)
	// }

	this.Data["Caption"] = "tdp_sprint7_burndown"
	this.Data["Title"] = title
	this.Data["Sprint"] = rs
	this.TplNames = "statistics_sprint.tpl"
}

func (this *StatisticsController) Sprint() {

	sp := models.GetStatisticsSprint()
	// sp := make([]Sprint, 0)
	// for i := 0; i < 5; i++ {
	// 	var tmp Sprint
	// 	tmp.SprintName = spname[i]
	// 	tmp.Planed = planed[i]
	// 	tmp.Executed = executed[i]
	// 	tmp.CompletedRate = completed[i]

	// 	sp = append(sp, tmp)
	// }

	this.Data["json"] = sp
	this.ServeJson()

	// this.Data["Title"] = title
	// this.Data["Sprint"] = sp

	// this.TplNames = "statistics_sprint.tpl"
}

// func (this *StatisticsController) Stock() {
// 	req := httplib.Get("http://xueqiu.com/S/SH601166/historical.csv")
// 	str, err := req.String()
// 	if err != nil {
// 		fmt.Println(err.Error())
// 	}

// 	lines = strings.Split(str, "\n")
// 	for i := 0; i < len(lines); i++ {

// 	}
// 	var v interface{}
// 	err := req.ToJson(v)
// 	if err != nil {
// 		fmt.Println(err.Error())
// 	}

// 	fmt.Println(v)
// }
