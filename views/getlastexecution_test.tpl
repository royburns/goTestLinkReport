<!DOCTYPE html>

<html>
{{template "base/head.tpl" .}}
	
	<body >
		<!-- {{template "base/header.tpl" .}} -->
		{{template "base/navbar.tpl" .}}
		
		<div class="container">

			<div class="row">
				<div class="left-nav" >
					<div class="left-col">
						<div class="hovered">

							<ul class="nav pinned">
								{{range .TestPlans}}
								<li {{if eq .Active true}} class="active" {{end}} name="plan" id="{{.Name}}">
									
									<a href="/getlastexecution/?testplan={{.Name}}" class="">
										{{.Name}}
										<span class="badge">{{.Count}}</span>
									</a>
									
								</li>
								{{end}}

								<br/>
								<table border="0" cellpadding="5" cellspacing="5">
									<tbody>
										<tr>
											<td style="color:#16a085;">Start Date: <input class="form_datetime" id="startdate" name="startdate" type="text"></td>
										</tr>
										<tr>
											<td style="color:#16a085;">End Date: <input class="form_datetime" id="enddate" name="enddate" type="text"></td>
										</tr>
									</tbody>
								</table>
							</ul>

						</div>

						<!-- <div class="span3">
							<h3 class="demo-panel-title">Radio Buttons</h3>
							<label class="radio checked">
								
								<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1">
									Radio is off
							</label>
							<label class="radio">
								
								<input type="radio" name="optionsRadios" id="optionsRadios2" value="option1" checked="">
									Radio is on
							</label>
							<label class="radio disabled">
								
								<input type="radio" name="optionsRadiosDisabled" id="optionsRadios3" value="option2" disabled="">
									Disabled radio is off
							</label>
							<label class="radio disabled checked">
								
								<input type="radio" name="optionsRadiosDisabled" id="optionsRadios4" value="option2" checked="" disabled="">
									Disabled radio is on
							</label>
						</div> -->
					</div>

					<div class="right-col">
						<!-- <div class="hideloading"></div>
						<div class="showloading well well-large well-transparent lead" id="loading">
							<i class="icon-spinner icon-spin"></i> The report is loading...
						</div> -->
						<!--table class="table table-bordered table-condensed table-hover table-striped" id="report-table" name="report-table" cellspacing="0" width="100%"-->
						<table class="table table-bordered table-condensed table-hover table-striped form_datetime" id="report-table" name="report-table" cellspacing="0" width="100%" style="table-layout:fixed;">
							
							<thead>
								<tr>
									{{range .TableHeader}}
									<th>{{ . }}</th>
									{{end}}
								</tr>
							</thead>

							<tbody id="report-table-body">
								{{range .TestExecutionTree}}
								<tr 
								{{if eq .Status "b"}} class="" {{end}}
								{{if eq .Status "p"}} class="success" {{end}}
								{{if eq .Status "f"}} class="danger" {{end}}
								{{if eq .Status ""}} class="nostatus" {{end}}
								>
									<!-- <td>{{.TestPlan}}</td> -->
									<td>
										{{if eq .Platform ""}} {null} {{end}}
										{{.Platform}}
									</td>
									<td>
										{{if eq .ToadModule ""}} {null} {{end}}
										{{.ToadModule}}
									</td>
									<td data-toggle="tooltip" title="{{.SubModule}}">
										{{if eq .SubModule ""}} {null} {{end}}
										{{.SubModule}}
									</td>
									<td>
										<a href="http://zhutdptestlink:8080/lib/execute/execSetResults.php?version_id=1046&level=testcase&id=1045&tplan_id=1049&setting_build=11&setting_platform=0&caller=undefined">{{.Testcase_id}}</a>
									</td>
									<td data-toggle="tooltip" title="{{.TestCase}}">
										{{if eq .TestCase ""}} {null} {{end}}
										{{.TestCase}}
									</td>
									<td class="td5">
										{{if eq .Status "b"}} {blocked} {{end}}
										{{if eq .Status "p"}} {pass} {{end}}
										{{if eq .Status "f"}} {failed} {{end}}
										{{if eq .Status ""}} {not run} {{end}}
									</td>
									<td>
										{{if eq .Build ""}} {null} {{end}}
										{{.Build}}
									</td>
									<td>
										{{.LastTimeRun}}
									</td>
									<td data-toggle="tooltip" title="{{.Notes}}">
										{{if eq .Notes ""}} {null} {{end}}
										{{.Notes}}
									</td>
									<td>
										{{if eq .Tester ""}} {null} {{end}}
										{{.Tester}}
									</td>
								</tr>
								{{end}}
							</tbody>

							<tfoot>
								<tr>
									{{range .TableHeader}}
									<th>{{ . }}</th>
									{{end}}
								</tr>
							</tfoot> 
							
						</table>
					</div>
				</div>
			</div>

		</div>
		
		{{template "last_execution_ajax"}}
		{{template "last_execution_date_filter"}}
		{{template "form_datetime"}}
		{{template "backToTop"}}
		{{template "home_js"}}
		{{template "base/js.tpl" .}}

		{{template "base/footer.tpl" .}}
	</body>
</html>
