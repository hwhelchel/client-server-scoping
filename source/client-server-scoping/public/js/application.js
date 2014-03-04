$(document).ready(function() {
  $('body').on('click','.awesomeness_teller',function(e){
    $('#awesomeness_holder').text($(e.target).attr("data-heading"));
  });

  $('body').on('click','.skill_teller',function(e){
    var path = location.pathname.split('/');
    var skill = path[path.length-1];
    $('#skill_holder').text(skill);
  });

  $('body').on('click','.meal_teller',function(e){
    $('#meal_holder').text(meals[Math.floor(Math.random() * meals.length)]);
  });

});
