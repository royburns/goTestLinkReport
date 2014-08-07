
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

		{{define "execution_ajax"}}
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
						{ "data": "LasTimeRun" },
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
				// alert("...");
				// $('table.statistics').highchartTable({
				// 	title: {
				// 		text: 'Sprint'
				// 	},
				// 	yAxis: [{ // Primary yAxis
				// 		labels: { 
				// 			formatter: function() { 
				// 				return this.value * 100 + '%'; 
				// 			}, 
				// 			style: { 
				// 				color: '#89A54E' 
				// 			} 
				// 		}, 
				// 		title: { 
				// 			text: 'Complete PCT', 
				// 			style: { 
				// 				color: '#89A54E' 
				// 			} 
				// 		}, 
				// 		opposite: true }],
				// });
				
				$('table.highchart').highchartTable();
			});
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

				$.getJSON("http://localhost:8080/api/statistics/sprint", function(data) {
					// options.series[0].data = data;
					// alert(data[0]["SprintName"]);
					// name: 'Temperature', 
					// color: '#89A54E', 
					// type: 'spline', 
					// data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6], 
					// tooltip: { 
					// 	valueSuffix: ' °C' 
					// }
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

						// options.series[i].name = data[i]["SprintName"];
						// options.series[i].color
						// options.series[i].type = 'spline';
						// options.series[i].data = data[i]["Executed"];
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

		{{define "stock_csv"}}
		<script>
			$(document).ready(function() {
				// alert("...");

				var options = {
					chart: {
						renderTo: "stock_csv",
						type: "spline"
					},
					series: [{},{},{},{},{}]
				};

				// $.getJSON("http://xueqiu.com/S/SH601166/historical.csv", function(data) {
				$.get("http://xueqiu.com/S/SH601166/historical.csv", function(data) {

					var lines = data.split('\n');

					$.each(lines, function(index, el) {
						var items = el.split(",");

						if (index == 0) {
							$.each(items, function(index, el) {
								if (index > 0) {
									options.xAxis.categories.push(el);
								};
							});
						} else {
							var series = {
								data: []
							};
							$.each(items, function(index, el) {
								if (index == 0) {
									series.name = el
								} else{
									series.data.push(el);
								};
							});

							options.series.push(series);
						};
					});
					
					// options.title = {
					// 	text: "Sprint"
					// }
					// options.xAxis = [{
					// 	categories: [1, 2, 3, 4, 5 ]
					// }]
					// for (var i = 0; i < data.length; i++) {
					// 	options.series[i].name = data[i]["SprintName"];
					// 	// options.series[i].color
					// 	options.series[i].type = 'spline';
					// 	options.series[i].data = data[i]["Executed"];
					// };

					var chart = new Highcharts.Chart(options);
				});
				
			});
		</script>
		{{end}}