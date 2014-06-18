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

func (this *MainController) Get() {
	testexecution_tree, err := models.Get_v_testlink_testexecution_tree(10, 0)

	if err != nil {
		beego.Debug(fmt.Sprintf("Failed to get reports from db: %v\n", err))
	} else {
		beego.Debug("Success!!!")
	}

	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"
	this.Data["TestExecutionTree"] = testexecution_tree

	this.TplNames = "index.tpl"
}

type DocController struct {
	beego.Controller
}

func (this *DocController) Get() {
	this.Data["IsBeta"] = true
	this.TplNames = "alert.tpl"
}
