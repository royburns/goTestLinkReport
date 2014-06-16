package controllers

import (
	"fmt"
	"github.com/astaxie/beego"
	"github.com/royburns/goTestLinkReport/models"
)

type MainController struct {
	beego.Controller
}

func (this *MainController) Get() {
	reports, err := models.GetAllReport(0, 10)
	if err != nil {
		fmt.Errorf(" Failed to get reports from db: %v\n", err)
	}
	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"
	// for i := 0; i < 10; i++ {
	// 	//
	// }
	this.Data["Report"] = reports
	this.TplNames = "index.tpl"
}
