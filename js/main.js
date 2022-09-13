const restorationButton = document.getElementById('trigger-restoration-button');
const apostasyButton = document.getElementById('trigger-apostasy-button');
const bookOfMormon = document.getElementById('book-of-mormon');
const bible = document.getElementById('bible');
const bookOfMormonText = document.getElementById('book-of-mormon-text');

const rectangleToMove = document.getElementById('to-move');

restorationButton.addEventListener('click', restoreGospel);
apostasyButton.addEventListener('click', triggerApostasy);

function restoreGospel() {
  rectangleToMove.classList.remove('moving-rectangle');
  restorationButton.disabled = true;
  restorationButton.classList.add('active');
  apostasyButton.classList.remove('active');
  bookOfMormon.style.display = 'block';
  bible.style.left = '-361px';
  bookOfMormonText.style.display = 'block';
}

function triggerApostasy() {
  rectangleToMove.classList.add('moving-rectangle');
  restorationButton.disabled = false;
  apostasyButton.classList.add('active');
  restorationButton.classList.remove('active');
  bookOfMormon.style.display = 'none';
  bible.style.left = '-308px';
  bookOfMormonText.style.display = 'none';
}
