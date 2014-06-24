<!DOCTYPE html>

<html>
{{template "base/head.tpl" .}}
	
	<body class="header">
	{{template "base/header.tpl" .}}
	{{template "base/navbar.tpl" .}}
		<div>

			<div class="row ">
				<div class="navbar navbar-inverse col-lg-2">
					<div class="navbar-nav">
						...
					</div>
				</div>

				<div class="navbar navbar-inverse col-lg-10" >
					<div class="navbar-nav">
						<div class="container">
							<button type="button" class="btn btn-link" data-toggle="collapse" data-target=".nav-collapse">
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>

							<div class="nav-collapse collapse">
								<ul class="nav">
									<li>
										<a href="#">
											Menu Item
											<span class="navbar-unread">1</span>
										</a>
									</li>
									<li class="active">
										<a href="#">
											Messages
											<span class="navbar-unread">1</span>
										</a>
										<ul>
											<li>
												<a href="#">Element One</a>
											</li>
											<li>
												<a href="#">Sub menu</a>
												<ul>
													<li><a href="#">Element One</a></li>
													<li><a href="#">Element Two</a></li>
													<li><a href="#">Element Three</a></li>
												</ul> 
											</li>
											<li><a href="#">Element Three</a></li>
										</ul> 
									</li>
									<li>
										<a href="#">
											About Us
											<span class="navbar-unread">1</span>
										</a>
									</li>
								</ul>
							</div>

						</div>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-2">
					<div class="left-nav hovered">
						<div class="clearfix">
							<ul class="nav pinned">
								{{range .TestPlans}}
								<li class="active">
									{{.}}
								</li>
								{{end}}
								
							</ul>
						</div>
					</div>
				</div>

				<div class="col-lg-10">
					<table class="table table-bordered table-condensed table-hover" name="report-table">
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
							{{if eq .Status ""}} class="warning" {{end}}
							{{if eq .Status "f"}} class="danger" {{end}}
							>
								<td>{{.TestPlan}}</td>
								<td>{{.Platform}}</td>
								<td>{{.ToadModule}}</td>
								<td>.SubModule</td>
								<td>{{.Testcase_id}}</td>
								<td>{{.TestCase}}</td>
								<td>{{.Status}}</td>
								<td>{{.Build}}</td>
								<td>{{.LasTimeRun}}</td>
								<td>{{.Notes}}</td>
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

			<div class="row" align="middle">
				<ul class="pagination">
					<li class="previous">
						<a href="/?p={{.Prev}}">Prev</a>
					</li>

					{{range .PageList}}
					<li {{if .IsActive}} class="active" {{end}}>
						{{if .IsActive}}
						<a href="#_buttom">{{.PageNum}}</a>
						{{else}}
						<a href="/?p={{.PageNum}}">{{.PageNum}}</a>
						{{end}}
					</li>
					{{end}}

					<li class="next">
						<a href="/?p={{.Next}}">Next</a>
					</li>
				</ul>
			</div>

		</div>

		{{template "home_js"}}

	{{template "base/footer.tpl" .}}
	</body>
</html>
