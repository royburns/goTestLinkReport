package main

import (
	"github.com/astaxie/beego"
	"github.com/royburns/goTestLinkReport/models"
	_ "github.com/royburns/goTestLinkReport/routers"
)

func main() {
	models.InitDB()
	models.SetCacher()

	beego.Run()
}
