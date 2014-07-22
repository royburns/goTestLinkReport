package controllers

import (
	// "fmt"
	"github.com/astaxie/beego"
	"github.com/royburns/goTestLinkReport/models"
	// "strconv"
	// "strings"
)

type IndexController struct {
	beego.Controller
}

func (this *IndexController) Get() {

	ExecutionsTableHeader := models.GetExectutionTableHeader()

	// Calculate pages.
	// pagenum := 20
	// pn, err := strconv.Atoi(this.Input().Get("p"))
	// maxPageNum := int(models.GetExecutionCount()/int64(pagenum)) + 1
	// if err != nil || pn > maxPageNum {
	// 	pn = 1
	// }

	// if pn < 10 {
	// 	this.Data["Prev"] = 1
	// } else {
	// 	this.Data["Prev"] = pn - 10
	// }

	// if pn > maxPageNum-10 {
	// 	this.Data["Next"] = maxPageNum
	// } else {
	// 	this.Data["Next"] = pn + 10
	// }

	// // Get TestPlans
	// testplans := make(map[int]string)
	// res := models.GetAllTestPlans("v_testlink_testexecution_tree")
	// for key, item := range res {
	// 	testplans[key] = string(item["TestPlan"])
	// }
	// this.Data["TestPlans"] = testplans

	// // Calculate page list.
	// this.Data["PageList"] = calPageList(pn, maxPageNum)

	// // 100, (page-1)*100
	// testexecution_tree, err := models.GetAllExecutions(pagenum, (pn-1)*pagenum)

	// if err != nil {
	// 	beego.Debug(fmt.Sprintf("Failed to get reports from db: %v\n", err))
	// } else {
	// 	beego.Debug("Success!!!")
	// }

	this.Data["TableHeader"] = ExecutionsTableHeader
	// this.Data["TestExecutionTree"] = testexecution_tree
	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"

	this.TplNames = "index.tpl"
}

type page struct {
	IsActive  bool
	TestPlans string
	PageNum   int
}

// calPageList returns page lists.
func calPageList(p, maxPageNum int) []*page {
	listSize := 15
	hls := listSize / 2
	pl := make([]*page, 0, listSize)

	start, end := p-hls, p+hls
	if p < hls+1 {
		start, end = 1, listSize
	}

	if end > maxPageNum {
		end = maxPageNum
	}

	for i := start; i <= end; i++ {
		pl = append(pl, &page{
			IsActive: i == p,
			PageNum:  i,
		})
	}
	return pl
}
