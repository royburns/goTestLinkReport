package models

import (
	// "fmt"
	// "github.com/astaxie/beego"
	// "strings"
	"time"
)

var (
	str_tdp_sprint7_burndown          string = "tdp_sprint7_burndown"
	str_v_testlink_testexecution_tree string = "v_testlink_testexecution_tree"

	// report_sprint
	str_toad_sprint_plans    string = "toad_sprint_plans"
	str_v_toad_sprint_report string = "v_toad_sprint_report"

	// statistics
	str_toad_sprint_stats string = "toad_sprint_stats"
)

type V_auto_last_execution struct {
	TestPlan_Name string `xorm:"VARCHAR(100) 'TestPlan_Name'"`
	// testplan_id       int16     `xorm:"INT 'testplan_id'"`
	// tcversion_number  int16     `xorm:"INT 'tcversion_number'"`
	// tcversion_id      int16     `xorm:"INT 'tcversion_id'"`
	Platforms_Name string `xorm:"VARCHAR(100) 'Platforms_Name'"`
	// notes             string    `xorm:"TEXT 'notes'"`
	LastExecutionTime time.Time `xorm:"DATETIME 'LastExecutionTime'"`
	ExecutionStatus   int16     `xorm:"INT 'ExecutionStatus'"`
	CaseSuite         string    `xorm:"VARCHAR(100) 'CaseSuite'"`
	CaseName          string    `xorm:"VARCHAR(100) 'CaseName'"`
	BuildName         string    `xorm:"VARCHAR(100) 'BuildName'"`
}

type V_testlink_testexecution_tree struct {
	TestPlan    string    `xorm:"VARCHAR(100) 'TestPlan'"`
	Platform    string    `xorm:"VARCHAR(100) 'Platform'"`
	ToadModule  string    `xorm:"VARCHAR(100) 'ToadModule'"`
	SubModule   string    `xorm:"VARCHAR(403) 'SubModule'"`
	Testcase_id int       `xorm:"INT 'testcase_id'"`
	TestCase    string    `xorm:"VARCHAR(100) 'TestCase'"`
	Status      string    `xorm:"CHAR(1) 'status'"`
	Build       string    `xorm:"VARCHAR(100) 'Build'"`
	LasTimeRun  time.Time `xorm:"DATETIME 'LasTimeRun'"`
	Notes       string    `xorm:"TEXT 'notes'"`
	Tester      string    `xorm:"VARCHAR(30) 'Tester'"`

	// TestSuite string `xorm:"VARCHAR(100) 'TestSuite'"`
}

type Tdp_sprint7_burndown struct {
	Date      time.Time `xorm:"DATETIME 'Date'"`
	Estimated int32     `xorm:"INT 'EstimatedCase'"`
	Executed  int32     `xorm:"INT 'ExecutedCase'"`
	Remaining int32     `xorm:"INT 'RemainingCase'"`
}
type statistics_sprint map[string]*Tdp_sprint7_burndown

// report_sprint
type Toad_sprint_plans struct {
	Id            int32  `xorm:"INT 'id'"`
	TestPlanId    int32  `xorm:"INT 'testplan_id'"`
	SprintNo      int32  `xorm:"INT 'sprintNo'"`
	Product       string `xorm:"VARCHAR(20) 'product'"`
	Version       string `xorm:"VARCHAR(20) 'version'"`
	ReleasePlanId int32  `xorm:"INT 'releaseplan_id'"`
}

type V_toad_sprint_report struct {
	TestPlan    string    `xorm:"VARCHAR(100) 'TestPlan'"`
	Platform    string    `xorm:"VARCHAR(100) 'Platform'"`
	ToadModule  string    `xorm:"VARCHAR(100) 'ToadModule'"`
	SubModule   string    `xorm:"VARCHAR(403) 'SubModule'"`
	Testcase_id int       `xorm:"INT 'testcase_id'"`
	TestCase    string    `xorm:"VARCHAR(100) 'TestCase'"`
	Status      string    `xorm:"CHAR(1) 'status'"`
	Build       string    `xorm:"VARCHAR(100) 'Build'"`
	LasTimeRun  time.Time `xorm:"DATETIME 'LasTimeRun'"`
	Notes       string    `xorm:"TEXT 'notes'"`
	Tester      string    `xorm:"VARCHAR(30) 'Tester'"`

	// TestSuite string `xorm:"VARCHAR(100) 'TestSuite'"`
}

// statistics
type Toad_sprint_stats struct {
	SprintNo      int32     `xorm:"INT 'sprintNo'"`
	Product       string    `xorm:"VARCHAR(20) 'product'"`
	Version       string    `xorm:"VARCHAR(20) 'version'"`
	Date          time.Time `xorm:"DATETIME 'Date'"`
	TotalCases    int32     `xorm:"INT 'totalCases'"`
	RemainedCases int32     `xorm:"INT 'remainedCases'"`
	FailedCases   int32     `xorm:"INT 'failedCases'"`
	CompletePCT   string    `xorm:"VARCHAR(20) 'completePCT'"`
}

func GetStatisticsSprintTableHeader() []string {
	var v Tdp_sprint7_burndown
	return GetFieldsArray(v)
}
