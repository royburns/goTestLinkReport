package models

import (
	"fmt"
	"github.com/astaxie/beego"
)

func GetAllSprintStats() []map[string][]byte {

	fmt.Println("In GetToadSprintPlans().")
	sql := fmt.Sprintf("select * from %s", str_toad_sprint_stats)
	res, err := orm.Query(sql)
	if err != nil {
		strerr := fmt.Sprintf("In GetSprintStats(): Failed to query table %s", str_toad_sprint_stats)
		beego.Error(strerr)
	}
	return res
}

func GetSprintStatsWhere(sp_id string, sp_product string, sp_version string) ([]Toad_sprint_stats, error) {

	fmt.Println("In GetSprintStatsWhere().")
	rs := []Toad_sprint_stats{}
	var err error
	sql := fmt.Sprintf("select * from %s", str_toad_sprint_stats)
	sql = fmt.Sprintf("%s where sprintNo=%s and product='%s' and version='%s'", sql, sp_id, sp_product, sp_version)
	fmt.Println(sql)
	err = orm.Sql(sql).Find(&rs)

	return rs, err
}

func GetStatisticsSprint() []Tdp_sprint7_burndown {
	fmt.Println("In GetStatisticsSprint()...")
	rs := []Tdp_sprint7_burndown{}
	sql := "select * from tdp_sprint7_burndown"
	err := orm.Sql(sql).Asc("ToadModule").Find(&rs)
	if err != nil {
		fmt.Println(err.Error())
	}

	return rs
}
