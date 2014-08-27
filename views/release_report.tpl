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
								<select id="releasereport">
									{{range .ReleaseReport}}
									<option value="{{.}}">{{.}}</option>
									{{end}}
								</select><br/><br/>

								<button onclick="GetReleaseReports();">Submit</button>

								<br/>
								<br/>
								<br/>
								<table border="0" cellpadding="5" cellspacing="5">
									<tbody>
										<tr>
											<td style="color:#16a085;">Start Date: <input class="form_datetime" id="startdate" name="startdate" type="text" value=""></td>
										</tr>
										<tr>
											<td style="color:#16a085;">End Date: <input class="form_datetime" id="enddate" name="enddate" type="text" value=""></td>
										</tr>
									</tbody>
								</table>

							</ul>
							
						</div>
					</div>

					<div class="right-col">
						<table class="table table-bordered table-condensed table-hover table-striped form_datetime" 
						id="release_report_table" name="release_report_table" 
						cellspacing="0" width="100%" style="table-layout:fixed;">
							
							<thead>
								<tr>
									{{range .TableHeader}}
									<th>{{ . }}</th>
									{{end}}
								</tr>
							</thead>

							<tbody id="report-table-body">
								{{range .ReleaseReports}}
								<tr 
								{{if eq .Status "b"}} class="" {{end}}
								{{if eq .Status "p"}} class="success" {{end}}
								{{if eq .Status "f"}} class="danger" {{end}}
								{{if eq .Status ""}} class="nostatus" {{end}}
								>
									
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
										{{if eq .Status ""}} {null} {{end}}
										{{.Status}}
									</td>
									<td>
										{{if eq .Build ""}} {null} {{end}}
										{{.Build}}
									</td>
									<td>
										{{if eq .LastTimeRun ""}} {null} {{end}}
										{{.LastTimeRun}}
									</td>
									<td>
										{{if eq .DataRange ""}} {null} {{end}}
										{{.DataRange}}
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
		
		{{template "release_report_home_js"}}
		{{template "release_report_ajax"}}
		{{template "report_sprint_date_filter"}}
		{{template "form_datetime"}}
		{{template "backToTop"}}
		{{template "base/js.tpl" .}}

		{{template "base/footer.tpl" .}}
	</body>
</html>
