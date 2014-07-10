package models

import (
	"fmt"
	"github.com/astaxie/beego"
	// "time"
	"strings"
)

var (
	strTable string = "release_planoverview"
)

type release_planoverview struct {
	ID               int     `xorm:"INT 'ID'"`
	ProductName      string  `xorm:"VARCHAR(20) 'ProductName'"`
	RegressionDetail string  `xorm:"VARCHAR(50) 'RegressionDetail'"`
	SprintName       string  `xorm:"VARCHAR(10) 'SprintName'"`
	EstimatedTime    float32 `xorm:"DECIMAL 'EstimatedTime'"`
}

type plan struct {
	// ProductName      string
	// RegressionDetail string
	// EstimatedTime    float32
	// TotalTime        float32

	// SprintName string
	Detail    string
	TotalTime float32
}

type plans map[string]*plan

func GetAllSprintNames() []map[string][]byte {
	sql := fmt.Sprintf("select distinct %s.SprintName FROM testlink.%s %s order by %s.SprintName asc", strTable, strTable, strTable, strTable)
	testplans, err := orm.Query(sql)
	if err != nil {
		beego.Error("models.GetAllSprintNames() -> Failed to query table release_planoverview: ", err.Error())
	}
	return testplans
}

func GetAllPlansBySprintName(sprintname string) plans {
	rs := []release_planoverview{}
	result := make(plans)
	var err error
	sql := "select * from release_planoverview"
	if len(sprintname) > 0 {
		// str := strings.Join(sprintname, ",")
		sql = fmt.Sprintf("%s where release_planoverview.SprintName in ('%s')", sql, sprintname)
		err = orm.Sql(sql).Asc("ToadModule").Find(&rs)
	}

	if err != nil {
		beego.Error("models.GetAllPlansBySprintName() -> Failed to query table release_planoverview: ", err.Error())
	}

	var detail []string
	var total float32
	for i := 0; i < len(rs); i++ {
		// fmt.Println(rs[i].ID)
		// fmt.Println(rs[i].EstimatedTime)
		// str := fmt.Sprintln(rs[i].RegressionDetail, rs[i].EstimatedTime)
		// str := fmt.Sprintf("%s <a align=\"right\"> | %v</a>", rs[i].RegressionDetail, rs[i].EstimatedTime)
		if rs[i].RegressionDetail != "" {
			str := fmt.Sprintf("<tr> <th class=\"detail\">%s</th> <th class=\"plantime\"><a> | %v</a></th> </tr>", rs[i].RegressionDetail, rs[i].EstimatedTime)
			detail = append(detail, str)
			total += rs[i].EstimatedTime
			// plans[rs[i].SprintName] = plans[rs[i].SprintName] + rs[i].EstimatedTime
		}
	}
	var details string
	// strings.Join(detail, "")
	// details = strings.Join(detail, "<br/>")
	details = strings.Join(detail, "")
	result[sprintname] = new(plan)
	result[sprintname].Detail = details
	result[sprintname].TotalTime = total

	return result
}

// func GetExectutionTableHeader() []string {
// 	var v v_testlink_testexecution_tree
// 	return GetFieldsArray(v)
// }

// func GetExectutionTableCaption() string {
// 	var v v_testlink_testexecution_tree
// 	return GetFieldsString(v)
// }

// func Get_v_auto_last_execution(count int, start int) ([]v_auto_last_execution, error) {
// 	var rs []v_auto_last_execution
// 	err := orm.Limit(count, start).Asc("TestPlan_Name").Find(&rs)
// 	return rs, err
// }

// func GetAllTestPlans(table string) []map[string][]byte {
// 	// sql := "SELECT DISTINCT ?.TestPlan FROM testlink.? ?"
// 	sql := fmt.Sprintf("select distinct %s.TestPlan FROM testlink.%s %s order by %s.TestPlan asc", table, table, table, table)
// 	testplans, err := orm.Query(sql)
// 	// orm.Distinct("TestPlan")
// 	if err != nil {
// 		beego.Error("models.GetTestPlans() -> Failed to count table v_testlink_testexecution_tree: ", err.Error())
// 	}
// 	return testplans
// }

// func GetAllTestPlansAndCount() []map[string][]byte {
// 	// select TestPlan, COUNT(*) FROM v_testlink_testexecution_tree group by TestPlan;
// 	sql := "select TestPlan, COUNT(*) FROM v_testlink_testexecution_tree group by TestPlan;"
// 	testplans, err := orm.Query(sql)
// 	// orm.Distinct("TestPlan")
// 	if err != nil {
// 		beego.Error("models.GetTestPlans() -> Failed to count table v_testlink_testexecution_tree: ", err.Error())
// 	}
// 	return testplans
// }

// // Process the table "v_testlink_testexecution_tree"
// // Get all executions count
// func GetExecutionCount() int64 {
// 	count, err := orm.Count(new(v_testlink_testexecution_tree))
// 	if err != nil {
// 		beego.Error("models.GetExecutionCount() -> Failed to count table v_testlink_testexecution_tree: ", err.Error())
// 	}
// 	return count
// }

// func GetExecutionCountWhere(where string) int64 {
// 	count := int64(0)
// 	var err error
// 	sql := "select * from v_testlink_testexecution_tree"
// 	if len(where) > 0 {
// 		sql = fmt.Sprintf("%s where v_testlink_testexecution_tree.TestPlan in ('%s')", sql, where)
// 		count, err = orm.Sql(sql).Count(new(v_testlink_testexecution_tree))
// 		// count, err=orm.
// 		if err != nil {
// 			beego.Error("models.GetExecutionCountWhere() -> Failed to count table v_testlink_testexecution_tree: ", err.Error())
// 			return count
// 		}
// 	}

// 	return count
// }

// func GetExecutionCountWheres(where []string) int64 {
// 	count := int64(0)
// 	var err error
// 	sql := "select * from v_testlink_testexecution_tree"
// 	if len(where) > 0 {
// 		str := strings.Join(where, ",")
// 		sql = fmt.Sprintf("%s where v_testlink_testexecution_tree.TestPlan in ('%s')", sql, str)
// 		count, err = orm.Sql(sql).Count(new(v_testlink_testexecution_tree))
// 		if err != nil {
// 			beego.Error("models.GetExecutionCountWheres() -> Failed to count table v_testlink_testexecution_tree: ", err.Error())
// 		}
// 	}

// 	return count
// }

// // Get all executions
// // 	select TestSuite, TestPlan, Platform, ToadModule, SubModule, TestCase, status, Build, LasTimeRun, notes, Tester, testcase_id FROM v_testlink_testexecution_tree
// // where TestPlan in( 'TDP_DB_Plan', '')
// func GetAllExecutions(count int, start int) ([]v_testlink_testexecution_tree, error) {
// 	var rs []v_testlink_testexecution_tree
// 	err := orm.Limit(count, start).Find(&rs)
// 	return rs, err
// }

// func GetExecutionsWhere(count int, start int, where string) ([]v_testlink_testexecution_tree, error) {
// 	rs := []v_testlink_testexecution_tree{}
// 	var err error
// 	sql := "select * from v_testlink_testexecution_tree"
// 	if len(where) > 0 {
// 		sql = fmt.Sprintf("%s where v_testlink_testexecution_tree.TestPlan in ('%s')", sql, where)
// 		err = orm.Sql(sql).Limit(count, start).Asc("ToadModule").Find(&rs)
// 	}

// 	return rs, err
// }

// func GetAllExecutionsWhere(where string) ([]v_testlink_testexecution_tree, error) {
// 	rs := []v_testlink_testexecution_tree{}
// 	var err error
// 	sql := "select * from v_testlink_testexecution_tree"
// 	if len(where) > 0 {
// 		sql = fmt.Sprintf("%s where v_testlink_testexecution_tree.TestPlan in ('%s')", sql, where)
// 		err = orm.Sql(sql).Asc("ToadModule").Find(&rs)
// 	}

// 	return rs, err
// }

// func GetAllExecutionsWheres(count int, start int, where []string) ([]v_testlink_testexecution_tree, error) {
// 	var rs []v_testlink_testexecution_tree
// 	var err error
// 	sql := "select * from v_testlink_testexecution_tree"
// 	if len(where) > 0 {
// 		str := strings.Join(where, ",")
// 		sql = fmt.Sprintf("%s where v_testlink_testexecution_tree.TestPlan in ('%s')", sql, str)
// 		err = orm.Sql(sql).Limit(count, start).Asc("ToadModule").Find(&rs)
// 	}

// 	return rs, err
// }
