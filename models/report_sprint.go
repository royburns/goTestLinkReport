package models

import (
	"fmt"
	"github.com/astaxie/beego"
)

func GetToadSprintPlans() []map[string][]byte {

	fmt.Println("In GetToadSprintPlans().")
	sql := fmt.Sprintf("select * from %s", str_toad_sprint_plans)
	res, err := orm.Query(sql)
	if err != nil {
		strerr := fmt.Sprintf("In GetToadSprintPlans(): Failed to query table %s", str_toad_sprint_plans)
		beego.Error(strerr)
	}
	return res
}

func GetSprintExecutionsWhere(sp_id string, sp_product string, sp_version string) ([]V_toad_sprint_report, error) {

	rs := []V_toad_sprint_report{}
	var err error
	sql := fmt.Sprintf("select * from %s", str_v_toad_sprint_report)
	fmt.Println(sql)
	sql = fmt.Sprintf("%s where sprintNo=%s and product='%s' and version='%s'", sql, sp_id, sp_product, sp_version)
	fmt.Println(sql)
	err = orm.Sql(sql).Asc("ToadModule").Find(&rs)

	return rs, err
}

// func GetAllSprintNames() []map[string][]byte {
// 	sql := fmt.Sprintf("select distinct %s.SprintName FROM testlink.%s %s order by %s.SprintName asc", strTable, strTable, strTable, strTable)
// 	testplans, err := orm.Query(sql)
// 	if err != nil {
// 		beego.Error("models.GetAllSprintNames() -> Failed to query table release_planoverview: ", err.Error())
// 	}
// 	return testplans
// }
