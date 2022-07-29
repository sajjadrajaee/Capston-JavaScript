import { resultElement, generateShows } from './renderDOM.js';
import Img from '../no_image.jpg';

const insertModal = ({ show }) => {
  const resultList = resultElement();
  let imageURL = '';
  if (show.image != null) {
    imageURL = show.image.original;
  } else {
    imageURL = Img;
  }

  const popup = `
    <div class="app-modal" tabindex="-1" aria-hidden="true">
    <div class="app-modal-content shadow p-3 mb-5 bg-body rounded border border-secondary">
        <div class="app-modal-head">
            <img src="${imageURL}" class="comment-image" alt="Image of the show">
            <div class="show-title">
                <h5>${show.name}</h5>
                <p>${show.summary}</p>
            </div>
            <button type="button" class="btn-close comment-close" data-comment-close='close'></button>
        </div>
        <ul class="show-description">
            <li >Language: ${show.language}</li>
            <li >Run time: ${show.runtime}</li>
            <li >Premiered: ${show.premiered}</li>
            <li ><a href="${show.url}" class="card-link">Watch Here</a></li>
        </ul>
        <div>
          <h5>
            Comments <span class='comment-count'>(0)</span>
          </h5>
          <ul class="comments-container">
  
          </ul>
        </div>
        <div class="comment-form-wrapper">
            <form class="comment-form">
                <h5>Add a comment</h5>
            <div>
                <label for="name" class="form-label text-dark"></label>
                <input type="text" class="form-control name" id="name" required maxlength="32" placeholder="Your name">
            </div>
            <div>
                <label for="comment" class="form-label text-dark"></label>
                <textarea class="form-control insight-text" aria-label="With textarea" id="comment" required maxlength="32" placeholder="Your insights"></textarea>
            </div>                      
                <button type="submit" class="btn btn-primary bg-dark shadow">Comment</button>                    
            </form>
        </div> 
    </div> 
  </div>`;

  resultList.insertAdjacentHTML('beforebegin', popup);
};

const addEventToCommentBtn = async () => {
  const shows = await generateShows();
  const showEl = resultElement();
  showEl.addEventListener('click', (e) => {
    const targetEl = e.target;
    const recipientId = targetEl.getAttribute('data-id');

    // FInd the right show and insert modal with data
    const show = shows.find((item) => item.show.id === Number(recipientId));
    insertModal(show);

    const formContainer = document.querySelector('.comment-form');
    formContainer.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#name').value;
      const comment = document.querySelector('#comment').value;
      const data = {};

      if (name === '' && comment === '') {
        return '';
      }
      data.item_id = show.show.id;
      data.username = name;
      data.comment = comment;
      document.querySelector('#name').value = '';
      document.querySelector('#comment').value = '';
      return '';
    });
    // Display pop up modal
    const appModal = document.querySelector('.app-modal');
    appModal.classList.add('appear');

    // Add close event to close icon
    const closeIcon = document.querySelector('.comment-close');
    closeIcon.addEventListener('click', () => {
      appModal.remove();
    });
  });
};

export default addEventToCommentBtn;
