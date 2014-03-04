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

  // Tried localStorage instead of cookies.
  // Check if favorite color is stored. Then don't give option to pick color
  if (localStorage.getItem('favoriteColor')) {
    $('div.color_picker').empty();
    $('div.color_picker').append('<button class="color_background">Change Background Color</button>');
  }

  $('body').on('submit','form.favorite_color',function(e){
    e.preventDefault();
    $('div.color_picker').empty();
    $('div.color_picker').append('<button class="color_background">Change Background Color</button>');
    localStorage.setItem('favoriteColor',$(e.target).serialize());
  });

  $('body').on('click','.color_background',function(e){
    var colorStorage = localStorage.getItem('favoriteColor').split('=');
    var color = colorStorage[colorStorage.length - 1];
    $('body').css("background-color",color);
  });

});
