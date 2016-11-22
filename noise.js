var playAudio = function(letter) {
  console.log("play " + letter);
  var audioId = $("#" + letter + "Audio")[0];
  audioId.load();
  audioId.play();
};

$(document).ready( function() {
  $('.note').on('click', function(event) {
    var classes = $(this).attr('class');
    // var classArr = Array.from(classes);
    console.log("Classes: " + classes);
    // console.log("classArr: " + classArr);
    console.log("Classes[5]: " + classes[5]); // @TODO: make this better
    var letter = classes[5];
    playAudio(letter);
  });

  $('body').keydown(function(event) {
    console.log("Key: "+ event.key);
    playAudio(event.key);
  });
});
