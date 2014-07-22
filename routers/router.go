package routers

import (
	"github.com/astaxie/beego"
	"github.com/royburns/goTestLinkReport/apis"
	"github.com/royburns/goTestLinkReport/controllers"
)

func init() {
	beego.Router("/", &controllers.IndexController{})
	beego.Router("/plan", &controllers.PlanController{})
	// beego.Router("/report", &controllers.ReportController{})
	beego.Router("/statistics", &controllers.StatisticsController{})
	beego.Router("/test", &controllers.TestController{})
	beego.Router("/about", &controllers.AboutController{})
	beego.Router("/plan", &controllers.PlanController{})
	beego.Router("/getlastexecution", &controllers.GetLastExecutionController{})

	// beego.Router("/cmd", &controllers.CmdController{})

	beego.Router("/api/getplan", &apis.ApiController{}, "get:GetPlan")
	beego.Router("/api/getlastexecution", &apis.ApiController{}, "get:GetLastExecution")
	beego.Router("/api/runcmd", &apis.ApiController{}, "get:RunCmd")
}
