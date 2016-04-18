angular.module('portfolioApp')
  .directive('typingDir', function() {

    return {
      restrict: 'AE',
      templateUrl: 'directive/typingAnimationDir/typing-dir.html',
      controller: function() {
        var sentences = [
          "a full stack website developer",
          "a foosball apprentice",
          "motivated to work hard and succeed",
          "a husband, father, and son",
          "a jungle main",
          "eager to learn",
          "always hungry",
          "interested in innovating to create value",
          "Karam",
          "excited for new opportunity"
        ]
        var typedText = $('.text');
        var i = 0;
        var j = 0;
        var status = 'newInteration';

          function typer() {
            var currentSentence = [];
            var letters = '';
            typedText.append('<div class="cursor"></div>');

            // ADD CURSOR BLINK

            var typeInterval = setInterval(function() {
              if(status === 'newInteration') {
                letters = sentences[i].split('');
                status = 'inProgress';
              }
              if(status === 'inProgress') {
              currentSentence.push(letters[j]);
              typedText.html(currentSentence.join('') + '<div class="cursor"></div>');
              j++;
              }
              if(j === letters.length && status === 'finished') {
                // currently code will never hit this. may consider adding some sort of timer to kick out of setInterval after a set amount of time running.
                clearInterval(typeInterval);
              }
              if(j === letters.length){
                setTimeout(function() {
                  status = 'reverse';
                  j = 0;
                }, 1000);
              }
              if(status === 'reverse' && currentSentence.length === 0) {
                i++;
                status = 'newInteration';
              }
              if(status === 'reverse') {
                currentSentence.splice((currentSentence.length -1), 1);
                typedText.html(currentSentence.join('') + '<div class="cursor"></div>');
                // UNCOMMENT FOR !NO! BACKSPACE ANIMATION
                // currentSentence = [];
              }
              if(i === sentences.length) {
                i = 0;
              }
            }, /*intervaltime*/100)

          };
          typer();
      }
    }

  });
