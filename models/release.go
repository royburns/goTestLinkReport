package models

import (
	"fmt"
	"github.com/astaxie/beego"
)

func GetToadReleasePlan() []Toad_release_plan {

	rs := []Toad_release_plan{}
	var err error
	sql := fmt.Sprintf("select * from %s", str_toad_release_plan)
	err = orm.Sql(sql).Find(&rs)
	if err != nil {
		strerr := fmt.Sprintf("In GetToadReleasePlan(): Failed to query table %s", str_toad_release_plan)
		beego.Error(strerr)
	}
	return rs
}

func GetToadReleaseReport() []Toad_release_report {

	rs := []Toad_release_report{}
	var err error
	sql := fmt.Sprintf("select * from %s", str_toad_release_report)
	err = orm.Sql(sql).Find(&rs)
	if err != nil {
		strerr := fmt.Sprintf("In GetToadReleaseReport(): Failed to query table %s", str_toad_release_report)
		beego.Error(strerr)
	}

	return rs
}
