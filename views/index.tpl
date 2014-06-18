<!DOCTYPE html>

<html>
	{{template "base/head.tpl" .}}
  	
  	<body class="header">
  		{{template "base/header.tpl" .}}
  		{{template "base/navbar.tpl" .}}

		<table class="table table-bordered">
			<thead>
				<tr>
					<th>TestPlan</th>
					<th>Platform</th>
					<th>ToadModule</th>
					<th>SubModule</th>
					<th>Testcase_id</th>
					<th>TestCase</th>
					<th>Status</th>
					<th>Build</th>
					<th>LasTimeRun</th>
					<th>Notes</th>
					<th>Tester</th>
				</tr>
			</thead>
			<tbody>
				{{range .TestExecutionTree}}
				<tr>
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
		</table>
		
		{{template "base/footer.tpl" .}}
	</body>
</html>
