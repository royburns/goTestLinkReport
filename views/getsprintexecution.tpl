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
								<select id="sp_id">
									{{range .sp_id}}
									<option value="{{.}}">Sprint - {{.}}</option>
									{{end}}
								</select><br/>
								<select id="sp_product">
									{{range .sp_product}}
									<option value="{{.}}">{{.}}</option>
									{{end}}
								</select><br/>
								<select id="sp_version">
									{{range .sp_version}}
									<option value="{{.}}">{{.}}</option>
									{{end}}
								</select><br/><br/>

								<button onclick="GetSprintExecutions();">Submit</button>

								<br/>
								<br/>
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
					</div>

					<div class="right-col">

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
									<td>{{.TestPlan}}</td>
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
										
										{{.Testcase_id}}
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
		
		{{template "sprint_execution_ajax"}}
		{{template "sprint_execution_date_filter"}}
		{{template "form_datetime"}}
		{{template "backToTop"}}
		
		{{template "base/js.tpl" .}}

		{{template "base/footer.tpl" .}}
	</body>
</html>
