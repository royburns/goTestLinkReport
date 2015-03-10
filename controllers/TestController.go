package controllers

import (
	"github.com/astaxie/beego"
)

type TestController struct {
	beego.Controller
}

func (this *TestController) Get() {
	this.TplNames = "test footbar.tpl"
}
