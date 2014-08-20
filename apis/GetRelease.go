package apis

import (
	"fmt"
	// "github.com/astaxie/beego"
	"encoding/json"
	"github.com/alphazero/Go-Redis"
	"github.com/royburns/goTestLinkReport/models"
	// "strconv"
	// "strings"
)

func (this *ApiController) GetReleasePlan() {

	fmt.Println("In ApiController.GetReleasePlan()...")

	expiration := int64(60 * 60)
	spec := redis.DefaultSpec().Db(0)
	client, err := redis.NewSynchClientWithSpec(spec)
	if err != nil {
		fmt.Println("Failed to create the client: ", err)
		return
	}

	releaseplan := this.Input().Get("releaseplan")
	fmt.Println(releaseplan)
	key_rp := "releaseplan" + releaseplan
	value_rp, err := client.Get(key_rp)
	if err != nil {
		fmt.Println("Failed to get value: ", err)
		return
	}

	var rp []interface{}
	if value_rp == nil {
		fmt.Println("The release plan is not exists. We will query it from mysql and then store them in redis.")

		res := models.GetToadReleasePlanWhere("ReleasePlan", releaseplan)
		for _, item := range res {
			rp = append(rp, item)
		}

		value, err := json.Marshal(rp)
		if err != nil {
			fmt.Println("Failed to marshal: ", err)
		}
		client.Set(key_rp, value)
		client.Expire(key_rp, expiration)
	} else {
		fmt.Println("The release plan is exists. We will unmarshal them.")
		// var temp planinfo
		err := json.Unmarshal(value_rp, &rp)
		if err != nil {
			fmt.Println("Failed to unmarshal: ", err)
			return
		}
	}

	this.Data["json"] = &rp
	this.ServeJson()
}

func (this *ApiController) GetReleaseReport() {

	fmt.Println("In ApiController.GetReleaseReport()...")

	expiration := int64(60 * 60)
	spec := redis.DefaultSpec().Db(0)
	client, err := redis.NewSynchClientWithSpec(spec)
	if err != nil {
		fmt.Println("Failed to create the client: ", err)
		return
	}

	releasereport := this.Input().Get("releasereport")
	fmt.Println(releasereport)
	key_rp := "releasereport" + releasereport
	value_rp, err := client.Get(key_rp)
	if err != nil {
		fmt.Println("Failed to get value: ", err)
		return
	}

	var rp []interface{}
	if value_rp == nil {
		fmt.Println("The release report is not exists. We will query it from mysql and then store them in redis.")

		res := models.GetToadReleaseReportWhere("ReleasePlan", releasereport)
		for _, item := range res {
			rp = append(rp, item)
		}

		value, err := json.Marshal(rp)
		if err != nil {
			fmt.Println("Failed to marshal: ", err)
		}
		client.Set(key_rp, value)
		client.Expire(key_rp, expiration)
	} else {
		fmt.Println("The release report is exists. We will unmarshal them.")
		err := json.Unmarshal(value_rp, &rp)
		if err != nil {
			fmt.Println("Failed to unmarshal: ", err)
			return
		}
	}

	fmt.Println(len(rp))
	this.Data["json"] = &rp
	this.ServeJson()
}
