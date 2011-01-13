// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$.ajaxSetup ({
  cache: false;
});

$(docu)
$(“#css_form”)
    .bind("ajax:beforeSend", function(){
        $("#scss_code").html(<%= @scss %>);
        alert("ajax:beforeSend");
    })
    .bind(“ajax:complete”, function(){
        $("#scss_code").html(<%= @scss %>);
        alert("ajax:complete");
    })
    .bind(“ajax:success”, function(){
        $("#scss_code").html(<%= @scss %>);
        alert("ajax:success");
    });