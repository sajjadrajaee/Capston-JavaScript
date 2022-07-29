import '../styles/style.css';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-grid.min.css';
import '../bootstrap.bundle.min.js';
import {
  renderNavbar, renderShow, addEventToCommentBtn, displayLikes,
} from './renderDOM.js';
import image from '../18393.jpg';

document.addEventListener('DOMContentLoaded', async () => {
  await renderNavbar();
  await renderShow();
  await addEventToCommentBtn();
  await displayLikes();
});

// const popupClass = document.querySelector('.popup');

// const popupHTML = `

// `;
// popupClass.innerHTML = popupHTML;

const imageHolder = document.querySelector('.image-section');
imageHolder.innerHTML += ` <img src="${image}" class="movie-image">;`;

const popup = document.querySelector('#popupButton');
const popupClose = document.querySelector('.close');

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
