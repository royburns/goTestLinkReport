package models

import (
	"fmt"
	"github.com/astaxie/beego"
)

// Release Plan
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

func GetToadReleasePlanColumn(column string) []map[string][]byte {

	sql := fmt.Sprintf("select distinct %s from %s", column, str_toad_release_plan)
	rs, err := orm.Query(sql)
	if err != nil {
		strerr := fmt.Sprintf("In GetToadReleasePlanColumn(): Failed to query table %s", str_toad_release_plan)
		beego.Error(strerr)
	}
	return rs
}

func GetToadReleasePlanWhere(name, value string) []Toad_release_plan {

	rs := []Toad_release_plan{}
	var err error
	sql := fmt.Sprintf("select * from %s where %s='%s'", str_toad_release_plan, name, value)
	fmt.Println(sql)
	err = orm.Sql(sql).Find(&rs)
	if err != nil {
		strerr := fmt.Sprintf("In GetToadReleasePlan(): Failed to query table %s", str_toad_release_plan)
		beego.Error(strerr)
	}
	return rs
}

// Release Report
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

func GetToadReleaseReportColumn(column string) []map[string][]byte {

	sql := fmt.Sprintf("select distinct %s from %s", column, str_toad_release_report)
	rs, err := orm.Query(sql)
	if err != nil {
		strerr := fmt.Sprintf("In GetToadReleaseReportColumn(): Failed to query table %s", str_toad_release_report)
		beego.Error(strerr)
	}
	return rs
}

func GetToadReleaseReportWhere(name, value string) []Toad_release_report {

	rs := []Toad_release_report{}
	var err error
	sql := fmt.Sprintf("select * from %s where %s='%s'", str_toad_release_report, name, value)
	fmt.Println(sql)
	err = orm.Sql(sql).Find(&rs)
	if err != nil {
		strerr := fmt.Sprintf("In GetToadReleaseReport(): Failed to query table %s", str_toad_release_report)
		beego.Error(strerr)
	}
	return rs
}
