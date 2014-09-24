$(document).ready(function() {
  $( "#searchbar" ).show();

  $( "#start" ).click(function() {
    $( "#searchbar" ).toggle();
  });

  $( "#submit" ).click(function() {
    var searchQuery = $("#search").val();
    window.open(('http://www.worldcat.org/search?qt=worldcat_org_all&q=' + searchQuery));
  });

});