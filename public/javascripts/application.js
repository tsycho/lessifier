// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$.ajaxSetup ({
  cache: false;
});

$(document).ready(function() {
  $("#css_form")
    .bind("ajax:beforeSend", function(evt, xhr, settings){  
      $("#btn_lessify").text("Lessifying...");
    })
    .bind("ajax:success", function(evt, data, status, xhr){
      $("#scss_code").html(xhr.responseText);
    })
    .bind("ajax:complete", function(evt, xhr, status){
      $("#btn_lessify").text("Lessify!");
    })
    .bind("ajax:error", function(evt, xhr, status, error){
      $("#btn_lessify").text("Lessify!");
      var $form = $(this), errors, errorText;

      try {        
        errors = $.parseJSON(xhr.responseText); // Populate errorText with the comment errors
      } 
      catch(err) {
        // If the responseText is not valid JSON (like if a 500 exception was thrown), populate errors with a generic error message.
        errors = { message: "Please reload the page and try again" };
      }

      // Build an unordered list from the list of errors
      errorText = "There were errors with the submission: \n<ul>";
      for ( error in errors ) {
        errorText += "<li>" + error + ': ' + errors[error] + "</li> ";
      }
      errorText += "</ul>";

      // Insert error list into form
      $("#lessify-errors").html(errorText);
    });
});

