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
							
						</div>
					</div>

					<div class="right-col">
						<table class="table table-bordered table-condensed table-hover table-striped" 
						id="release_plan_table" name="release_plan_table" 
						cellspacing="0" width="100%" style="table-layout:fixed;">
							
							<thead>
								<tr>
									{{range .TableHeader}}
									<th>{{ . }}</th>
									{{end}}
								</tr>
							</thead>

							<tbody id="report-table-body">
								{{range .ReleasePlans}}
								<tr>
									
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
										{{.TC_Id}}
									</td>
									<td data-toggle="tooltip" title="{{.TestCase}}">
										{{if eq .TestCase ""}} {null} {{end}}
										{{.TestCase}}
									</td>
									<td>
										{{if eq .Covered ""}} {null} {{end}}
										{{.Covered}}
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
		{{template "release_plan_table"}}
		{{template "backToTop"}}
		{{template "base/js.tpl" .}}

		{{template "base/footer.tpl" .}}
	</body>
</html>
