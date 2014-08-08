<!DOCTYPE html>

<html>
{{template "base/head.tpl" .}}
	
	<body class="">
		{{template "base/navbar.tpl" .}}

		<br/>
		<br/>
		<div class="container">
			<div class="left-col" style="height:560px;width:720px;">
				<table class="statistics_sprint_table table table-bordered table-condensed table-hover table-striped"
				name="statistics_sprint_table"
				data-graph-container=".statistics_sprint"
				data-graph-type="line"
				data-graph-dash-style="solid"
				data-graph-skip="1"
				data-graph-xaxis-type="datetime"
				cellspacing="0" width="50%" style="table-layout:auto;white-space:nowrap;">

					<caption>{{.Caption}}</caption>
					<thead>
						<tr>
							{{range .Title}}
							<th

							>{{ . }}</th>
							{{end}}
						</tr>
					</thead>
					
					<tbody>
						{{range .Sprint}}
						<tr>
							<td>{{.Date}}</td>
							<td>{{.Estimated}}</td>
							<td>{{.Executed}}</td>
							<td>{{.Remaining}}</td>
						</tr>
						{{end}}
					</tbody>
				</table>
			</div>

			<div id="statistics_sprint" class="right-col statistics_sprint" style="height:560px;width:760px;">
			</div>
		</div>

		<br/>
		<div id="container" style="height:560px; width:720px; min-width: 310px; height: 400px; margin: 0 auto"></div>

		<br/>
		<div id="statistics_sprint_json" style="height:560px;width:720px; min-width: 310px; height: 400px; margin: 0 auto"></div>

		{{template "statistics_sprint_js"}}
		
		{{template "statistics_sprint_json2"}}
		
		
		{{template "base/js.tpl" .}}
		
		{{template "base/footer.tpl" .}}

		<br/>
		<br/>
	</body>
</html>
