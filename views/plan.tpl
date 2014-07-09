<!DOCTYPE html>

<html>
{{template "base/head.tpl" .}}
	
	<body class="">
		<!-- {{template "base/header.tpl" .}} -->
		{{template "base/navbar.tpl" .}}

		<div class="container">

			<div class="row">
				<div class="" >
					<!-- <div class="left-col">
						<div class="hovered">

							<ul class="nav pinned">
								{{range .TestPlans}}
								<li>
									{{.}}
								</li>
								{{end}}
							</ul>

						</div>
					</div> -->

					<div class="">
						<!--table class="table table-bordered table-condensed table-hover table-striped" id="report-table" name="report-table" cellspacing="0" width="100%"-->
						<table class="table table-bordered table-condensed table-hover table-striped" id="plan-table" name="plan-table" cellspacing="0" width="100%" style="table-layout:fixed;white-space:wrap;">

							
								<thead>
									<tr>
										{{range .TableHeader}}
											<th>{{ . }}</th>
										{{end}}
									</tr>
								</thead>
								
								<tbody>
									<tr>
										{{range $key, $val := .TestPlanTree}}
											{{range $key2, $val2 := $val}}
											<th>
												<table class="table table-condensed">
												{{.Detail | str2html}}
												</table>
											</th>
											{{end}}
										{{end}}
									</tr>
								</tbody>

								<tfoot>
									<tr>
										{{range $key, $val := .TestPlanTree}}
											{{range $key2, $val2 := $val}}
												<th>Total Time: {{.TotalTime}}</th>
											{{end}}
										{{end}}
									</tr>
								</tfoot>
								
						</table>
					</div>
				</div>
			</div>

			<!-- <div class="row" align="center">
				<ul class="pagination">
					<li class="previous">
						<a href="/plan/?p={{.Prev}}">Prev</a>
					</li>

					{{range .PageList}}
					<li {{if .IsActive}} class="active" {{end}}>
						{{if .IsActive}}
						<a href="#_buttom">{{.PageNum}}</a>
						{{else}}
						<a href="/plan/?p={{.PageNum}}">{{.PageNum}}</a>
						{{end}}
					</li>
					{{end}}

					<li class="next">
						<a href="/plan/?p={{.Next}}">Next</a>
					</li>
				</ul>
			</div> -->

		</div>
		
		{{template "plan_js"}}
		{{template "base/js.tpl" .}}

		{{template "base/footer.tpl" .}}
	</body>
</html>
