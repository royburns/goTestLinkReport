<!DOCTYPE html>

<html>
  	<head>
    	<title>Beego</title>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		
		<link href="/static/css/styles.css" rel="stylesheet" />
		<link href="/static/css/responsive-nav.css" rel="stylesheet" />
		<link href="/static/css/bootstrap.min.css" rel="stylesheet" />
		<link href="/static/css/bootstrap-theme.min.css" rel="stylesheet" />

		<script src="/static/js/responsive-nav.min.js"></script>
		<script src="/static/js/bootstrap.min.js"></script>
		<script src="/static/js/jquery-1.11.1.min.js"></script>

		<style type="text/css">
			body {
				margin: 0px;
				font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
				font-size: 14px;
				line-height: 20px;
				color: rgb(51, 51, 51);
				background-color: rgb(255, 255, 255);
			}

			.hero-unit {
				padding: 20px;
				margin-bottom: 30px;
				border-radius: 6px 6px 6px 6px;
			}

			.container {
				width: 940px;
				margin-right: auto;
				margin-left: auto;
			}

			.row {
				margin-left: -20px;
			}

			h1 {
				margin: 10px 0px;
				font-family: inherit;
				font-weight: bold;
				text-rendering: optimizelegibility;
			}

			.hero-unit h1 {
				margin-bottom: 0px;
				font-size: 60px;
				line-height: 1;
				letter-spacing: -1px;
				color: inherit;
			}

			.description {
				padding-top: 5px;
				padding-left: 5px;
				font-size: 18px;
				font-weight: 200;
				line-height: 30px;
				color: inherit;
			}

			p {
				margin: 0px 0px 10px;
			}
		</style>
	</head>
  	
  	<body class="hero-unit">
  		<header class="hero-unit" style="background-color:#A9F16C">
			<div class="container">
				<div class="row">
					<div class="hero-text">
						<h1>Welcome to goTestLinkReport!</h1>
						<p class="description">
							goTestLinkReport is power by Golang & Beego.
							<br />
							Official website: <a href="http://{{.Website}}">{{.Website}}</a>
							<br />
							Contact me: {{.Email}}
						</p>
					</div>
				</div>
			</div>
		</header>

		<table class="table table-bordered">
			<thead>
				<tr>
					<th>Function</th>
					<th>Middle</th>
					<th>CaseName</th>
					<th>OS</th>
					<th>Platform</th>
				</tr>
			</thead>
			<tbody>
				{{range .Report}}
				<tr>
					<td>{{.Function}}</td>
					<td>{{.Middle}}</td>
					<td>{{.Casename}}</td>
					<td>{{.OS}}</td>
					<td>{{.Platform}}</td>
				</tr>
				{{end}}
			</tbody>
		</table>
		
	</body>
</html>
