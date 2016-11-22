var playAudio = function(letter) {
  var audioId = $("#" + letter + "Audio")[0];
  audioId.load();
  audioId.play();
};

$(document).ready( function() {
  $('.note').on('click', function(event) {
    var letter = $(this).html();
    playAudio(letter);
  });

  $(this).keypress(function(event) {
    var letter = event.key;
    var range = /[a-g]/;
    console.log(range.test(letter));
    if (range.test(letter)) {
      playAudio(letter);
    } else {
      alert("Please play a key, A-G!");
    }
  });
});
