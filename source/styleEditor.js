$(document).ready(function(){

  $('form').submit(function(event) {
    event.preventDefault();
    var selector = $('input[name="selector"]').val();
    var property = $('input[name="property"]').val();
    var value = $('input[name="value"]').val();
    $(selector).css(property, value);
  });
});
