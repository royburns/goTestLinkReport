package controllers

import (
	"fmt"
	"github.com/astaxie/beego"
	"github.com/royburns/goTestLinkReport/models"
	// "strconv"
)

type MainController struct {
	beego.Controller
}

type Report1 struct {
	Id       int64
	Function string `xorm:"VARCHAR(64)"`
	Middle   string `xorm:"VARCHAR(64)"`
	CaseName string `xorm:"VARCHAR(64)"`
	OS       string `xorm:"VARCHAR(64)"`
	Platform string `xorm:"VARCHAR(64)"`
}

func (this *MainController) Get() {
	reports, err := models.GetAllReport(5, 0)
	if err != nil {
		beego.Debug(fmt.Sprintf("Failed to get reports from db: %v\n", err))
	} else {
		beego.Debug("Success!!!")
	}

	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"
	this.Data["Report"] = reports
	this.TplNames = "index.tpl"
}
