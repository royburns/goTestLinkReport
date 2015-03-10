package models

import (
	"fmt"
	"github.com/astaxie/beego"

	"github.com/Unknwon/gowalker/utils"
	_ "github.com/go-sql-driver/mysql"
	"github.com/go-xorm/xorm"
	"reflect"
	"strings"
)

var (
	orm    *xorm.Engine
	tables []interface{}
)

func InitDB() (err error) {
	// utils.LoadConfig("conf/app.conf")
	utils.LoadConfig("conf/app-local.conf")
	// utils.LoadConfig("conf/app-skytap.conf")

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

	// orm.ShowSQL = true
	// orm.ShowInfo = true
	// orm.ShowDebug = true
	// orm.ShowWarn = true
	orm.ShowErr = true
	fmt.Println("success!")
	return orm.Sync(tables...)
}

func SetCacher() {
	cacher := xorm.NewLRUCacher(xorm.NewMemoryStore(), 5000)
	orm.SetDefaultCacher(cacher)

	// cacher := xorm.NewLRUCacher(xorm.NewMemoryStore(), 1000)
	// engine.MapCacher(&user, cacher)
}

// Convert fields of a struct into an array
func GetFieldsArray(obj interface{}) []string {
	var ret []string
	typ := reflect.TypeOf(obj)

	for i := 0; i < typ.NumField(); i++ {
		ret = append(ret, typ.Field(i).Name)
	}

	return ret
}

// Convert fields of a struct into a string
func GetFieldsString(obj interface{}) string {
	var ret []string
	typ := reflect.TypeOf(obj)

	for i := 0; i < typ.NumField(); i++ {
		ret = append(ret, typ.Field(i).Name)
	}

	return strings.Join(ret, " ")
}
