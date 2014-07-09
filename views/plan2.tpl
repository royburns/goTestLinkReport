<!DOCTYPE html>

<html>
{{template "base/head.tpl" .}}

	<script type="text/javascript" class="init">

	$(document).ready(function() {
		alert("...")
		$('#plan-table').dataTable( {
			"processing": true,
			"ajax": "/getplan",
			"columns": [
				{ "sprint4": "RegressionDetail" },
				{ "sprint4": "TotalTime" },
			]
		} );
	} );

	</script>
	
	<body class="header">
		<!-- {{template "base/header.tpl" .}} -->
		{{template "base/navbar.tpl" .}}

		<div>

			<div class="row">
				<div class="" >
					<!-- <div class="left-col">
						<div class="hovered">

							<ul class="nav pinned">
								{{range .TestPlans}}
								<li>
									{{.}}
								</li>
								{{end}}
							</ul>

						</div>
					</div> -->

					<div class="">
						<!--table class="table table-bordered table-condensed table-hover table-striped" id="report-table" name="report-table" cellspacing="0" width="100%"-->
						<table class="table table-bordered table-condensed table-hover table-striped" id="plan-table" name="plan-table" cellspacing="0" width="100%" style="table-layout:fixed;white-space:nowrap;">
							
						</table>
					</div>
				</div>
			</div>

			<!-- <div class="row" align="center">
				<ul class="pagination">
					<li class="previous">
						<a href="/plan/?p={{.Prev}}">Prev</a>
					</li>

					{{range .PageList}}
					<li {{if .IsActive}} class="active" {{end}}>
						{{if .IsActive}}
						<a href="#_buttom">{{.PageNum}}</a>
						{{else}}
						<a href="/plan/?p={{.PageNum}}">{{.PageNum}}</a>
						{{end}}
					</li>
					{{end}}

					<li class="next">
						<a href="/plan/?p={{.Next}}">Next</a>
					</li>
				</ul>
			</div> -->

		</div>
		
		{{template "home_js"}}
		{{template "report_table"}}
		{{template "base/js.tpl" .}}

		{{template "base/footer.tpl" .}}
	</body>
</html>
