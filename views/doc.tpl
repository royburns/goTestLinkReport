<!DOCTYPE html>

<html>
{{template "base/head.tpl" .}}
	
	<body class="header">
	{{template "base/header.tpl" .}}
	{{template "base/navbar.tpl" .}}

		<div>

			<div class="row">
				<div class="left-nav" >
					<div class="left-col">
						<div class=" hovered">

							<ul class="nav pinned">
								{{range .TestPlans}}
								<li>
									{{.}}
								</li>
								{{end}}
							</ul>

						</div>
					</div>

					<div class="right-col">
						<!--table class="table table-bordered table-condensed table-hover table-striped" id="report-table" name="report-table" cellspacing="0" width="100%"-->
						<table class="table table-bordered table-condensed table-hover table-striped" id="report-table" name="report-table" cellspacing="0" width="100%" style="table-layout:auto;white-space:nowrap;">
							<caption>{{.TableCaption}}</caption>
							<thead>
								<tr>
									{{range .TableHeader}}
									<th>{{ . }}</th>
									{{end}}
								</tr>
							</thead>

							<tbody>
								{{range .TestExecutionTree}}
								<tr 
								{{if eq .Status "p"}} class="success" {{end}}
								{{if eq .Status "f"}} class="danger" {{end}}
								{{if eq .Status ""}} class="nostatus" {{end}}
								>
									<!-- <td>{{.TestPlan}}</td> -->
									<td>{{.Platform}}</td>
									<td>{{.ToadModule}}</td>
									<td data-toggle="tooltip" title="{{.SubModule}}">
										{{.SubModule}}
									</td>
									<td>{{.Testcase_id}}</td>
									<td data-toggle="tooltip" title="{{.TestCase}}">
										{{.TestCase}}
									</td>
									<td>
										{{if eq .Status "p"}} {pass} {{end}}
										{{if eq .Status "f"}} {failed} {{end}}
										{{if eq .Status ""}} {not run} {{end}}
									</td>
									<td>{{.Build}}</td>
									<td>{{.LasTimeRun}}</td>
									<td data-toggle="tooltip" title="{{.Notes}}">
										{{.Notes}}
									</td>
									<td>{{.Tester}}</td>
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

			<div class="row" align="center">
				<ul class="pagination">
					<li class="previous">
						<a href="/doc/?p={{.Prev}}">Prev</a>
					</li>

					{{range .PageList}}
					<li {{if .IsActive}} class="active" {{end}}>
						{{if .IsActive}}
						<a href="#_buttom">{{.PageNum}}</a>
						{{else}}
						<a href="/doc/?p={{.PageNum}}">{{.PageNum}}</a>
						{{end}}
					</li>
					{{end}}

					<li class="next">
						<a href="/doc/?p={{.Next}}">Next</a>
					</li>
				</ul>
			</div>

		</div>
		
		{{template "home_js"}}
		
	{{template "base/footer.tpl" .}}
	</body>
</html>