
		<!-- Load JS here for greater good -->
		
		<script src="/static/js/jquery-1.11.1.min.js"></script>
		<script src="/static/js/bootstrap.min.js"></script>
		<script src="/static/js/responsive-nav.min.js"></script>
		<script src="/static/js/jquery.pin.min.js"></script>
		<script src="/static/js/sco.tooltip.js"></script>
		<script src="/static/js/flatui-checkbox.js"></script>
		<script src="/static/js/app.js"></script>

		<script src="/static/js/jquery-ui-1.10.3.custom.min.js"></script>
		<script src="/static/js/jquery.ui.touch-punch.min.js"></script>
		<script src="/static/js/bootstrap-select.js"></script>
		<script src="/static/js/bootstrap-switch.js"></script>
		<script src="/static/js/jquery.dataTables.js"></script>

		<!-- NavBar! -->
		<script>
			$(function(){
				var select = "a[href=\\"+location.pathname+"]";
				$(select).parent("li").addClass("active");
			})
		</script>
		<!-- NavBar! -->

		<!-- Pin all the things! -->
		<script>
			$(".pinned").pin({containerSelector: ".row", minWidth: 940});
		</script>
		<!-- Pin all the things! -->

		{{define "home_js"}}
		<script>

			// Modify the column of the report grid.
			(function () {
				var tables = document.getElementsByName("report-table");
				var now = new Date();
				// var len = 100;
				for (var n = 0; n < tables.length; n++) {
					var table = tables[n];
					var items = table.getElementsByTagName("tr");
					for (var i = 0; i < items.length; i++) {
						// Limit length.
						for (var j = 0; j <= items[i].cells.length; j++) {
							var len = 0, dots = "";
							// alert("...");

							switch(j)
							{
								case 2:
									len = 12;dots="...";
									break;
								case 4:
									len = 32;dots="...";
									break;
								case 7:
									len = 19;dots="";
									break;
								case 8:
									len = 10;dots="...";
									break;
								default:
									break;
							}
							
							if (items[i].cells[j]) {
								items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.trim();
							};
							if (len > 0 && items[i].cells[j] && items[i].cells[j].innerHTML.length > len) {
								items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.substr(0, len) + dots;
							};
						};
					};
				};
			})();

		</script>
		{{end}}

		<!-- Report Grid -->
		<script type="text/javascript" language="javascript" class="init">
		$(document).ready(function() {
			// alert("...");
			// settings
			$('#report-table').dataTable({

				// paging
				"pagingType": "full_numbers",
				"paging": true,
				//"aLengthMenu": [ 10, 25, 50, 100 , -1]
				// "aLengthMenu": [ 50, 100 , -1],
				"lengthMenu": [[100, 200, -1], [100, 200, "All"]],
				// "width": "80%",

				// "scrollY": "200px",
				// "scrollCollapse": true,

				//.table-condensed
				"padding": 5,
				"text-overflow": "ellipsis",
				"overflow": "hidden",
				"white-space": "nowrap",
				"margin-left": 10,

				// set column visible
				// "columnDefs": [
				// 	{
				// 		"targets": [ 0 ],
				// 		"visible": false,
				// 		"searchable": false
				// 	},
				// ],
			});

			// set the table root as selection
			var table = $('#report-table').DataTable();
			$("#report-table tfoot th").each(function(i) {
				var select = $('<select><option value=""></option></select>')
					.appendTo($(this).empty())
					.on('change', function() {
						table.column(i)
							.search( '^'+$(this).val()+'$', true, false )
							.draw();
				});

				table.column(i).data().unique().sort().each(function(d, j) {
					select.append('<option value="' + d + '">' + d + '</option>')
				} );
			});


		});
		</script>
		<!-- Report Grid -->

		<footer class="footer" style="background-color:#A9F16C">
			<div class="container">
				<div class="row">
					<div class="hero-text">
						<p class="description">
							goTestLinkReport is power by Golang & Beego.
							<br/>
							Official website: <a href="http://{{.Website}}">{{.Website}}</a>
							<br/>
							Contact me: <a href="mailto:{{.Email}}">{{.Email}}</a>
						</p>
					</div>
				</div>
			</div>
		</footer>