package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/alphazero/Go-Redis"
	"github.com/astaxie/beego"
	set "github.com/redsymbol/goset"
	"github.com/royburns/goTestLinkReport/models"
	"strconv"
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

	fmt.Println("In StatisticsController.Get()...")

	title := []string{
		"Date",
		"TotalCases",
		"RemainedCases",
		"FailedCases",
		"CompletePCT",
	}

	// expiration := int64(12 * 60 * 60)
	spec := redis.DefaultSpec().Db(0)
	client, err := redis.NewSynchClientWithSpec(spec)
	if err != nil {
		fmt.Println("Failed to create the client: ", err)
		return
	}

	key_sp := "sprintplans"
	value_sp, err := client.Get(key_sp)
	if err != nil {
		fmt.Println("Failed to get value: ", err)
		return
	}

	// var sp []interface{}
	sp_id := set.New()
	sp_product := set.New()
	sp_version := set.New()
	if value_sp == nil {
		fmt.Println("The data is not exists. We will query it from mysql and then store them in redis.")

		res := models.GetToadSprintPlans()
		for _, item := range res {

			temp, _ := strconv.Atoi(string(item["sprintNo"]))
			id := int32(temp)
			fmt.Println(id)

			// temp, _ = strconv.Atoi(string(item["testplan_id"]))
			// tp_id := int32(temp)
			// temp, _ = strconv.Atoi(string(item["sprint_number"]))
			// sp_num := int32(temp)
			product := string(item["product"])
			version := string(item["version"])
			// temp, _ = strconv.Atoi(string(item["releaseplan_id"]))
			// rp_id := int32(temp)

			// sp = append(sp, models.Toad_sprint_plans{
			// 	Id:            id,
			// 	TestPlanId:    tp_id,
			// 	SprintNumber:  sp_num,
			// 	Product:       product,
			// 	Version:       version,
			// 	ReleasePlanId: rp_id,
			// })

			// sp_id = append(sp_id, id)
			sp_id.Add(id)
			sp_product.Add(product)
			sp_version.Add(version)
		}

		// value, err := json.Marshal(sp)
		// if err != nil {
		// 	fmt.Println("Failed to marshal: ", err)
		// }
		// client.Set(key_sp, value)
		// client.Expire(key_sp, expiration)

	} else {
		fmt.Println("The data is exists. We will unmarshal them.")
		var res []TestPlan
		err := json.Unmarshal(value_sp, &res)
		if err != nil {
			fmt.Println("Failed to unmarshal: ", err)
			return
		}
	}

	// this.Data["SprintPlans"] = sp
	this.Data["sp_id"] = sp_id.Slice()
	this.Data["sp_product"] = sp_product.Slice()
	this.Data["sp_version"] = sp_version.Slice()

	this.Data["Caption"] = "Sprint Statistics"
	this.Data["Title"] = title
	// this.Data["Sprint"] = rs

	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"
	this.TplNames = "stat_sprint.tpl"
}

func (this *StatisticsController) Sprint() {

	sp_id := this.Input().Get("sp_id")
	sp_product := this.Input().Get("sp_product")
	sp_version := this.Input().Get("sp_version")

	ss, _ := models.GetSprintStatsWhere(sp_id, sp_product, sp_version)
	// sp := make([]Sprint, 0)
	// for i := 0; i < 5; i++ {
	// 	var tmp Sprint
	// 	tmp.SprintName = spname[i]
	// 	tmp.Planed = planed[i]
	// 	tmp.Executed = executed[i]
	// 	tmp.CompletedRate = completed[i]

	// 	sp = append(sp, tmp)
	// }

	fmt.Println(len(ss))
	this.Data["json"] = ss
	this.ServeJson()

	// this.Data["Title"] = title
	// this.Data["Sprint"] = sp

	// this.TplNames = "statistics_sprint.tpl"
}
