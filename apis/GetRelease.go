package apis

import (
	"fmt"
	// "github.com/astaxie/beego"
	"encoding/json"
	"github.com/alphazero/Go-Redis"
	"github.com/royburns/goTestLinkReport/models"
	"time"
	// "strconv"
	// "strings"
)

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

		res := models.GetToadReleaseReportWhere("releaseplan", releasereport)
		for _, item := range res {
			item.LastTimeRun = fmt.Sprintf("%04d-%02d-%02d", item.Date.Year(), item.Date.Month(), item.Date.Day())
			// if item.LastTimeRun.String() != "0001-01-01 00:00:00 +0000 UTC" {
			if !item.Date.IsZero() {
				t := time.Now()
				d := t.Sub(item.Date)
				item.DataRange = int32(d.Hours()) / 24
			}
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

	this.Data["json"] = &rp
	this.ServeJson()
}

func (this *ApiController) GetReleaseOverview() {

	fmt.Println("In ApiController.GetReleaseOverview()...")

	expiration := int64(60 * 60)
	spec := redis.DefaultSpec().Db(0)
	client, err := redis.NewSynchClientWithSpec(spec)
	if err != nil {
		fmt.Println("Failed to create the client: ", err)
		return
	}

	releaseoverview := this.Input().Get("releaseoverview")
	fmt.Println(releaseoverview)
	key_rp := "releaseoverview" + releaseoverview
	value_rp, err := client.Get(key_rp)
	if err != nil {
		fmt.Println("Failed to get value: ", err)
		return
	}

	var rp []interface{}
	if value_rp == nil {
		fmt.Println("The release overview is not exists. We will query it from mysql and then store them in redis.")

		res := models.GetToadReleaseOverviewWhere("ReleasePlan", releaseoverview)
		for _, item := range res {
			if item.Sprint1 == "p" {
				item.Exec_Freq = item.Exec_Freq + 1
			}
			if item.Sprint2 == "p" {
				item.Exec_Freq = item.Exec_Freq + 1
			}
			if item.Sprint3 == "p" {

				item.Exec_Freq = item.Exec_Freq + 1
			}
			if item.Sprint4 == "p" {
				item.Exec_Freq = item.Exec_Freq + 1
			}
			if item.Sprint5 == "p" {
				item.Exec_Freq = item.Exec_Freq + 1
			}
			rp = append(rp, item)
		}

		value, err := json.Marshal(rp)
		if err != nil {
			fmt.Println("Failed to marshal: ", err)
		}
		client.Set(key_rp, value)
		client.Expire(key_rp, expiration)
	} else {
		fmt.Println("The release overview is exists. We will unmarshal them.")
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
