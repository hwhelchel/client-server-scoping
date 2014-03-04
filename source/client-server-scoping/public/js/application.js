$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {

  });

  $('body').on('click','.awesomeness_teller',function(e){
    $('#awesomeness_holder').text($(e.target).text());
  });

  // What other events do you need to bind to make the other pages work?
});
