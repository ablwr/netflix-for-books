$(document).ready(function() {
  $( "#searchbar" ).hide();

  $( "#start" ).click(function() {
    $( "#searchbar" ).toggle();
  });

  var searchQuery = $("#search").val();

  $( "#submit" ).click(function() {
    // go somewhere else
    $(window).location.href = 'http://www.worldcat.org/search?qt=worldcat_org_all&q=' + searchQuery;
  });

});