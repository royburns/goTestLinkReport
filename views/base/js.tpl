
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
				var str1 = "123123 124.2342 fadf.123123".match(/[^\s][0-9]+[^\s]/g);
				for (var i = str1.length - 1; i >= 0; i--) {
					// alert(str1[i]);
				};
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
				$(select).parent(".navbar-nav li").addClass("active");
			});
		</script>
		<!-- NavBar! -->

		<!-- Pin all the things! -->
		<script>
			$(".pinned").pin({containerSelector: ".row", minWidth: 1080});
		</script>
		<!-- Pin all the things! -->

		{{define "backToTop"}}
		<script>
			var $backToTopTxt = "Back to Top", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body")).attr("title", $backToTopTxt).click(function () {
					$("html, body").animate({ scrollTop: 0 }, 120);
				}), $backToTopFun = function () {
					var st = $(document).scrollTop(), winh = $(window).height();
					(st > 0) ? $backToTopEle.show() : $backToTopEle.hide();
					//IE6下的定位
					if (!window.XMLHttpRequest) {
						$backToTopEle.css("top", st + winh - 166);
					}
				};
			$(window).bind("scroll", $backToTopFun);
			$backToTopFun();
		</script>
		{{end}}

		{{define "home_js"}}
		<script>
			// Modify the column of the report grid.
			(function () {

				// showloading();
				// $(".hideloading").css({'display':'block','opacity':'0.6'});
				// $(".showloading").stop(true).animate({'margin-top':'300px','opacity':'1'},200);

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

		{{define "release_report_home_js"}}
		<script>
			// Modify the column of the report grid.
			(function () {

				var tables = document.getElementsByName("release_report_table");
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
									// items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.substr(0, len) + dots;
								};

								// switch(j)
								// {
								// 	case 5:
								// 		switch(items[i].cells[j].innerHTML)
								// 		{
								// 			case "b":
								// 				alert("...");
								// 				$("#report-table-body tr").delclass();
								// 				break;
								// 			case "p":
								// 				$("#report-table-body tr").addclass("success");
								// 				break;
								// 			case "f":
								// 				$("#report-table-body tr").addclass("danger");
								// 				break;
								// 			case "":
								// 				$("#report-table-body tr").addclass("nostatus");
								// 				break;
								// 			default:
								// 				break;
								// 		}
								// 		break;
								// 	case 7:
								// 		// items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.split("T")[0];
								// 		// if (items[i].cells[j].innerHTML == "0001-01-01") {
								// 		// 	items[i].cells[j].innerHTML = "{null}"
								// 		// }
								// 		break;
								// 	case 8:
										
								// 		break;
								// 	default:
								// 		break;
								// }
							};
						};
					};
				};

			})();

		</script>
		{{end}}

		{{define "release_overview_home_js"}}
		<script>
			// Modify the column of the report grid.
			(function () {

				var tables = document.getElementsByName("release_overview_table");
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

					"stateSave": true,

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
				// $(".showloading").stop(true).animate({'margin-top':'250px','opacity':'0'},400);
				// $(".hideloading").css({'display':'none','opacity':'0'});

			});
		</script>
		{{end}}
		<!-- Report Grid -->

		{{define "release_report_table"}}
		<script type="text/javascript" language="javascript" class="init">
			$(document).ready(function() {
				// alert("...");
				// settings
				$('#release_report_table').dataTable({

					"stateSave": true,

					// "dom": '<"top"i>rt<"bottom"flp><"clear">',
					"dom": '<"top"lfip>rt<"bottom"ip><"clear">',
					// paging
					"pagingType": "full_numbers",
					"paging": true,
					"lengthMenu": [[20, 50, 100, 200, -1], [20, 50, 100, 200, "All"]],

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
				var table = $('#release_report_table').DataTable();
				// alert(table.bStateSave);
				$("#release_report_table thead th").each(function(i) {
					// alert(table.column(i).header().innerHTML); // Get the header name of every column.
				});

				// set the table root as selection
				// var table = $('#report-table').DataTable();
				$("#release_report_table tfoot th").each(function(i) {
					// alert(i);
					if (!table.column(i).bVisible) {
						switch(i)
						{
							// The columns no need filter
							case 7:
							case 8:
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

			});
		</script>
		{{end}}

		{{define "release_overview_table"}}
		<script type="text/javascript" language="javascript" class="init">
			$(document).ready(function() {
				// alert("...");
				// settings
				$('#release_overview_table').dataTable({

					"stateSave": true,

					// "dom": '<"top"i>rt<"bottom"flp><"clear">',
					"dom": '<"top"lfip>rt<"bottom"ip><"clear">',
					// paging
					"pagingType": "full_numbers",
					"paging": true,
					"lengthMenu": [[20, 50, 100, 200, -1], [20, 50, 100, 200, "All"]],

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
				var table = $('#release_overview_table').DataTable();
				// alert(table.bStateSave);
				$("#release_overview_table thead th").each(function(i) {
					// alert(table.column(i).header().innerHTML); // Get the header name of every column.
				});

				// set the table root as selection
				// var table = $('#report-table').DataTable();
				$("#release_overview_table tfoot th").each(function(i) {
					// alert(i);
					if (!table.column(i).bVisible) {
						switch(i)
						{
							// The columns no need filter
							// case 7:
							// case 8:
							// 	break;
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

			});
		</script>
		{{end}}

		{{define "plan_js"}}
		<script>
			// Modify the column of the report grid.
			(function () {

				var tables = document.getElementsByName("plan-table");
				var now = new Date();
				// var len = 100;
				for (var n = 0; n < tables.length; n++) {
					var table = tables[n];
					var items = table.getElementsByTagName("tr");
					for (var i = 1; i < items.length; i++) { // do not process the head
						// Limit length.
						for (var j = 0; j <= items[i].cells.length; j++) {
							var len = 0, dots = "";
							// alert("...");

							// if (items[i].cells[j]) {
							// 	items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.trim();

							// 	var str = items[i].cells[j].innerHTML.match(/[^\W][0-9|\.]+[^\W]/g);
							// 	// alert(str);
							// 	if (str != null && str.length > 0) {
							// 		// alert(str.length);
							// 		for (var k = 0; k < str.length; k++) {
							// 			// alert(str[k]);
							// 			// var str1 = "[" + str[k] + "]";
							// 			// var str1 = fmt.Sprintf("[%s]", str[k]);
							// 			// items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.replace(str[k], str1);
							// 		};
							// 	};
							// };
						};
					};
				};
			})();

		</script>
		{{end}}

		{{define "last_execution_ajax"}}
		<script>
			
			$(document).ready(function() {
				// alert("...");

				// var arr = $("ul.pinned li.active").toArray();
				// var testplan;
				// if (arr[0]) {
				// 	testplan = arr[0].id;
				// 	alert(testplan);
				// };
				
				// alert(testplan);
				
				// location.pathname = "";
				// location.pathname = "/api" + location.pathname + "";
				// alert(location.pathname);
				// alert(location.href);
				// alert(location.search);

				$('#report-table').dataTable( {

					"ajax": {
						// "url": "api/getlastexecution",
						// "url": "api/getlastexecution/?testplan=" + testplan,
						"url": "/api" + location.pathname + location.search,
						"dataSrc": ""
					},

					// "deferRender": true,
					"columns": [
						{ "data": "Platform" },
						{ "data": "ToadModule" },
						{ "data": "SubModule" },
						{ "data": "Testcase_id" },
						{ "data": "TestCase" },
						{ "data": "Status" },
						{ "data": "Build" },
						{ "data": "LastTimeRun" },
						{ "data": "Notes" },
						{ "data": "Tester" },
					],

					// "stateSave": true,

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

					"createdRow": function ( row, data, index ) {
						// if ( data[5].replace(/[\$,]/g, '') * 1 > 4000 ) {
						// 	$('td', row).eq(5).addClass('highlight');
						//	$(row).eq(5).addClass('highlight');
						// }

						// if ( data[4] == "A" )
						// {
						// 	$('td:eq(4)', row).html( '<b>A</b>' );
						// }

						// alert(row.innerHTML);
						// alert(data);
						// alert(index);

						var items = row.getElementsByTagName("td");
						// alert(items.length);
						for (var i = 0; i <= items.length; i++) {
							var len = 0, dots = "";
							// alert("...");

							if (items[i]) {
								items[i].innerHTML = items[i].innerHTML.trim();
								switch(i)
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
								};

								if (len > 0 && items[i] && items[i].innerHTML.length > len) {
									items[i].innerHTML = items[i].innerHTML.substr(0, len) + dots;
								};

								switch(i)
								{
									case 3:
										var str = items[i].innerHTML.match(/\d+/g);
										if (str != null && str.length > 0) {
											for (var k = 0; k < str.length; k++) {
												// var url = "http://zhutdptestlink:8080/lib/execute/execSetResults.php?version_id=1046&level=testcase&id=1045&tplan_id=1049&setting_build=11&setting_platform=0&caller=undefined"
												var str1 = "<a href=\"http://zhutdptestlink:8080/lib/execute/execSetResults.php?version_id=1046&level=testcase&id=1045&tplan_id=1049&setting_build=11&setting_platform=0&caller=undefined"  + "\" target=\"_blank\">" + str[k] + "</a>";
												items[i].innerHTML = items[i].innerHTML.replace(str[k], str1);
											};
										};
										break;
									case 5:
										switch(items[i].innerHTML)
										{
											case "blocked":
												$(row).addClass('');
												// items[i].innerHTML = "{blocked}";
												// data[i] = "{blocked}"; // make no sense
												break;
											case "passed":
												$(row).addClass('success');
												break;
											case "failed":
												$(row).addClass('danger');
												break;
											case "not run":
												$(row).addClass('nostatus');
												break;
											default:
												break;
										}
										break;
									case 8:
										var str = items[i].innerHTML.match(/[^\W][a-z|A-Z]+-\d+[^\W]/g);
										// alert(str);
										if (str != null && str.length > 0) {
											for (var k = 0; k < str.length; k++) {
												var str1 = "<a href=\"https://jira.mel.software.dell.com/browse/" + str[k] + "\" target=\"_blank\">" + str[k] + "</a>";
												items[i].innerHTML = items[i].innerHTML.replace(str[k], str1);
											};
										};
										
										break;
									default:
										break;
								};
							};
						};
					},// createdRow

					// footer callback
					// "footerCallback": function( tfoot, data, start, end, display ) {
					// 	// tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
					// 	alert("...");
					// },// footerCallback

					"initComplete": function(settings, json) {
						// set the table head's width
						var table = $('#report-table').DataTable();
						// alert(table.bStateSave);
						$("#report-table thead th").each(function(i) {
							// alert(table.column(i).header().innerHTML); // Get the header name of every column.
						});

						$("#report-table tbody th").each(function(i) {
							alert(table.column(i).body().innerHTML); // Get the header name of every column.
						});

						// alert('inner');
						// set the table root as selection
						$("#report-table tfoot th").each(function(i) {
							// alert(i);
							if (!table.column(i).bVisible) {
								switch(i)
								{
									// The columns no need filter
									// case 7:
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
												// alert($(this).val());
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
					},// initComplete

				} );

			} );

		</script>
		{{end}}

		{{define "sprint_execution_ajax"}}
		<script>

			$(document).ready(function() {
				// alert("...");

				var sp_id = $("#sp_id").val();
				var sp_product = $("#sp_product").val();
				var sp_version = $("#sp_version").val();
				var search = "?sp_id=" + sp_id + "&" + "sp_product=" + sp_product + "&" + "sp_version=" + sp_version;
				
				// alert(search);
				
				// location.pathname = "";
				// location.pathname = "/api" + location.pathname + "";
				// alert(location.pathname);
				// alert(location.href);
				// alert(location.search);

				$('#report-table').dataTable( {

					"ajax": {
						"url": "/api" + location.pathname + search,
						"dataSrc": ""
					},

					// "deferRender": true,
					// "Product": "tdp",
					// "Version": "3.7",
					// "SprintNo": 1,
					// "TP_ID": 2403,
					// "TestPlan": "TDP_3.7_S1",
					// "Platform_ID": 75,
					// "Platform": "NoPlatform",
					// "ToadModule": "Licensing",
					// "SubModule": "TDP Licesing",
					// "Testcase_id": 26,
					// "TestCase": "Toad for Oracle DEV key",
					// "Status": "blocked",
					// "Build_ID": 492,
					// "Build": "3.7.0.2",
					// "Date": "2014-08-14T02:52:33+08:00",
					// "LastTimeRun": "2014-08-14",
					// "Notes": "",
					// "Tester": "csang"
					"columns": [
						{ "data": "TP_ID" },
						{ "data": "TestPlan" },
						{ "data": "Platform_ID" },
						{ "data": "Platform" },
						{ "data": "ToadModule" },
						{ "data": "SubModule" },
						{ "data": "Testcase_id" },
						{ "data": "TestCase" },
						{ "data": "Status" },
						{ "data": "Build_ID" },
						{ "data": "Build" },
						{ "data": "LastTimeRun" },
						{ "data": "Notes" },
						{ "data": "Tester" },
					],

					// "stateSave": true,

					"dom": '<"top"lfip>rt<"bottom"ip><"clear">',
					// paging
					"pagingType": "full_numbers",
					"paging": true,
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
							// "targets": [ 0,2 ],
							// "visible": false,
							// "searchable": false
							
							// "targets": [5],
							// "createdCell": function (td, cellData, rowData, row, col) {
							// 	if ( cellData == "Status" ) {
							// 		$(td).css('color', 'blue')
							// 	}
							// }
						},
						{ "visible": false,  "targets": [ 0, 2, 9 ] }
					],

					"createdRow": function ( row, data, index ) {
						// if ( data[5].replace(/[\$,]/g, '') * 1 > 4000 ) {
						// 	$('td', row).eq(5).addClass('highlight');
						//	$(row).eq(5).addClass('highlight');
						// }

						// if ( data[4] == "A" )
						// {
						// 	$('td:eq(4)', row).html( '<b>A</b>' );
						// }

						// alert(row.innerHTML);
						// alert(data.length);
						// alert(data["TP_ID"]);
						// alert(index);

						var items = row.getElementsByTagName("td");
						// alert(items.length);
						for (var i = 0; i <= items.length; i++) {
							var len = 0, dots = "";
							// alert("...");

							if (items[i]) {
								items[i].innerHTML = items[i].innerHTML.trim();
								switch(i)
								{
									case 2:
										// len = 12;dots="...";
										break;
									case 4:
										// len = 32;dots="...";
										break;
									case 8:
										// len = 19;dots="";
										break;
									case 9:
										// len = 10;dots="...";
										break;
									default:
										break;
								};

								if (len > 0 && items[i] && items[i].innerHTML.length > len) {
									items[i].innerHTML = items[i].innerHTML.substr(0, len) + dots;
								};

								switch(i)
								{
									case 4:
										// alert(items[i].innerHTML);
										var str = items[i].innerHTML.match(/\d+/g);
										if (str != null && str.length > 0) {
											for (var k = 0; k < str.length; k++) {
												var str1 = "<a href=\"http://zhutdptestlink:8080/lib/testcases/archiveData.php?edit=testcase&id=" + str + "&tcversion_id=undefined" + "\" target=\"_blank\">" + str[k] + "</a>";
												items[i].innerHTML = items[i].innerHTML.replace(str[k], str1);
											};
										};
										break;
									case 6:
										switch(items[i].innerHTML)
										{
											case "blocked":
												$(row).addClass('');
												// items[i].innerHTML = "{blocked}";
												// data[i] = "{blocked}"; // make no sense
												break;
											case "passed":
												$(row).addClass('success');
												break;
											case "failed":
												$(row).addClass('danger');
												break;
											case "not run":
												$(row).addClass('nostatus');
												break;
											default:
												break;
										}
										var str = items[4].innerHTML.match(/>\d+</g);
										if (str != null && str.length > 0) {
											var str = str[0].match(/\d+/g);
											var str1 = "<a href=\"http://zhutdptestlink:8080/lib/execute/execSetResults.php?level=testcase&id=" + str[0] + "&tplan_id=" + data["TP_ID"] + "&setting_build=" + data["Build_ID"] + "&setting_platform=" + data["Platform_ID"] + "\" target=\"_blank\">" + items[i].innerHTML + "</a>";
											items[i].innerHTML = str1;
										};
										break;
									case 8:
										var str = items[4].innerHTML.match(/>\d+</g);
										if (str != null && str.length > 0) {
											var str = str[0].match(/\d+/g);
											var str1 = "<a href=\"http://zhutdptestlink:8080/lib/execute/execHistory.php?tcase_id=" + str[0] + "\" target=\"_blank\">" + items[i].innerHTML + "</a>";
											items[i].innerHTML = str1;
										};
										break;
									case 9:
										var str = items[i].innerHTML.match(/[^\W][a-z|A-Z]+-\d+[^\W]/g);
										// alert(str);
										if (str != null && str.length > 0) {
											for (var k = 0; k < str.length; k++) {
												var str1 = "<a href=\"https://jira.mel.software.dell.com/browse/" + str[k] + "\" target=\"_blank\">" + str[k] + "</a>";
												items[i].innerHTML = items[i].innerHTML.replace(str[k], str1);
											};
										};
										break;
									default:
										break;
								};
							};
						};
					},// createdRow

					// footer callback
					// "footerCallback": function( tfoot, data, start, end, display ) {
					// 	// tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
					// 	alert("...");
					// },// footerCallback

					"initComplete": function(settings, json) {
						// set the table head's width
						var table = $('#report-table').DataTable();
						// alert(table.bStateSave);
						$("#report-table thead th").each(function(i) {
							// alert(table.column(i).header().innerHTML); // Get the header name of every column.
						});

						$("#report-table tbody th").each(function(i) {
							alert(table.column(i).body().innerHTML); // Get the header name of every column.
						});

						// alert('inner');
						// set the table root as selection
						$("#report-table tfoot th").each(function(i) {
							// alert(i);
							if (!table.column(i).bVisible) {
								switch(i)
								{
									// The columns no need filter
									// case 7:
									// case 8: 
									// 	// alert("...");
									// 	break;
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
												// alert($(this).val());
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
					},// initComplete

				} );

			} );

		</script>
		{{end}}

		{{define "sprint_execution_date_filter"}}
		<script>
			$.fn.dataTable.ext.search.push(
				function( settings, data, dataIndex ) {
				var min = $('#startdate').val();
				var max = $('#enddate').val();
				// var age = parseFloat( data[7] ) || 0; // use data for the age column
				var date = data[7].split("T")[0];
				// alert(typeof(date));
				
				if ( ( min == '' && max == '' ) ||
					( min == '' && date <= max ) ||
					( min <= date && '' == max ) ||
					( min <= date && date <= max ) )
					{
						return true;
					}
					return false;
				}
			);
			
			$(document).ready(function() {
				
				var table = $('#report-table').DataTable();

				// Event listener to the two range filtering inputs to redraw on input
				$('#startdate, #enddate').keyup( function() {
					table.draw();
				} );
			} );
		</script>
		{{end}}

		{{define "report_sprint_date_filter"}}
		<script>
			// $('.form_datetime').datetimepicker({
			// 	format: 'yyyy-mm-dd'
			// });

			$.fn.dataTable.ext.search.push(
				function( settings, data, dataIndex ) {
				var min = $('#startdate').val();
				var max = $('#enddate').val();
				// var age = parseFloat( data[7] ) || 0; // use data for the age column
				var date = data[7].split(" ")[0];
				// alert(typeof(date));
				
				if ( ( min == '' && max == '' ) ||
					( min == '' && date <= max ) ||
					( min <= date && '' == max ) ||
					( min <= date && date <= max ) )
					{
						return true;
					}
					return false;
				}
			);
			
			$(document).ready(function() {
				
				var table = $('#release_report_table').DataTable();

				// Event listener to the two range filtering inputs to redraw on input
				$('#startdate, #enddate').keyup( function() {
					table.draw();
				} );
			} );
		</script>
		{{end}}

		{{define "last_execution_date_filter"}}
		<script>
			$.fn.dataTable.ext.search.push(
				function( settings, data, dataIndex ) {
				var min = $('#startdate').val();
				var max = $('#enddate').val();
				// var age = parseFloat( data[7] ) || 0; // use data for the age column
				var date = data[7].split("T")[0];
				// alert(typeof(date));
				
				if ( ( min == '' && max == '' ) ||
					( min == '' && date <= max ) ||
					( min <= date && '' == max ) ||
					( min <= date && date <= max ) )
					{
						return true;
					}
					return false;
				}
			);
			
			$(document).ready(function() {
				
				var table = $('#report-table').DataTable();

				// Event listener to the two range filtering inputs to redraw on input
				$('#startdate, #enddate').keyup( function() {
					// alert("1");
					table.draw();
				} );
				$('#startdate, #enddate').change( function() {
					// alert("2");
					table.draw();
				} );
			} );
		</script>
		{{end}}

		{{define "sprint_stat_ajax"}}
		<script>
			
			$(document).ready(function() {
				// alert("...");

				var sp_id = $("#sp_id").val();
				var sp_product = $("#sp_product").val();
				var sp_version = $("#sp_version").val();
				var search = "?sp_id=" + sp_id + "&" + "sp_product=" + sp_product + "&" + "sp_version=" + sp_version;
				var str = "/api" + location.pathname + search;
				// alert(str);

				$('#statistics_sprint_table').dataTable( {

					"ajax": {
						"url": str,
						"dataSrc": ""
					},

					// "deferRender": true,
					"columns": [
						{ "data": "Date" },
						{ "data": "TotalCases" },
						{ "data": "RemainedCases" },
						{ "data": "FailedCases" },
						{ "data": "CompletePCT" },
					],

					// "stateSave": true,

					"paging": false,
					"ordering": false,
					"info":     false,
					"filter":   false,

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

					"createdRow": function ( row, data, index ) {

						var items = row.getElementsByTagName("td");
						// alert(items.length);
						for (var i = 0; i <= items.length; i++) {
							var len = 0, dots = "";
							// alert("...");

							if (items[i]) {
								items[i].innerHTML = items[i].innerHTML.trim();

								switch(i)
								{
									case 0:
										items[i].innerHTML = items[i].innerHTML.split("T")[0];
										break;
									default:
										break;
								};
							};
						};
					},// createdRow

				} );

			} );

		</script>
		{{end}}

		{{define "release_report_ajax"}}
		<script>
			$(document).ready(function() {

				var releasereport = $("#releasereport").val();
				var search = "?releasereport=" + releasereport;
				var str = "/api" + location.pathname + search;
				// alert(str);

				$('#release_report_table').dataTable( {

					"ajax": {
						"url": str,
						"dataSrc": ""
					},

					// "deferRender": true,
					"columns": [
						{ "data": "Platform" },
						{ "data": "ToadModule" },
						{ "data": "SubModule" },
						{ "data": "TC_Id" },
						{ "data": "TestCase" },
						{ "data": "Status" },
						{ "data": "Build" },
						{ "data": "LastTimeRun" },
						{ "data": "DataRange" },
						{ "data": "Covered" },
					],

					// "stateSave": true,
					"dom": '<"top"lfip>rt<"bottom"ip><"clear">',

					"paging": 	true,
					"ordering": true,
					"info":     true,
					"filter":   true,
					"lengthMenu": [[20, 50, 100, 200, -1], [20, 50, 100, 200, "All"]],

					"autoWidth": true,
					"padding": 5,
					"text-overflow": "ellipsis",
					"overflow": "hidden",
					"white-space": "nowrap",
					"margin-left": 10,

					// set column visible
					"columnDefs": [
						{
						},
					],

					"createdRow": function ( row, data, index ) {
						var items = row.getElementsByTagName("td");
						// alert(items.length);
						for (var i = 0; i <= items.length; i++) {
							var len = 0, dots = "";
							// alert("...");

							if (items[i]) {
								items[i].innerHTML = items[i].innerHTML.trim();

								switch(i)
								{
									// case 0:
									// 	items[i].innerHTML = items[i].innerHTML.split("T")[0];
									// 	break;
									case 5:
										// alert(items[i].innerHTML);
										switch(items[i].innerHTML)
										{
											case "b":
												// alert("...");
												$(row).removeClass();
												break;
											case "p":
												// alert("...");
												$(row).addClass("success");
												break;
											case "f":
												$(row).addClass("danger");
												break;
											case "":
												$(row).addClass("nostatus");
												break;
											default:
												break;
										}
										break;
									default:
										break;
								};
							};
						};
					},// createdRow

					"initComplete": function(settings, json) {
						// set the table head's width
						var table = $('#release_report_table').DataTable();
						// alert(table.bStateSave);
						$("#release_report_table thead th").each(function(i) {
							// alert(table.column(i).header().innerHTML); // Get the header name of every column.
						});

						$("#release_report_table tbody th").each(function(i) {
							alert(table.column(i).body().innerHTML); // Get the header name of every column.
						});

						// alert('inner');
						// set the table root as selection
						$("#release_report_table tfoot th").each(function(i) {
							// alert(i);
							if (!table.column(i).bVisible) {
								switch(i)
								{
									// The columns no need filter
									// case 7:
									// case 8: 
										// alert("...");
										// break;
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
												// alert($(this).val());
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
					},// initComplete

				} );

			} );
		</script>
		{{end}}

		{{define "release_overview_ajax"}}
		<script>
			$(document).ready(function() {

				var releaseoverview = $("#releaseoverview").val();
				var search = "?releaseoverview=" + releaseoverview;
				var str = "/api" + location.pathname + search;
				// alert(str);

				$('#release_overview_table').dataTable( {

					"ajax": {
						"url": str,
						"dataSrc": ""
					},

					// "deferRender": true,
					"columns": [
						{ "data": "Platform" },
						{ "data": "ToadModule" },
						{ "data": "SubModule" },
						{ "data": "TC_Id" },
						{ "data": "TestCase" },
						{ "data": "Sprint1" },
						{ "data": "Sprint2" },
						{ "data": "Sprint3" },
						{ "data": "Sprint4" },
						{ "data": "Sprint5" },
						{ "data": "Exec_Freq" },
					],

					// "stateSave": true,
					"dom": '<"top"lfip>rt<"bottom"ip><"clear">',

					"paging": 	true,
					"ordering": true,
					"info":     true,
					"filter":   true,
					"lengthMenu": [[20, 50, 100, 200, -1], [20, 50, 100, 200, "All"]],

					"autoWidth": true,
					"padding": 5,
					"text-overflow": "ellipsis",
					"overflow": "hidden",
					"white-space": "nowrap",
					"margin-left": 10,

					// set column visible
					"columnDefs": [
						{
						},
					],

					"createdRow": function ( row, data, index ) {

						var table = $('#release_overview_table').DataTable();
						var items = row.getElementsByTagName("td");
						// alert(items.length);
						for (var i = 0; i <= items.length; i++) {
							var len = 0, dots = "";
							// alert("...");

							if (items[i]) {
								items[i].innerHTML = items[i].innerHTML.trim();

								switch(i)
								{
									case 10:
										// items[i].innerHTML = "...";
										break;
									default:
										break;
								};
							};
						};

						// var Exec_Freq = 0;
						// for (var i = 5; i < items.length-1; i++) {
						// 	// alert(items[i]);
						// 	if (items[i].innerHTML) {
						// 		Exec_Freq = Exec_Freq + 1;
						// 		// alert("...");
						// 	};
						// };
						// // alert(Exec_Freq);
						// if (Exec_Freq && Exec_Freq != 0) {
						// 	items[items.length-1].innerHTML = Exec_Freq;
						// 	// alert(table.column(items.length-1).data());
						// };
					},// createdRow

					"initComplete": function(settings, json) {
						// set the table head's width
						var table = $('#release_overview_table').DataTable();
						// alert(table.bStateSave);
						$("#release_overview_table thead th").each(function(i) {
							// alert(table.column(i).header().innerHTML); // Get the header name of every column.
						});

						$("#release_overview_table tbody th").each(function(i) {
							alert(table.column(i).body().innerHTML); // Get the header name of every column.
						});

						// alert('inner');
						// set the table root as selection
						$("#release_overview_table tfoot th").each(function(i) {
							// alert(i);
							if (!table.column(i).bVisible) {
								switch(i)
								{
									// The columns no need filter
									// case 7:
									// case 8: 
									// 	// alert("...");
									// 	break;
									// case 10:
									// 	var title = $('#release_overview_table thead th').eq( $(this).index() ).text();
									// 	$(this).html( '<input type="text" placeholder="Search '+title+'" />' );
									// 	$("#release_overview_table tfoot input").on( 'keyup change', function () {
									// 		table
									// 		.column( $(this).parent().index()+':visible' )
									// 		.search( this.value )
									// 		.draw();
									// 	} );
									// 	break;
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
												// alert($(this).val());
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
					},// initComplete

				} );

			} );
		</script>
		{{end}}

		{{define "table_addfooter"}}
		<script>

			$(document).ready(function() {
				// set the table root as selection
				var table = $('#report-table').DataTable();
				// alert(table);
				$("#report-table tfoot th").each(function(i) {
					// alert(i);
					// alert('outer');
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
			} );

		</script>
		{{end}}

		{{define "statistics_sprint"}}
		<script>
			$(document).ready(function() {

				// $('table.statistics_sprint_table').highchartTable({
				// 	title: {
				// 		text: "haha"
				// 	},
				// 	subtitle: {
				// 		text: "xixi"
				// 	}
				// });

				$('table.statistics_sprint_table')
				.bind('highchartTable.beforeRender', function(event, highChartConfig) {
					/* Act on the event */
					highChartConfig.title.text = "haha";
					highChartConfig.chart.type = "column";
					highChartConfig.chart.defaultSeriesType = "column";
				})
				.highchartTable();
			});
		</script>
		{{end}}

		{{define "statistics_sprint_js"}}
		<script>
			// Modify the column of the report grid.
			(function () {

				var tables = document.getElementsByName("statistics_sprint_table");
				for (var n = 0; n < tables.length; n++) {
					// alert("...");
					var table = tables[n];
					var items = table.getElementsByTagName("tr");
					for (var i = 1; i < items.length; i++) {
						alert("...");
						// Limit length.
						for (var j = 0; j <= items[i].cells.length; j++) {

							var len = 0, dots = "";
							if (items[i].cells[j]) {
								items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.trim();
								switch(j)
								{
									case 0:
										items[i].cells[j].innerHTML = items[i].cells[j].innerHTML.split("T")[0];
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

		{{define "statistics_sprint_json"}}
		<script>
			$(document).ready(function() {
				// alert("...");

				var options = {
					chart: {
						renderTo: "statistics_sprint_json",
						type: "spline"
					},
					series: []
				};

				// "http://localhost:8080/api/statistics/sprint"
				var url = location.protocol + "//" + location.host + "/api" + location.pathname;
				$.getJSON(url, function(data) {

					options.title = {
						text: "Sprint 1"
					};
					options.xAxis = [{
					}];
					options.xAxis.categories = new Array();
					var Estimated = [];
					var Executed = [];
					var Remaining = [];
					for (var i = 0; i < data.length; i++) {
						// options.xAxis.categories
						options.xAxis.categories[i] = data[i]["Date"];
						// alert(options.xAxis.categories[i]);

						Estimated[i] = data[i]["Estimated"];
						// alert(Estimated[i]);
						Executed[i] = data[i]["Executed"];
						Remaining[i] = data[i]["Remaining"];
					};

					// alert(Estimated);

					//
					series = [{
						name: "Estimated",
						data: Estimated
					}, {
						name: "Executed",
						// yAxis: 1,
						data: Executed
					}, {
						name: "Remaining",
						// yAxis: 2,
						data: Remaining
					}];
					options.series.push(series);

					var chart = new Highcharts.Chart(options);
				});

			});
		</script>
		{{end}}

		{{define "statistics_sprint_json2"}}
		<script>
			$(document).ready(function() {
				// alert("...");

				var sp_id = $("#sp_id").val();
				var sp_product = $("#sp_product").val();
				var sp_version = $("#sp_version").val();
				var search = "?sp_id=" + sp_id + "&" + "sp_product=" + sp_product + "&" + "sp_version=" + sp_version;
				var str = "/api" + location.pathname + search;
				// alert(str);

				var options = {
					chart: {
						renderTo: 'statistics_sprint_json',
						defaultSeriesType: 'spline'
					},
					credits: {
						enabled: false
					},
					title: {
						text: 'Sprint Statistics'
					},
					xAxis: {
						categories: []
					},
					yAxis: {
						title: {
							text: 'Counts'
						}
					},
					series: []
				};

				$.getJSON(str, function(data) {

					options.subtitle = {
						// text: "statistics_sprint_json2"
					};

					var t = {
						Date: [],
						TotalCases:[],
						RemainedCases:[],
						FailedCases:[]
					};

					for (var i = 0; i < data.length; i++) {
						
						// 2014-06-26T00:00:00+08:00
						// alert(data[i]["Date"]);
						var st = data[i]["Date"];
						var a = st.split("T");
						// alert(a[0]);
						// var b = a[0].split("-");
						// var date = new Date(b[0], b[1], b[2]);
						// alert(date.toLocaleString().split(",")[0]);
						// t["Date"].push(date.toLocaleString().split(",")[0]);
						options.xAxis.categories.push(a[0]);

						t["TotalCases"].push(data[i]["TotalCases"]);
						t["RemainedCases"].push(data[i]["RemainedCases"]);
						t["FailedCases"].push(data[i]["FailedCases"]);
					};

					options.series.push({
						name: "TotalCases",
						data: t["TotalCases"]
					});
					options.series.push({
						name: "RemainedCases",
						data: t["RemainedCases"]
					});
					options.series.push({
						name: "FailedCases",
						data: t["FailedCases"]
					});
					
					var chart = new Highcharts.Chart(options);
				});

			});
		</script>
		{{end}}

		{{define "test_highcharts"}}
		<script>
			$(function () {

				var url = location.protocol + "//" + location.host + "/api" + location.pathname;
				// alert(url);

				// Get the CSV and create the chart
				// $.getJSON('http://localhost:8080/api/getlastexecution/?testplan=TSS_OS_Plan', function (json) {
				$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=analytics.csv&callback=?', function (csv) {
				// $.getJSON(url, function (csv) {
					
					$('#container').highcharts({

						data: {
							csv: csv,
							// Parse the American date format used by Google
							parseDate: function (s) {
								var match = s.match(/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{2})$/);
								if (match) {
									return Date.UTC(+('20' + match[3]), match[1] - 1, +match[2]);
								}
							}
						},

						title: {
							text: 'Sprint'
						},

						// subtitle: {
						// 	text: 'Source: Google Analytics'
						// },

						xAxis: {
							type: 'datetime',
							tickInterval: 7 * 24 * 3600 * 1000, // one week
							tickWidth: 0,
							gridLineWidth: 1,
							labels: {
								align: 'left',
								x: 3,
								y: -3
							}
						},

			            yAxis: [{ // left y axis
			                title: {
			                    text: null
			                },
			                labels: {
			                    align: 'left',
			                    x: 3,
			                    y: 16,
			                    format: '{value:.,0f}'
			                },
			                showFirstLabel: false
			            }, { // right y axis
			                linkedTo: 0,
			                gridLineWidth: 0,
			                opposite: true,
			                title: {
			                    text: null
			                },
			                labels: {
			                    align: 'right',
			                    x: -3,
			                    y: 16,
			                    format: '{value:.,0f}'
			                },
			                showFirstLabel: false
			            }],

			            legend: {
			                align: 'left',
			                verticalAlign: 'top',
			                y: 20,
			                floating: true,
			                borderWidth: 0
			            },

			            tooltip: {
			                shared: true,
			                crosshairs: true
			            },

			            plotOptions: {
			                series: {
			                    cursor: 'pointer',
			                    point: {
			                        events: {
			                            click: function (e) {
			                                hs.htmlExpand(null, {
			                                    pageOrigin: {
			                                        x: e.pageX,
			                                        y: e.pageY
			                                    },
			                                    headingText: this.series.name,
			                                    maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) +':<br/> '+
			                                        this.y +' visits',
			                                    width: 200
			                                });
			                            }
									}
								},
								marker: {
									lineWidth: 1
								}
							}
						},

						series: [{
							name: 'All visits',
							lineWidth: 4,
							marker: {
								radius: 4
							}
						}, {
							name: 'New visitors'
						}]
					});
				});

			});
		</script>
		{{end}}

		{{define "test_csv"}}
		<script>
			$(document).ready(function() {
				// alert("...");

				var options = {
					chart: {
						renderTo: 'container',
						defaultSeriesType: 'spline'
					},
					title: {
						text: 'Fruit Consumption'
					},
					xAxis: {
						categories: []
					},
					yAxis: {
						title: {
							text: 'Units'
						}
					},
					series: []
				};

				$.get('/data/data.csv', function(data) {
					// Split the lines
					var lines = data.split('\n');

					// Iterate over the lines and add categories or series
					$.each(lines, function(lineNo, line) {
						var items = line.split(',');

						// header line containes categories
						if (lineNo == 0) {
							$.each(items, function(itemNo, item) {
								if (itemNo > 0) options.xAxis.categories.push(item);
							});
						}

						// the rest of the lines contain data with their name in the first 
						// position
						else {
							var series = {
								data: []
							};

							$.each(items, function(itemNo, item) {
								if (itemNo == 0) {
									series.name = item;
								} else {
									series.data.push(parseFloat(item));
								}
							});
							// alert(series.data);

							options.series.push(series);

						}

					});

					// Create the chart
					var chart = new Highcharts.Chart(options);
				});

			});
		</script>
		{{end}}

		{{define "form_datetime"}}
		<script>
		$(document).ready(function() {
			// alert("...");
			// $(".form_datetime").datetimepicker({
			// 	format: 'yyyy-mm-dd',
			// 	weekStart: 1,
			// 		todayBtn:  1,
			// 		autoclose: 1,
			// 		todayHighlight: 1,
			// 		startView: 2,
			// 		forceParse: 0,
			// 		showMeridian: 1
			// });
			$(".form_datetime").datepicker({
				dateFormat: 'yy-mm-dd',
				// numberOfMonths: 3,
				showButtonPanel: true,
				onSelect: function(dateText,inst){
					// alert("您选择的日期是："+dateText)
					var table = $('table.form_datetime').DataTable();
					table.draw();
				},
			});
			// $('.form_datetime').datetimepicker({
			// 	//language:  'fr',
			// 	weekStart: 1,
			// 	todayBtn:  1,
			// 	autoclose: 1,
			// 	todayHighlight: 1,
			// 	startView: 2,
			// 	forceParse: 0,
			// 	showMeridian: 1
			// });
			// $('.form_date').datetimepicker({
			// 	language:  'fr',
			// 	weekStart: 1,
			// 	todayBtn:  1,
			// 	autoclose: 1,
			// 	todayHighlight: 1,
			// 	startView: 2,
			// 	minView: 2,
			// 	forceParse: 0
			// });
			// $('.form_time').datetimepicker({
			// 	language:  'fr',
			// 	weekStart: 1,
			// 	todayBtn:  1,
			// 	autoclose: 1,
			// 	todayHighlight: 1,
			// 	startView: 1,
			// 	minView: 0,
			// 	maxView: 1,
			// 	forceParse: 0
			// });
		});
		</script>
		{{end}}