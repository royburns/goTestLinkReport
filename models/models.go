package models

import (
	"fmt"
	"github.com/astaxie/beego"

	"github.com/Unknwon/gowalker/utils"
	_ "github.com/go-sql-driver/mysql"
	"github.com/go-xorm/xorm"
)

type Report struct {
	Id       int64
	Function string `xorm:"VARCHAR(64)"`
	Middle   string `xorm:"VARCHAR(64)"`
	Casename string `xorm:"VARCHAR(64)"`
	System   string `xorm:"VARCHAR(64)"`
	Platform string `xorm:"VARCHAR(64)"`
}

var (
	orm    *xorm.Engine
	tables []interface{}
)

func InitDB() (err error) {
	utils.LoadConfig("conf/app.conf")

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

func GetAllReport(count int, start int) ([]Report, error) {
	var rs []Report
	err := orm.Limit(count, start).Asc("Id").Find(&rs)
	return rs, err
}
