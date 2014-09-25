$(document).ready(function() {
  $( "#searchbar" ).hide();

  $( "#start" ).click(function() {
    $( "#searchbar" ).toggle("slow");
  });

  $( "#submit" ).click(function() {
    var searchQuery = $("#search").val();
    window.open(('http://www.worldcat.org/search?qt=worldcat_org_all&q=' + searchQuery));
  });

});