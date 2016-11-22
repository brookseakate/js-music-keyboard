var playAudio = function(letter) {
  var audioId = $("#" + letter + "Audio")[0];
  audioId.load();
  audioId.play();
};

var clickPlay = function() {
  var letter = $(this).html();
  playAudio(letter);
};

var keyPlay = function(event) {
  var key = event.key;
  var range = /[a-g]/;
  if (range.test(key)) {
    playAudio(key);
  } else {
    alert("Please play a key, A-G!");
  }
};

$(document).ready( function() {
  $('.note').on('click', clickPlay);
  $(this).keypress(keyPlay);
});
