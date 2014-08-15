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
    // var sp_id = $("#sp_id").val();
    // var sp_product = $("#sp_product").val();
    // var sp_version = $("#sp_version").val();
    // var search = "?sp_id=" + sp_id + "&" + "sp_product=" + sp_product + "&" + "sp_version=" + sp_version;
    // var str = "/api" + location.pathname + search;
    // // alert(str);

    // var table;
    // if ( $.fn.dataTable.isDataTable( '#statistics_sprint_table' ) ) {
    //     // alert("Table exists.");
    //     table = $('#statistics_sprint_table').DataTable();
    // }
    // else {
    //     // alert("Table not exists.");
    //     table = $('#statistics_sprint_table').DataTable( {
    //         paging: false
    //     } );
    // };

    // table.ajax.url(str).load();

    location.reload(false);
};