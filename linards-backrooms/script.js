const soundButtons = document.querySelectorAll('.sound-button');

function playSound(soundURL) {
  const audio = document.getElementById('audioPlayer');
  audio.src = soundURL;
  audio.play();
}

function handleButtonClick(event) {
  const button = event.target;
  const soundURL = button.getAttribute('data-sound');
  playSound(soundURL);
}

soundButtons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

document.addEventListener('keydown', event => {
  const key = event.key.toLowerCase();
  const button = document.querySelector(`[data-key="${key}"]`);
  if (button) {
    const soundURL = button.getAttribute('data-sound');
    playSound(soundURL);
  }
});