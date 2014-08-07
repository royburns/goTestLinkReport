<!DOCTYPE html>

<html>
{{template "base/head.tpl" .}}
	
	<body class="">
		<!-- {{template "base/header.tpl" .}} -->
		{{template "base/navbar.tpl" .}}

		<br/>
		<br/>
		<br/>
		<br/>
		<div class="container">
			<div class="left-col" style="height:560px;width:720px;">
				<!--table class="table table-bordered table-condensed table-hover table-striped" id="report-table" name="report-table" cellspacing="0" width="100%"-->
				<table class="table table-bordered table-condensed table-hover table-striped" 
				cellspacing="0" width="50%" style="table-layout:auto;white-space:nowrap;">

					<caption>{{.Caption}}</caption>
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
							<td>{{.Estimated}}</td>
							<td>{{.Executed}}</td>
							<td>{{.Remaining}}</td>
						</tr>
						{{end}}
					</tbody>
				</table>
			</div>

			<div class="right-col highchart-container" style="height:560px;width:720px;">
				<table class="highchart"
				data-graph-container=".highchart-container"
				data-graph-type="line"
				cellspacing="0" style="height:600px;width:800px;table-layout:fixed;white-space:nowrap;">

					<caption>{{.Caption}}</caption>
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
							<td>{{.Estimated}}</td>
							<td>{{.Executed}}</td>
							<td>{{.Remaining}}</td>
						</tr>
						{{end}}
					</tbody>
				</table>	
			</div>
		</div>
		<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>

<!-- 		<div id="statistics_sprint_json" style="width: 800px; min-width: 310px; height: 400px; margin: 0 auto"></div>

		<div class="highchart-container">
			<table class="---highchart"
				data-graph-container=".highchart-container"
				data-graph-type="line">
				<caption>Column example</caption>
				<thead>
					<tr>
						<th>Month</th>
						<th>Sales</th>
						<th>Benefits</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>January</td>
						<td>8000</td>
						<td>2000</td>
					</tr>
					<tr>
						<td>February</td>
						<td>12000</td>
						<td>3000</td>
					</tr>
					<tr>
						<td>March</td>
						<td>18000</td>
						<td>4000</td>
					</tr>
					<tr>
						<td>April</td>
						<td>2000</td>
						<td>-1000</td>
					</tr>
					<tr>
						<td>May</td>
						<td>500</td>
						<td>-2500</td>
					</tr>
				</tbody>
			</table>
		</div> -->
		
		{{template "statistics_sprint"}}
		
		{{template "base/js.tpl" .}}
		
		{{template "base/footer.tpl" .}}
	</body>
</html>
