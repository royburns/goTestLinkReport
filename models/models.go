package models

import (
	"fmt"
	"github.com/astaxie/beego"
	"time"

	"github.com/Unknwon/gowalker/utils"
	_ "github.com/go-sql-driver/mysql"
	"github.com/go-xorm/xorm"
)

var (
	orm    *xorm.Engine
	tables []interface{}
)

type v_auto_last_execution struct {
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

type v_testlink_testexecution_tree struct {
	TestPlan    string    `xorm:"VARCHAR(100) 'TestPlan'"`
	Platform    string    `xorm:"VARCHAR(100) 'Platform'"`
	ToadModule  string    `xorm:"VARCHAR(100) 'ToadModule'"`
	SubModule   string    `xorm:"VARCHAR(403) 'SubModule'"`
	Testcase_id int       `xorm:"INT 'testcase_id'"`
	TestCase    string    `xorm:"VARCHAR(100) 'TestCase'"`
	Status      byte      `xorm:"CHAR(1) 'status'"`
	Build       string    `xorm:"VARCHAR(100) 'Build'"`
	LasTimeRun  time.Time `xorm:"DATETIME 'LasTimeRun'"`
	Notes       string    `xorm:"TEXT 'notes'"`
	Tester      string    `xorm:"VARCHAR(30) 'Tester'"`

	// TestSuite string `xorm:"VARCHAR(100) 'TestSuite'"`
}

func InitDB() (err error) {
	// utils.LoadConfig("conf/app-local.conf")
	utils.LoadConfig("conf/app-skytap.conf")

	// appname = goTestLinkReport
	// httpport = 8080
	// runmode = dev
	// appname = utils.Cfg.MustValue("server", key, ...)

	// dbtype = mysql
	// host = 127.0.0.1
	// port = 3306
	// name = report
	// user = root
	// pwd = 123123
	// # SSLMODE = false
	dbtype := utils.Cfg.MustValue("db", "dbtype")
	host := utils.Cfg.MustValue("db", "host")
	port := utils.Cfg.MustValue("db", "port")
	name := utils.Cfg.MustValue("db", "name")
	user := utils.Cfg.MustValue("db", "user")
	pwd := utils.Cfg.MustValue("db", "pwd")
	ssl := utils.Cfg.MustValue("db", "ssl")

	switch dbtype {
	case "mysql":
		// connstr := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8",
		// 	user, pwd, host, port, name)
		connstr := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8",
			user, pwd, host, port, name)
		fmt.Errorf(connstr)
		orm, err = xorm.NewEngine("mysql", connstr)
		if err != nil {
			beego.Debug(fmt.Sprintf("Failed to create new engine : %v\n", err))
		}
	case "postgres":
		cnnstr := fmt.Sprintf("user=%s password=%s host=%s port=%s dbname=%s sslmode=%s",
			user, pwd, host, port, name, ssl)
		orm, err = xorm.NewEngine("postgres", cnnstr)
	default:
		beego.Debug(fmt.Sprintf("Unknown db type: %s\n", dbtype))
		return fmt.Errorf("Unknown db type: %s\n", dbtype)
	}

	if err != nil {
		beego.Debug(fmt.Sprintf("models.init(failed to connect database): %v\n", err))
		return fmt.Errorf("models.init(failed to connect database): %v\n", err)
	}

	orm.ShowSQL = true
	orm.ShowInfo = true
	orm.ShowDebug = true
	orm.ShowWarn = true
	orm.ShowErr = true
	fmt.Println("success!")
	return orm.Sync(tables...)
}

func Get_v_auto_last_execution(count int, start int) ([]v_auto_last_execution, error) {
	var rs []v_auto_last_execution
	err := orm.Limit(count, start).Asc("TestPlan_Name").Find(&rs)
	return rs, err
}

func Get_v_testlink_testexecution_tree(count int, start int) ([]v_testlink_testexecution_tree, error) {
	var rs []v_testlink_testexecution_tree
	// err := orm.Limit(count, start).Asc("ToadModule").Find(&rs)
	err := orm.Limit(count, start).Find(&rs)
	return rs, err
}
