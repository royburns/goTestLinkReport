<!DOCTYPE html>

<html>
{{template "base/head.tpl" .}}
	
	<body class="header">
	{{template "base/header.tpl" .}}
	{{template "base/navbar.tpl" .}}

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

			<div class="col-lg-10" >

				<div class="container">
					<table class="table table-bordered table-condensed" id="report-table" name="report-table">
						<thead>
							<tr>
								{{range .TableHeader}}
								<th>{{ . }}</th>
								{{end}}
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
								<td>
									{{if eq .Status ""}} {null} {{end}}
									{{.Status}}
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

		{{template "home_js"}}

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
					}
				}
			})();

		</script>
		{{end}}

	{{template "base/footer.tpl" .}}
	</body>
</html>
