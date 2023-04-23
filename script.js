"use strict";

const keys = document.querySelectorAll(".key");
const playingSound = function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  console.log(key);
  key.classList.add("playing");
};

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  console.log(e.propertyName);
  this.classList.remove("playing");
}

window.addEventListener("keydown", playingSound);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
