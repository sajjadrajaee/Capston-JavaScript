import '../styles/style.css';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-grid.min.css';
import '../bootstrap.bundle.min.js';
import addEventToCommentBtn from '../comment.js'
import Img from '../no_image.jpg';
import {
  renderNavbar, renderShow, displayLikes,
} from './renderDOM.js';


document.addEventListener('DOMContentLoaded', async () => {
  await renderNavbar();
  await renderShow();
  await addEventToCommentBtn();
  await displayLikes();
});
