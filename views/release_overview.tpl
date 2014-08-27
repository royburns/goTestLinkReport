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
								<select id="releaseoverview">
									{{range .ReleaseOverview}}
									<option value="{{.}}">{{.}}</option>
									{{end}}
								</select><br/><br/>

								<button onclick="GetReleaseOverviews();">Submit</button>
							</ul>
							
						</div>
					</div>

					<div class="right-col">
						<table class="table table-bordered table-condensed table-hover table-striped" 
						id="release_overview_table" name="release_overview_table" 
						cellspacing="0" width="100%" style="table-layout:fixed;">
							
							<thead>
								<tr>
									{{range .TableHeader}}
									<th>{{ . }}</th>
									{{end}}
								</tr>
							</thead>

							<tbody id="report-table-body">
								{{range .ReleaseOverviews}}
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
										{{if eq .Sprint1 ""}} {null} {{end}}
										{{.Sprint1}}
									</td>
									<td>
										{{if eq .Sprint2 ""}} {null} {{end}}
										{{.Sprint2}}
									</td>
									<td>
										{{if eq .Sprint3 ""}} {null} {{end}}
										{{.Sprint3}}
									</td>
									<td>
										{{if eq .Sprint4 ""}} {null} {{end}}
										{{.Sprint4}}
									</td>
									<td>
										{{if eq .Sprint5 ""}} {null} {{end}}
										{{.Sprint5}}
									</td>
									<td>
										{{if eq .Exec_Freq ""}} {null} {{end}}
										{{.Exec_Freq}}
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
		
		{{template "release_overview_home_js"}}
		{{template "release_overview_ajax"}}
		{{template "backToTop"}}
		{{template "base/js.tpl" .}}

		{{template "base/footer.tpl" .}}
	</body>
</html>
