$(document).ready(function() {
  var portPiece = $('.portfolio-piece');

  // $('.info').hide();

  $(window).on('scroll', function() {
    // distance between the top of the page and the current place on the document
    var height = $(window).scrollTop();
    // the distance between the top of the page and the beginning of the portfolio pieces I want to scale in
    var portfolioStart = ($('.parallax1').height() + $('.parallax2').height() + $('.main-page-title').height() + 180);
    var portfolioEnd = ($('.parallax1').height() + $('.parallax2').height() + $('.content-container').height());

    if(height > portfolioEnd) {
      // console.log("hit");
    }

    if(height  > portfolioStart) {
      var mh = portPiece.width();
      var mw = portfolioEnd - portfolioStart + 'px';

      portPiece.css({
        // width and height of div is changed based on the distance traveled past where the portfolio starts
        'width': (height - portfolioStart),
        'height': (height - portfolioStart),
        'max-width': mw,
        'max-height': mh,
      });
      // if(portPiece.width() === (.45 * $('.main-page-portfolio').width())) {
      //   console.log('hit');
      //   portPiece.css({'opacity': 1})
      // }
    }
  });
});
