
		<!-- Load JS here for greater good -->
		
		<!-- JS files -->

		<!-- loading iocn -->
		{{define "showloading"}}
		<script type="text/javascript">
			$(document).ready(function(){
				// var h = $(document).height();
				// $(".overlay").css({"height": h });

				// alert("show loading");
				$(".hideloading").css({'display':'block','opacity':'0.8'});
				$(".showloading").stop(true).animate({'margin-top':'300px','opacity':'1'},200);
				
			});
		</script>
		{{end}}

		{{define "hideloading"}}
		<script type="text/javascript">
			$(document).ready(function(){
				// var h = $(document).height();
				// $(".overlay").css({"height": h });

				// alert("hide loading");
				$(".showloading").stop(true).animate({'margin-top':'250px','opacity':'0'},400);
				$(".hideloading").css({'display':'none','opacity':'0'});
			});
		</script>
		{{end}}
		<!-- loading iocn -->

		<!-- Test! -->
		<script>
			$(function(){
				// var str = "123123 123-123 fsdfsf".match(/[^\W]\w+-\d+[^\W]/);
				// var str = "123123 ATE-123 fsdfsf ATE-456".match(/[^\W][a-z|A-Z]+-\d+[^\W]/);
				var str = "123123 ATE-123 fsdfsf ATE-456".match(/[^\W][a-z|A-Z]+-\d+[^\W]/g);
				// alert(str.length);
				// alert(str[0]);
			});
		</script>
		<!-- Test! -->

		<!-- NavBar! -->
		<script>
			$(function(){
				// alert(location.pathname);
				var select = "a[href=\\"+location.pathname+"]";
				// alert(select);
				$(select).parent("li").addClass("active");
			});
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

				// showloading();
				$(".hideloading").css({'display':'block','opacity':'0.6'});
				$(".showloading").stop(true).animate({'margin-top':'300px','opacity':'1'},200);

				var tables = document.getElementsByName("report-table");
				var now = new Date();
				// var len = 100;
				for (var n = 0; n < tables.length; n++) {
					var table = tables[n];
					var items = table.getElementsByTagName("tr");
					// var items = table.getElementsByTagName("tbody tr");
					// var items = table.getElementsById("#report-table-body");
					// alert(items.length);
					for (var i = 0; i < items.length; i++) {
						// Limit length.
						for (var j = 0; j <= items[i].cells.length; j++) {
							var len = 0, dots = "";
							// alert("...");

							if (items[i].cells[j]) {
								items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.trim();
								switch(j)
								{
									case 2:
										// len = 12;dots="...";
										break;
									case 4:
										// len = 32;dots="...";
										break;
									case 7:
										len = 19;dots="";
										break;
									case 8:
										// len = 10;dots="...";
										break;
									default:
										break;
								}

								if (len > 0 && items[i].cells[j] && items[i].cells[j].innerHTML.length > len) {
									items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.substr(0, len) + dots;
								};

								switch(j)
								{
									case 8:
										// Add a link for string like "QAT-123"
										// var str = items[i].cells[j].innerHTML.match(/\w+-\d+/);
										// var str = items[i].cells[j].innerHTML.match(/[^\W][a-z|A-Z]+-\d+[^\W]/);
										// if (str != null) {
										// 	var str1 = "<a href=\"https://jira.mel.software.dell.com/browse/" + str + "\" target=\"_blank\">" + str + "</a>";
										// 	items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.replace(str, 
										// 		str1);
										// };

										var str = items[i].cells[j].innerHTML.match(/[^\W][a-z|A-Z]+-\d+[^\W]/g);
										// alert(str);
										if (str != null && str.length > 0) {
											for (var k = 0; k < str.length; k++) {
												var str1 = "<a href=\"https://jira.mel.software.dell.com/browse/" + str[k] + "\" target=\"_blank\">" + str[k] + "</a>";
												items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.replace(str[k], str1);
											};
										};
										
										break;
									default:
										break;
								}
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

					"stateSave": false,

					// "dom": '<"top"i>rt<"bottom"flp><"clear">',
					"dom": '<"top"lfip>rt<"bottom"ip><"clear">',
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
				// alert(table.bStateSave);
				$("#report-table thead th").each(function(i) {
					// alert(table.column(i).header().innerHTML); // Get the header name of every column.
				});

				// set the table root as selection
				// var table = $('#report-table').DataTable();
				$("#report-table tfoot th").each(function(i) {
					// alert(i);
					if (!table.column(i).bVisible) {
						switch(i)
						{
							// The columns no need filter
							case 7:
							case 8: 
								// alert("...");
								break;
							default:

								var select = $('<select><option value="[ALL]">[ALL]</option></select>')
								.appendTo($(this).empty())
								.on('change', function() {
									if ($(this).val() && $(this).val() != "[ALL]") {
										table.column(i)
											.search( '^'+$(this).val()+'$', true, false )
											.draw();
									} else if ($(this).val() == "[ALL]") {
										table.column(i)
											.search( "", true, false )
											.draw();
									} else {
										alert($(this).val());
										table.column(i)
											.search( "", true, false )
											.draw();
									};
								});
								
								//
								table.column(i).data().unique().sort().each(function(d, j) {
									select.append('<option value="' + d + '">' + d + '</option>')
								} );

								break;
						};
					};
					
				});

				// hideloading();
				$(".showloading").stop(true).animate({'margin-top':'250px','opacity':'0'},400);
				$(".hideloading").css({'display':'none','opacity':'0'});

			});
		</script>
		{{end}}
		<!-- Report Grid -->
