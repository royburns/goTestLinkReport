package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/alphazero/Go-Redis"
	"github.com/astaxie/beego"
	"github.com/royburns/goTestLinkReport/models"
)

type ReleaseController struct {
	beego.Controller
}

func (this *ReleaseController) GetReleasePlan() {

	fmt.Println("In GetReleaseReport()...")
	var TableHeader = []string{
		"Platform",
		"ToadModule",
		"SubModule",
		"TC_Id",
		"TestCase",
		"Covered",
	}

	expiration := int64(60 * 60)
	spec := redis.DefaultSpec().Db(0)
	client, err := redis.NewSynchClientWithSpec(spec)
	if err != nil {
		fmt.Println("Failed to create the client: ", err)
		return
	}

	key_rp := "releaseplan"
	value_rp, err := client.Get(key_rp)
	if err != nil {
		fmt.Println("Failed to get value: ", err)
		return
	}

	var rp []interface{}
	if value_rp == nil {
		fmt.Println("The release plan is not exists. We will query it from mysql and then store them in redis.")

		res := models.GetToadReleasePlan()
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

	this.Data["TableHeader"] = TableHeader
	this.Data["ReleasePlans"] = rp

	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"

	this.TplNames = "release_plan.tpl"
}

func (this *ReleaseController) GetReleaseReport() {

	fmt.Println("In GetReleaseReport()...")
	var TableHeader = []string{
		"Platform",
		"ToadModule",
		"SubModule",
		"TC_Id",
		"TestCase",
		"Sprint1",
		"Sprint2",
		"Sprint3",
		"Sprint4",
		"Sprint5",
	}

	expiration := int64(60 * 60)
	spec := redis.DefaultSpec().Db(0)
	client, err := redis.NewSynchClientWithSpec(spec)
	if err != nil {
		fmt.Println("Failed to create the client: ", err)
		return
	}

	key_rp := "releasereport"
	value_rp, err := client.Get(key_rp)
	if err != nil {
		fmt.Println("Failed to get value: ", err)
		return
	}

	var rp []interface{}
	if value_rp == nil {
		fmt.Println("The release report is not exists. We will query it from mysql and then store them in redis.")

		res := models.GetToadReleaseReport()
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
		// var temp planinfo
		err := json.Unmarshal(value_rp, &rp)
		if err != nil {
			fmt.Println("Failed to unmarshal: ", err)
			return
		}
	}

	this.Data["TableHeader"] = TableHeader
	this.Data["ReleasePlans"] = rp

	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"

	this.TplNames = "release_report.tpl"
}
