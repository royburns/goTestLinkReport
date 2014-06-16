<!DOCTYPE html>

<html>
  	<head>
    	<title>Beego</title>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		
		<link href="/static/css/bootstrap.min.css" rel="stylesheet" />
		
	</head>
  	
  	<body>
  		<header class="hero-unit" style="background-color:#A9F16C">
			<div class="container">
			<div class="row">
			  <div class="hero-text">
			    <h1>Welcome to goTestLinkReport!</h1>
			    <p class="description">
			    	goTestLinkReport is a simple & powerful Go web framework which is inspired by tornado and sinatra.
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
					<th>Title</th>
					<th>Speaker(s)</th>
					<th>Day</th>
					<th>When</th>
					<th>Room</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						Welcome to FOSDEM 2014
					</td>
					<td>
						FOSDEM Staff</td>
					<td>
						Saturday
					</td>
					<td>
						10:30 - 10:55
					</td>
					<td>
						Janson
					</td>
				</tr>
			</tbody>
		</table>
	</body>
</html>
