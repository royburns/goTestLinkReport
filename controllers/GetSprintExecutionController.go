package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/alphazero/Go-Redis"
	"github.com/astaxie/beego"
	set "github.com/redsymbol/goset"
	"github.com/royburns/goTestLinkReport/models"
	"strconv"
)

type GetSprintExecutionController struct {
	beego.Controller
}

func (this *GetSprintExecutionController) Get() {

	fmt.Println("In GetSprintExecutionController()...")
	var ExecutionsTableHeader = []string{
		// "TestPlan",
		"Platform",
		"ToadModule",
		"SubModule",
		"Testcase_id",
		"TestCase",
		"Status",
		"Build",
		"LasTimeRun",
		"Notes",
		"Tester",
		// "TestSuite",
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

	var sp []interface{}
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

			temp, _ = strconv.Atoi(string(item["testplan_id"]))
			tp_id := int32(temp)
			temp, _ = strconv.Atoi(string(item["sprintNo"]))
			sp_num := int32(temp)
			product := string(item["product"])
			version := string(item["version"])
			temp, _ = strconv.Atoi(string(item["releaseplan_id"]))
			rp_id := int32(temp)

			sp = append(sp, models.Toad_sprint_plans{
				Id:            id,
				TestPlanId:    tp_id,
				SprintNo:      sp_num,
				Product:       product,
				Version:       version,
				ReleasePlanId: rp_id,
			})

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

	// sp_id.Sorted()
	// sp_product.Sorted()
	// sp_version.Sorted()

	this.Data["SprintPlans"] = sp
	this.Data["sp_id"] = sp_id.Slice()
	this.Data["sp_product"] = sp_product.Slice()
	this.Data["sp_version"] = sp_version.Slice()
	this.Data["TableHeader"] = ExecutionsTableHeader

	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"

	this.TplNames = "getsprintexecution.tpl"
}
