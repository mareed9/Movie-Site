var video = document.getElementById("myVideo");
var btn = document.getElementById("startBtn");
var mutebtn = document.getElementById("muteBtn");

function videoStart() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

function videoMute() {
  if (video.muted) {
    video.muted = false;
    mutebtn.innerHTML = "Mute";
  } else {
    video.muted = true;
    mutebtn.innerHTML = "Unmute";
  }
}