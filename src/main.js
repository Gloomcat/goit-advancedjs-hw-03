import { fetchPhotosList } from './js/pixabay-api';
import { clearGallery, fillGallery } from './js/render-functions';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  clearGallery(gallery);

  const query = form.querySelector('input[name="query"]').value.trim();
  fetchPhotosList(query).then(photosList => {
    if (photosList) {
      fillGallery(gallery, photosList);
    }
  });
});
