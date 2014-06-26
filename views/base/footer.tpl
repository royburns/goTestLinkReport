
		<!-- Load JS here for greater good -->
		
		<!-- JS files -->

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
			$(".pinned").pin({containerSelector: ".row", minWidth: 1080});
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
		{{define "report_table"}}
		<script type="text/javascript" language="javascript" class="init">
		$(document).ready(function() {
			// alert("...");
			// settings
			$('#report-table').dataTable({

				stateSave: true,

				// paging
				"pagingType": "full_numbers",
				"paging": true,
				//"aLengthMenu": [ 10, 25, 50, 100 , -1],
				// "aLengthMenu": [ 50, 100 , -1],
				"lengthMenu": [[20, 50, 100, 200, -1], [20, 50, 100, 200, "All"]],
				// "width": "80%",

				// "scrollY": "200px",
				// "scrollCollapse": true,

				//.table-condensed
				"autoWidth": true,
				"padding": 5,
				"text-overflow": "ellipsis",
				"overflow": "hidden",
				"white-space": "nowrap",
				"margin-left": 10,

				// set column visible
				"columnDefs": [
					{
						// "targets": [ 0 ],
						// "visible": false,
						// "searchable": false
						
						// "targets": [5],
						// "createdCell": function (td, cellData, rowData, row, col) {
						// 	if ( cellData == "Status" ) {
						// 		$(td).css('color', 'blue')
						// 	}
						// }
					},
				],

			});

			// set the table head's width
			var table = $('#report-table').DataTable();
			$("#report-table thead th").each(function(i) {
				// var select = $('<select><option value="[ALL]">[ALL]</option></select>');
			});

			// set the table root as selection
			var table = $('#report-table').DataTable();
			$("#report-table tfoot th").each(function(i) {
				var select = $('<select><option value="[ALL]">[ALL]</option></select>')
					.appendTo($(this).empty())
					.on('change', function() {
						if ($(this).val() && $(this).val() != "[ALL]") {
							table.column(i)
								.search( '^'+$(this).val()+'$', true, false )
								.draw();
						} else{
							table.column(i)
								.search( '', true, false )
								.draw();
						};
				});

				table.column(i).data().unique().sort().each(function(d, j) {
					select.append('<option value="' + d + '">' + d + '</option>')
				} );
			});

		});
		</script>
		{{end}}
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