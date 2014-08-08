package models

import (
	"fmt"
	// "github.com/astaxie/beego"
	// "strings"
	"time"
)

var (
	t_statistics_sprint string = "tdp_sprint7_burndown"
)

type Tdp_sprint7_burndown struct {
	Date      time.Time `xorm:"DATETIME 'Date'"`
	Estimated int32     `xorm:"INT 'EstimatedCase'"`
	Executed  int32     `xorm:"INT 'ExecutedCase'"`
	Remaining int32     `xorm:"INT 'RemainingCase'"`
}

type statistics_sprint map[string]*Tdp_sprint7_burndown

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

func GetStatisticsSprintTableHeader() []string {
	var v Tdp_sprint7_burndown
	return GetFieldsArray(v)
}

// func GetAllSprintNames() []map[string][]byte {
// 	sql := fmt.Sprintf("select distinct %s.SprintName FROM testlink.%s %s order by %s.SprintName asc", strTable, strTable, strTable, strTable)
// 	testplans, err := orm.Query(sql)
// 	if err != nil {
// 		beego.Error("models.GetAllSprintNames() -> Failed to query table release_planoverview: ", err.Error())
// 	}
// 	return testplans
// }

// func GetAllPlansBySprintName(sprintname string) plans {
// 	rs := []release_planoverview{}
// 	result := make(plans)
// 	var err error
// 	sql := "select * from release_planoverview"
// 	if len(sprintname) > 0 {
// 		// str := strings.Join(sprintname, ",")
// 		sql = fmt.Sprintf("%s where release_planoverview.SprintName in ('%s')", sql, sprintname)
// 		err = orm.Sql(sql).Asc("ToadModule").Find(&rs)
// 	}

// 	if err != nil {
// 		beego.Error("models.GetAllPlansBySprintName() -> Failed to query table release_planoverview: ", err.Error())
// 	}

// 	var detail []string
// 	var total float32
// 	for i := 0; i < len(rs); i++ {
// 		// fmt.Println(rs[i].ID)
// 		// fmt.Println(rs[i].EstimatedTime)
// 		// str := fmt.Sprintln(rs[i].RegressionDetail, rs[i].EstimatedTime)
// 		// str := fmt.Sprintf("%s <a align=\"right\"> | %v</a>", rs[i].RegressionDetail, rs[i].EstimatedTime)
// 		if rs[i].RegressionDetail != "" {
// 			str := fmt.Sprintf("<tr> <th class=\"detail\">%s</th> <th class=\"plantime\"><a> | %v</a></th> </tr>", rs[i].RegressionDetail, rs[i].EstimatedTime)
// 			detail = append(detail, str)
// 			total += rs[i].EstimatedTime
// 			// plans[rs[i].SprintName] = plans[rs[i].SprintName] + rs[i].EstimatedTime
// 		}
// 	}
// 	var details string
// 	// strings.Join(detail, "")
// 	// details = strings.Join(detail, "<br/>")
// 	details = strings.Join(detail, "")
// 	result[sprintname] = new(plan)
// 	result[sprintname].Detail = details
// 	result[sprintname].TotalTime = total

// 	return result
// }
