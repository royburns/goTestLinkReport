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
