package controllers

import (
	"github.com/astaxie/beego"
)

type StatisticsController struct {
	beego.Controller
}

func (this *StatisticsController) Get() {
	this.TplNames = "alert.tpl"
}
