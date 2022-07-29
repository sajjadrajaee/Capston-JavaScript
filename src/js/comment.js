import { renderShow, resultElement } from './renderDOM.js';
// imageHolder.innerHTML += ` ;`;

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

const attachModal = ({ item }) => {
  const render = renderShow();
  const popup = `<div class="modal app-modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true"
  role="dialog">
  <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Video details</h5>
              <button type="button" class="close" aria-label="Close">
                  <span aria-hidden="true" id="popupClose">×</span>
              </button>
          </div>
          <div class="modal-body">
              <div class="container">
                  <div class="row">
                      <div class="col-md-8 col-offset-2 image-section">
                        <img src="${item.image.orginal}" class="movie-image">
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-12">
                          Film name: "Sports Night"
                      </div>
                  </div>
                  <div class="row">
                          <div class="col-md-6">
                              premiered: 1998-09-22
                          </div>
                          <div class="col-md-6">
                              ended: 1998-09-22
                          </div>
                  </div>
                  <div class="row">
                          <div class="col-md-6">
                              rating: 7.2
                          </div>
                          <div class="col-md-6">
                              country: United States
                          </div>
                  </div>
                  <div class="row">
                      <div class="col-md-10">
                          <p>Featuring Australia's leading sports personalities, <b>Sports Sunday</b>
                              presents a frank and open debate about all the issues in the week of sport,
                              with the promise of heated opinion and a few laughs along the way.</p>
                      </div>
                  </div>
                  <div class="row">
                      <ul class="comments"></ul>
                  </div>
                  <div class="row">
                      <div class="col-md-12">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon1">Name</span>
                              </div>
                              <input type="text" class="form-control" placeholder="Username"
                                  aria-label="Username" aria-describedby="basic-addon1">
                          </div>
                          <div class="input-group">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">Comment</span>
                              </div>
                              <textarea class="form-control" aria-label="With textarea"></textarea>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary close">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
          </div>
      </div>
  </div>
  </div>`;
  render.insertAdjacentHTML('beforebegin', popup);
};

const CommentHandler = async () => {
  const elements = renderShow();
  const elementShow = resultElement();
  elementShow.addEventListener('click', (e) => {
    const target = e.target;
    const targetId = target.getAttribute('data-id');

    const show = elements.find((item) => item.show.id === Number(targetId));
    attachModal(show);
  });

  const modalPlace = document.querySelector('.app-modal');
  modalPlace.classList.add('appear');
};

export default CommentHandler;
