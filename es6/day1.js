import '../stylesheets/javascript30.scss';

const keys = document.querySelectorAll('.musickey');

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.musickey[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; // set this to make audio can play from the start,when every key press event happened
  audio.play();
  key.classList.add('playing');
}

function removetransition(e) {
  if(e.propertyName !== "transform") return;
  e.target.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

keys.forEach(key => {
  key.addEventListener('transitionend', removetransition);
})