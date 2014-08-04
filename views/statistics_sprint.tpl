<!DOCTYPE html>

<html>
{{template "base/head.tpl" .}}
	
	<body class="">
		<!-- {{template "base/header.tpl" .}} -->
		{{template "base/navbar.tpl" .}}

		<div class="container plan">
			<div class="row">
					
				<!--table class="table table-bordered table-condensed table-hover table-striped" id="report-table" name="report-table" cellspacing="0" width="100%"-->
				<table class="table table-bordered table-condensed table-hover table-striped" id="plan-table" name="plan-table" cellspacing="0" width="50%" style="table-layout:auto;white-space:nowrap;">

					
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
								<td>{{.SprintName}}</td>
								<td>{{.Planed}}</td>
								<td>{{.Executed}}</td>
								<td>{{.CompletedRate}}</td>
							</tr>
							{{end}}
						</tbody>
						
				</table>
				
			</div>
		</div>
		
		{{template "plan_js"}}
		{{template "base/js.tpl" .}}

		{{template "base/footer.tpl" .}}
	</body>
</html>
