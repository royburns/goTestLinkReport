package models

import (
	"fmt"
	"github.com/astaxie/beego"

	"strings"
)

func GetExectutionTableHeader() []string {
	var v V_testlink_testexecution_tree
	return GetFieldsArray(v)
}

func GetExectutionTableCaption() string {
	var v V_testlink_testexecution_tree
	return GetFieldsString(v)
}

func Get_v_auto_last_execution(count int, start int) ([]V_auto_last_execution, error) {
	var rs []V_auto_last_execution
	err := orm.Limit(count, start).Asc("TestPlan_Name").Find(&rs)
	return rs, err
}

func GetAllTestPlans(table string) []map[string][]byte {
	// sql := "SELECT DISTINCT ?.TestPlan FROM testlink.? ?"
	sql := fmt.Sprintf("select distinct %s.TestPlan FROM testlink.%s %s order by %s.TestPlan asc", table, table, table, table)
	testplans, err := orm.Query(sql)
	// orm.Distinct("TestPlan")
	if err != nil {
		beego.Error("models.GetTestPlans() -> Failed to count table V_testlink_testexecution_tree: ", err.Error())
	}
	return testplans
}

func GetAllTestPlansAndCount() []map[string][]byte {
	// select TestPlan, COUNT(*) FROM V_testlink_testexecution_tree group by TestPlan;
	sql := "select TestPlan, COUNT(*) FROM V_testlink_testexecution_tree group by TestPlan;"
	testplans, err := orm.Query(sql)
	// orm.Distinct("TestPlan")
	if err != nil {
		beego.Error("models.GetTestPlans() -> Failed to count table V_testlink_testexecution_tree: ", err.Error())
	}
	return testplans
}

// Process the table "V_testlink_testexecution_tree"
// Get all executions count
func GetExecutionCount() int64 {
	count, err := orm.Count(new(V_testlink_testexecution_tree))
	if err != nil {
		beego.Error("models.GetExecutionCount() -> Failed to count table V_testlink_testexecution_tree: ", err.Error())
	}
	return count
}

func GetExecutionCountWhere(where string) int64 {
	count := int64(0)
	var err error
	sql := "select * from V_testlink_testexecution_tree"
	if len(where) > 0 {
		sql = fmt.Sprintf("%s where V_testlink_testexecution_tree.TestPlan in ('%s')", sql, where)
		count, err = orm.Sql(sql).Count(new(V_testlink_testexecution_tree))
		// count, err=orm.
		if err != nil {
			beego.Error("models.GetExecutionCountWhere() -> Failed to count table V_testlink_testexecution_tree: ", err.Error())
			return count
		}
	}

	return count
}

func GetExecutionCountWheres(where []string) int64 {
	count := int64(0)
	var err error
	sql := "select * from V_testlink_testexecution_tree"
	if len(where) > 0 {
		str := strings.Join(where, ",")
		sql = fmt.Sprintf("%s where V_testlink_testexecution_tree.TestPlan in ('%s')", sql, str)
		count, err = orm.Sql(sql).Count(new(V_testlink_testexecution_tree))
		if err != nil {
			beego.Error("models.GetExecutionCountWheres() -> Failed to count table V_testlink_testexecution_tree: ", err.Error())
		}
	}

	return count
}

// Get all executions
// 	select TestSuite, TestPlan, Platform, ToadModule, SubModule, TestCase, status, Build, LasTimeRun, notes, Tester, testcase_id FROM V_testlink_testexecution_tree
// where TestPlan in( 'TDP_DB_Plan', '')
func GetAllExecutions(count int, start int) ([]V_testlink_testexecution_tree, error) {
	var rs []V_testlink_testexecution_tree
	err := orm.Limit(count, start).Find(&rs)
	return rs, err
}

func GetExecutionsWhere(count int, start int, where string) ([]V_testlink_testexecution_tree, error) {
	rs := []V_testlink_testexecution_tree{}
	var err error
	sql := "select * from V_testlink_testexecution_tree"
	if len(where) > 0 {
		sql = fmt.Sprintf("%s where V_testlink_testexecution_tree.TestPlan in ('%s')", sql, where)
		err = orm.Sql(sql).Limit(count, start).Asc("ToadModule").Find(&rs)
	}

	return rs, err
}

func GetAllExecutionsWhere(where string) ([]V_testlink_testexecution_tree, error) {
	rs := []V_testlink_testexecution_tree{}
	var err error
	sql := "select * from V_testlink_testexecution_tree"
	if len(where) > 0 {
		sql = fmt.Sprintf("%s where V_testlink_testexecution_tree.TestPlan in ('%s')", sql, where)
		err = orm.Sql(sql).Asc("ToadModule").Find(&rs)
	}

	return rs, err
}

func GetAllExecutionsWheres(count int, start int, where []string) ([]V_testlink_testexecution_tree, error) {
	var rs []V_testlink_testexecution_tree
	var err error
	sql := "select * from V_testlink_testexecution_tree"
	if len(where) > 0 {
		str := strings.Join(where, ",")
		sql = fmt.Sprintf("%s where V_testlink_testexecution_tree.TestPlan in ('%s')", sql, str)
		err = orm.Sql(sql).Limit(count, start).Asc("ToadModule").Find(&rs)
	}

	return rs, err
}
