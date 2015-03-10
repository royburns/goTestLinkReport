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
								<li class="active" id="{{.Name}}">
									<a href="/report/?testplan={{.Name}}" class="">
										{{.Name}}
										<span class="badge">{{.Count}}</span>
									</a>
									
								</li>
								{{end}}

							</ul>

							<!-- <ul class="nav pinned">
								{{range .TestPlans}}
								<li>
									<a href="/report/?testplan={{.Name}}">
										{{.Name}}
									</a>
								</li>
								{{end}}
							</ul> -->
							
						</div>
					</div>

					<div class="right-col">
						<!-- <div class="hideloading"></div>
						<div class="showloading well well-large well-transparent lead" id="loading">
							<i class="icon-spinner icon-spin"></i> The report is loading...
						</div> -->
						<!--table class="table table-bordered table-condensed table-hover table-striped" id="report-table" name="report-table" cellspacing="0" width="100%"-->
						<table class="table table-bordered table-condensed table-hover table-striped" id="report-table" name="report-table" cellspacing="0" width="100%" style="table-layout:fixed;">
							
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
										
										{{.LasTimeRun}}
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
		
		{{template "home_js"}}
		{{template "report_table"}}
		{{template "backToTop"}}
		{{template "base/js.tpl" .}}

		{{template "base/footer.tpl" .}}
	</body>
</html>
