/*!
 * goTestLinkReport v0.1.1 (https://github.com/royburns/goTestLinkReport)
 * Copyright 2014-3014 Dell, Inc.
 * Licensed under MIT (https://github.com/royburns/goTestLinkReport/master/LICENSE)
 */

// Custom checkbox and radios
function setupLabel() {
    // Checkbox
    var checkBox = ".checkbox";
    var checkBoxInput = checkBox + " input[type='checkbox']";
    var checkBoxChecked = "checked";
    var checkBoxDisabled = "disabled";

    // Radio
    var radio = ".radio";
    var radioInput = radio + " input[type='radio']";
    var radioOn = "checked";
    var radioDisabled = "disabled";

    // Checkboxes
    if ($(checkBoxInput).length) {
        $(checkBox).each(function(){
            $(this).removeClass(checkBoxChecked);
        });
        $(checkBoxInput + ":checked").each(function(){
            $(this).parent(checkBox).addClass(checkBoxChecked);
        });
        $(checkBoxInput + ":disabled").each(function(){
            $(this).parent(checkBox).addClass(checkBoxDisabled);
        });
    };

    // Radios
    if ($(radioInput).length) {
        $(radio).each(function(){
            $(this).removeClass(radioOn);
        });
        $(radioInput + ":checked").each(function(){
            $(this).parent(radio).addClass(radioOn);
        });
        $(radioInput + ":disabled").each(function(){
            $(this).parent(radio).addClass(radioDisabled);
        });
    };
};

function setGridRowColor(){
  
};

$(document).ready(function(){
    $("html").addClass("has-js");

    // First let's prepend icons (needed for effects)
    $(".checkbox, .radio").prepend("<span class='icon'></span><span class='icon-to-fade'></span>");

    $(".checkbox, .radio").click(function(){
        // alert("radio");
        setupLabel();
    });
    setupLabel();

    //
    // alert($("ul.pinned li:first").size());
    // $("ul.pinned li:first").addClass('active'); // why this way will add 'active' to all 'li'?
    // alert($("ul.pinned li:first").length);
    // alert($(".pinned li[name='plan']").length);
    // $(".pinned li[name='plan']").addClass('active');
    // $("ul.pinned li:eq(0)").addClass('active'); // why this way will add 'active' to all 'li'?
    // $("ul.pinned li:first").each(function(index) {
    //     alert(index);
    //     if (index == 0) {
    //         // $(this).addClass("active");
    //         alert($(this).attr('id'));
    //     };
    // });

    // $("ul.pinned li").each(function(index) {
    //     alert(index);
    //     // $(this).addClass("active");
    //     alert($(this).attr('class'));
    // });

    // alert($("ul.pinned li.active").size());
    // var arr = $("ul.pinned li.active").toArray();
    // alert(arr[0].innerHTML);
    // alert(arr[0].id);
    // $("ul.pinned li").click(function(event) {
    //     /* Act on the event */
    //     // alert($(this).attr('class'));
    //     // alert($(this).attr('id'));
    //     // alert($(this).attr('name'));
    //     SetActivePlanName($(this).attr('id'));
    // });
});

function SendCmd()
{
    alert("...");
};

function SetActivePlanName(planname)
{
    $("ul.pinned li").each(function() {
        // alert($(this).attr('id'));
        if ($(this).attr('id') == planname) {
            // alert("add");
            $(this).addClass('active');
        } else{
            // alert("remove");
            $(this).removeClass('active');
        };
    });

    // var arr = $("ul.pinned li.active").toArray();
    // alert(arr.length);
    // if (arr[0]) {
    //     var testplan = arr[0].id;
    //     alert(testplan);
    // };
};

// onclick="GetLastExecution({{.Name}});"
function GetLastExecution(planname)
{
    var str = "api/getlastexecution/?testplan=" + planname;
    // alert(str);

    var items = document.getElementsByName("plan");
    // alert(items.length);
    for (var i = 1; i < items.length; i++) { // do not process the head
        var len = 0, dots = "";
        alert(items[i].id);
        // alert(items[i].name);
        // alert(items[i].class);
        alert(this.id);
        // $("#"+planname).removeClass('active');
        // alert($("#"+planname).attr('id'));
        // alert($(this).attr('name'));
        // alert($("plan").attr('name'));
        if (items[i].id == planname) {
            // alert(items[i].id == planname);
            alert($("#"+planname).attr('class'));
            $("#"+planname).addClass('active');
            alert($("#"+planname).attr('class'));
        };
    };
};

function GetSprintExecutions()
{
    var sp_id = $("#sp_id").val();
    var sp_product = $("#sp_product").val();
    var sp_version = $("#sp_version").val();
    var search = "?sp_id=" + sp_id + "&" + "sp_product=" + sp_product + "&" + "sp_version=" + sp_version;
    // var str = "api/getlastexecution/?testplan=" + planname;
    var str = "/api" + location.pathname + search;
    // alert(str);

    var table;
    if ( $.fn.dataTable.isDataTable( '#report-table' ) ) {
        // alert("Table exists.");
        table = $('#report-table').DataTable();
    }
    else {
        // alert("Table not exists.");
        table = $('#report-table').DataTable( {
            paging: false
        } );
    };

    table.ajax.url(str).load();
};

function GetSprintStats()
{
    // location.reload(false); // refresh the current page

    var sp_id = $("#sp_id").val();
    var sp_product = $("#sp_product").val();
    var sp_version = $("#sp_version").val();
    var search = "?sp_id=" + sp_id + "&" + "sp_product=" + sp_product + "&" + "sp_version=" + sp_version;
    var str = "/api" + location.pathname + search;
    // alert(str);

    var table;
    if ( $.fn.dataTable.isDataTable( '#statistics_sprint_table' ) ) {
        // alert("Table exists.");
        table = $('#statistics_sprint_table').DataTable();
    }
    else {
        // alert("Table not exists.");
        table = $('#statistics_sprint_table').DataTable( {
            paging: false
        } );
    };

    table.ajax.url(str).load();

    // Redraw the highchart.
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
        // $('table.statistics_sprint_json').redraw();
    });
};

function GetReleaseReports()
{
    var releasereport = $("#releasereport").val();
    var search = "?releasereport=" + releasereport;
    var str = "/api" + location.pathname + search;
    // alert(str);

    var table;
    if ( $.fn.dataTable.isDataTable( '#release_report_table' ) ) {
        // alert("Table exists.");
        table = $('#release_report_table').DataTable();
    }
    else {
        // alert("Table not exists.");
        table = $('#release_report_table').DataTable( {
            paging: false
        } );
    };

    table.ajax.url(str).load();
};

function GetReleaseOverviews()
{
    var releaseoverview = $("#releaseoverview").val();
    var search = "?releaseoverview=" + releaseoverview;
    var str = "/api" + location.pathname + search;
    // alert(str);

    var table;
    if ( $.fn.dataTable.isDataTable( '#release_overview_table' ) ) {
        // alert("Table exists.");
        table = $('#release_overview_table').DataTable();
    }
    else {
        // alert("Table not exists.");
        table = $('#release_overview_table').DataTable( {
            paging: true
        } );
    };

    table.ajax.url(str).load();
    // alert(1);
    $("#release_overview_table tfoot th").each(function(i) {
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
};