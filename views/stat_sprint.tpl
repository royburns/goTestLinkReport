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

								<button onclick="GetSprintStats();">Submit</button>
							</ul>

						</div>
					</div>

					<div class="right-col">
						<br/><br/>
						<div class="container">
								<div class="col-sm-1"></div>
								<div class="col-sm-5 statistics_sprint">
									<table class="statistics_sprint_table table-bordered table-condensed table-hover table-striped"
									id="statistics_sprint_table"
									name="statistics_sprint_table"
									data-graph-container=".statistics_sprint"
									data-graph-type="line"
									data-graph-dash-style="solid"
									data-graph-skip="1"
									data-graph-xaxis-type="datetime"
									cellspacing="0" width="50%" style="table-layout:auto;white-space:nowrap;">

										<caption class="stat_cap"><strong>{{.Caption}}</strong></caption><br/>
										<thead>
											<tr>
												{{range .Title}}
												<th>{{ . }}</th>
												{{end}}
											</tr>
										</thead>
										
										<tbody>
											{{range .Sprint}}
											<tr>
												<td>{{.Date}}</td>
												<td>{{.TotalCases}}</td>
												<td>{{.RemainedCases}}</td>
												<td>{{.FailedCases}}</td>
												<td>{{.CompletePCT}}</td>
											</tr>
											{{end}}
										</tbody>
									</table>
								</div>

								<div class="col-sm-4 statistics_sprint_json" id="statistics_sprint_json" width="40%" style="height:480px;width:640px;">
								</div>
						</div>

					</div>
				</div>
			</div>

		</div>
		
		{{template "sprint_stat_ajax"}}
		{{template "statistics_sprint_js"}}
		{{template "statistics_sprint_json2"}}
		
		{{template "backToTop"}}
		{{template "home_js"}}
		{{template "base/js.tpl" .}}

		{{template "base/footer.tpl" .}}
	</body>
</html>
