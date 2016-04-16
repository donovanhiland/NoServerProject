$(document).ready(function() {

  $( "#go" ).click(function() {
    $( "#block" ).animate({
      width: '200px';
      height: '200px';
    }, 1500 );
  });

});
