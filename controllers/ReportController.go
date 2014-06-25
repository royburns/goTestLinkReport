package controllers

import (
	"fmt"
	"github.com/astaxie/beego"
	"github.com/royburns/goTestLinkReport/models"
	"strconv"
	// "strings"
)

type ReportController struct {
	beego.Controller
}

func (this *ReportController) Get() {

	ExecutionsTableHeader := models.GetExectutionTableHeader()

	ExecutionsTableHeader = []string{
		// "TestPlan",
		"Platform",
		"ToadModule",
		"SubModule",
		"Testcase_id",
		"TestCase",
		"Status",
		"Build",
		"LasTimeRun",
		"Notes",
		"Tester",
		// "TestSuite",
	}

	maxTPNum := 10000
	testplan := this.Input().Get("testplan")
	testexecution_where, err := models.GetAllExecutionsWhere(testplan)
	tpCount := len(testexecution_where)
	if err != nil || tpCount > maxTPNum {
		testplan = ""
	}

	// Get TestPlans
	testplans := make(map[int]string)
	res := models.GetAllTestPlans("v_testlink_testexecution_tree")
	for key, item := range res {
		testplans[key] = string(item["TestPlan"])
	}

	var tp []TestPlan
	res = models.GetAllTestPlansAndCount()
	for _, item := range res {
		name := string(item["TestPlan"])
		count, _ := strconv.Atoi(string(item["COUNT(*)"]))
		tp = append(tp, TestPlan{
			Name:  name,
			Count: count,
		})
	}

	// 100, (page-1)*100
	// testexecution_tree, err := models.GetAllExecutions(pagenum, (pn-1)*pagenum)

	if err != nil {
		beego.Debug(fmt.Sprintf("Failed to get reports from db: %v\n", err))
	} else {
		beego.Debug("Success!!!")
	}

	this.Data["TestPlans"] = tp
	this.Data["TableHeader"] = ExecutionsTableHeader
	this.Data["TestExecutionTree"] = testexecution_where

	this.Data["IsIndex"] = true
	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"

	this.TplNames = "report.tpl"
}

type TestPlan struct {
	Name  string
	Count int
}
