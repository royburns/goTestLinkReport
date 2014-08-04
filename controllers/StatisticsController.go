package controllers

import (
	"github.com/astaxie/beego"
)

type StatisticsController struct {
	beego.Controller
}

type Sprint struct {
	SprintName    string
	Planed        int32
	Executed      int32
	Remaining     int32
	CompletedRate float32
}

var (
	title     = []string{"Sprint Name", "Plan cases", "Executed cases", "Complete PCT"}
	spname    = []string{"Sprint 4/5", "Sprint 6", "Sprint 7", "Sprint 7, Final Sprint", "Sprint 8"}
	planed    = []int32{333, 440, 521, 162, 731}
	executed  = []int32{64, 436, 507, 0, 483}
	completed = []float32{0.19, 0.99, 0.97, 0.0, 0.66}
)

func (this *StatisticsController) Sprint() {
	sp := make([]Sprint, 0)
	for i := 0; i < 5; i++ {
		var tmp Sprint
		tmp.SprintName = spname[i]
		tmp.Planed = planed[i]
		tmp.Executed = executed[i]
		tmp.CompletedRate = completed[i]

		sp = append(sp, tmp)
	}

	this.Data["Title"] = title
	this.Data["Sprint"] = sp
	this.TplNames = "statistics_sprint.tpl"
}
