import './styles/style.css';
import './styles/bootstrap.min.css';
import './styles/bootstrap-grid.min.css';
import './bootstrap.bundle.min.js';
import displayShow from './renderDOM.js';
import image from './18393.jpg';

document.addEventListener('DOMContentLoaded', () => {
  displayShow();
});

const imageHolder = document.querySelector('.image-section');
imageHolder.innerHTML += ` <img src="${image}" class="movie-image">;`;

const popup = document.querySelector('#popupButton');
const popupClose = document.querySelector('#popupClose');

popup.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('backdrop').style.display = 'block';
  document.getElementById('exampleModal').style.display = 'block';
  document.getElementById('exampleModal').classList.add('show');
});

popupClose.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('backdrop').style.display = 'none';
  document.getElementById('exampleModal').style.display = 'none';
  document.getElementById('exampleModal').classList.remove('show');
});
