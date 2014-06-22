<!DOCTYPE html>

<html>
{{template "base/head.tpl" .}}
	
	<body class="header">
	{{template "base/header.tpl" .}}
	{{template "base/navbar.tpl" .}}

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
							<div class="btn-group" data-toggle="buttons">
								<ul class="nav pinned">

									{{range .TestPlans}}
									<li>
										<label class="btn ">
											<input type="checkbox">{{.}}
										</label>
									</li>
									{{end}}

									<label class="checkbox" for="checkbox1">
										<input type="checkbox" value="" id="checkbox1">
										Unchecked
									</label>
									<label class="checkbox" for="checkbox2">
										<input type="checkbox" checked="checked" value="" id="checkbox2">
										Checked
									</label>
									<label class="checkbox" for="checkbox3">
										<input type="checkbox" value="" id="checkbox3" disabled="">
										Disabled unchecked
									</label>
								</ul>
							</div>

							
								<ul class="nav pinned">
									{{range .TestPlans}}
									<li>
										<a>{{.}}</a>
									</li>
									{{end}}
								</ul>
							

						</div>
					</div>
				</div>

				<div class="col-lg-10">
					<table class="table table-bordered table-condensed" name="report-table">
						<thead>
							<tr>
								<th>
									<div class="btn-group">
										<button type="button" class="btn btn-success btn-large dropdown-toggle" data-toggle="dropdown">
											TestPlan
											<span class="caret"></span>
										</button>
										<ul class="dropdown-menu" role="menu">
											<li><a href="#">Action</a></li>
											<li><a href="#">Another action</a></li>
											<li><a href="#">Something else here</a></li>
											<li class="divider"></li>
											<li><a href="#">Separated link</a></li>
										</ul>
									</div>
								</th>
								<th>
									<label class="btn btn-primary">
										<input type="checkbox">
										Platform
									</label>
								</th>
								<th>
									<a href="#" class="btn btn-large btn-block dropdown-toggle">
										ToadModule
									</a>
								</th>
								<th>
									<a href="#" class="btn btn-large btn-block">
									SubModule
									</a>
								</th>
								<th>
									Testcase_id
								</th>
								<th>
									TestCase
								</th>
								<th>
									Status
								</th>
								<th>
									Build
								</th>
								<th>
									LasTimeRun
								</th>
								<th>
									Notes
								</th>
								<th>
									Tester
								</th>
							</tr>
						</thead>

						<tbody class="hovered">
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
								<td data-toggle="tooltip" title="{{.TestCase}}">
									{{.TestCase}}
								</td>
								<td>{{.Status}}</td>
								<td>{{.Build}}</td>
								<td>{{.LasTimeRun}}</td>
								<td data-toggle="tooltip" title="{{.Notes}}">
									{{.Notes}}
								</td>
								<td>{{.Tester}}</td>
							</tr>
							{{end}}
						</tbody>
						
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

			{{template "home_js"}}

		</div>

		<!-- Pin all the things! -->
		<script>
			$(".pinned").pin({containerSelector: ".row", minWidth: 940});
		</script>
		<!-- Pin all the things! -->

		{{define "home_js"}}
		<script>

			// Modify the column of the report grid.
			(function () {
				var tables = document.getElementsByName("report-table");
				var now = new Date();
				// var len = 100;
				for (var n = 0; n < tables.length; n++) {
					var table = tables[n];
					var items = table.getElementsByTagName("tr");
					for (var i = 1; i < items.length; i++) {
						// Limit length.
						for (var j = 0; j <= items[i].cells.length; j++) {
							var len = 32;
							if (j ==  5) {
								len = 40;
								if (items[i].cells[j] && items[i].cells[j].innerHTML.length > len) {
									items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.substr(0, len) + "...";
								};
							};
							if (j == 8) {
								len = 19;
								if (items[i].cells[j] && items[i].cells[j].innerHTML.length > len) {
									items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.substr(0, len);
								};
							};
							if (j == 9) {
								len = 12;
								items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.trim();
								if (items[i].cells[j] && items[i].cells[j].innerHTML.length > len) {
									// alert(items[i].cells[j].innerHTML);
									// items[i].cells[j].attr("title").value = items[i].cells[j].innerHTML;
									items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.substr(0, len) + "...";
								};
							};
						};
						// var s = table.rows[i].cells[0].getElementsByTagName("td")[0];
						// alert(s);
						// if (s.innerHTML.length > len) {
						// 	s.innerHTML = "..." + s.innerHTML.substr(s.innerHTML.length - len -3);
						// }
						// Convert timestamp to local time.
						// var t = parseInt(table.rows[i].cells[1].innerHTML);
						// var d = new Date(t * 1000);
						// table.rows[i].cells[1].innerHTML = d.toLocaleString();
					}
				}
			})();

			// ...
			(function () {
				// var tooltip = $.scojs_tooltip('#trigger');
			})();
		</script>
		{{end}}

	{{template "base/footer.tpl" .}}
	</body>
</html>
