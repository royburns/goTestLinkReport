package models

import (
	"fmt"
	"github.com/astaxie/beego"
)

// Release Report
func GetToadReleaseReport() []V_toad_release_report {

	rs := []V_toad_release_report{}
	var err error
	sql := fmt.Sprintf("select * from %s", str_v_toad_release_report)
	err = orm.Sql(sql).Find(&rs)
	if err != nil {
		strerr := fmt.Sprintf("In GetToadReleaseReport(): Failed to query table %s", str_v_toad_release_report)
		beego.Error(strerr)
	}
	return rs
}

func GetToadReleaseReportColumn(column string) []map[string][]byte {

	sql := fmt.Sprintf("select distinct %s from %s", column, str_v_toad_release_report)
	rs, err := orm.Query(sql)
	if err != nil {
		strerr := fmt.Sprintf("In GetToadReleaseReportColumn(): Failed to query table %s", str_v_toad_release_report)
		beego.Error(strerr)
	}
	return rs
}

func GetToadReleaseReportWhere(name, value string) []V_toad_release_report {

	rs := []V_toad_release_report{}
	var err error
	sql := fmt.Sprintf("select * from %s where %s='%s'", str_v_toad_release_report, name, value)
	fmt.Println(sql)
	err = orm.Sql(sql).Find(&rs)
	if err != nil {
		strerr := fmt.Sprintf("In GetToadReleaseReportWhere(): Failed to query table %s", str_v_toad_release_report)
		beego.Error(strerr)
	}
	return rs
}

// Release Overview
func GetToadReleaseOverview() []Toad_release_overview {

	rs := []Toad_release_overview{}
	var err error
	sql := fmt.Sprintf("select * from %s", str_toad_release_overview)
	err = orm.Sql(sql).Find(&rs)
	if err != nil {
		strerr := fmt.Sprintf("In GetToadReleaseOverview(): Failed to query table %s", str_toad_release_overview)
		beego.Error(strerr)
	}

	return rs
}

func GetToadReleaseOverviewColumn(column string) []map[string][]byte {

	sql := fmt.Sprintf("select distinct %s from %s", column, str_toad_release_overview)
	rs, err := orm.Query(sql)
	if err != nil {
		strerr := fmt.Sprintf("In GetToadReleaseOverviewColumn(): Failed to query table %s", str_toad_release_overview)
		beego.Error(strerr)
	}
	return rs
}

func GetToadReleaseOverviewWhere(name, value string) []Toad_release_overview {

	rs := []Toad_release_overview{}
	var err error
	sql := fmt.Sprintf("select * from %s where %s='%s'", str_toad_release_overview, name, value)
	fmt.Println(sql)
	err = orm.Sql(sql).Find(&rs)
	if err != nil {
		strerr := fmt.Sprintf("In GetToadReleaseOverviewWhere(): Failed to query table %s", str_toad_release_overview)
		beego.Error(strerr)
	}
	return rs
}
