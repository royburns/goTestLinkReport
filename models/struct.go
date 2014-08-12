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
