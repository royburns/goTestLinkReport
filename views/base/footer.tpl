
		<!-- Load JS here for greater good -->
		<script src="/static/js/jquery-1.11.1.min.js"></script>
		<script src="/static/js/jquery.js"></script>
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

		<!-- Report Grid -->
		<script type="text/javascript" language="javascript" class="init">
		$(document).ready(function() {
			// settings
			$('#report-table').dataTable({
				"pagingType": "full_numbers",
				"paging":   true,
				//"aLengthMenu": [ 10, 25, 50, 100 , -1]
				"aLengthMenu": [ 50, 100 , -1],
			});

			//
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