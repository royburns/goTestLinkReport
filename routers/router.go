package routers

import (
	"github.com/astaxie/beego"
	"github.com/royburns/goTestLinkReport/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	//beego.Router("/doc", &controllers.DocController{})
}
