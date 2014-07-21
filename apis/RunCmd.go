package apis

import (
// "encoding/json"
// "fmt"
// "os/exec"
// "strconv"
// "strings"
)

/*
{
	command:	"bee run"
	result:		"..."
}
*/

func (this *ApiController) RunCmd() {

	this.Data["Website"] = "goTestLinkReport.org"
	this.Data["Email"] = "roy.burns@163.com"

	this.TplNames = "cmd.tpl"
}
