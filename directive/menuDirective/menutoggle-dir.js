angular.module('portfolioApp')
  .directive('menutoggleDir', function() {

    return {
      restrict: 'AE',
      templateUrl: 'directive/menuDirective/menutoggle-dir.html',
      controller: function($scope, $state) {
        var menuOpen = false;
        // toggle true/false through ng-click which determines which animation to run through
        $scope.menu = function(){
          if (menuOpen === false) {
            return menuOpen = true;
          } else {
            return menuOpen = false;
          }
        };
        // jquery
        $(document).ready(function() {
            $('.menu').hide();
            if($state.current.name === 'home') {
              $('.back-arrow').hide();
            }

            // depending on whether or not the menu is open, fade the backdrop menu in or out on menu-toggle click
            $('.menu-toggle').click( function () {
                if (menuOpen === false) {
                    $('.menu-toggle').addClass('open');
                    $('.menu').fadeIn('slow', 'swing');
                }
                if (menuOpen === true) {
                    $('.menu-toggle').removeClass('open');
                    $('.menu').fadeOut('slow', 'swing');
                }
              });
            // change color of other links when someone hovers over.
            $('.nav-link').hover(
              function() {
                // add blurred class to everything but 'this' the item that was clicked on or hovered over
                $('.nav-link').not(this).addClass('blurred');
                $('.line').not($('this > div')).addClass('blurred');
              },
              // remove blurred class on hover off
              function() {
                $('.nav-link').not(this).removeClass('blurred');
              }
            );
            $('.social-link').hover(
              function() {
                $('.social-link').not(this).addClass('blurred');
              },
              function() {
                $('.social-link').not(this).removeClass('blurred');
              }
            );
        });
      }
    };

  });
