import { fetchPhotosList } from './js/pixabay-api';
import { clearGallery, fillGallery, toggleLoader } from './js/render-functions';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();

  clearGallery(gallery);
  toggleLoader(loader);

  const query = form.querySelector('input[name="query"]').value.trim();
  fetchPhotosList(query).then(photosList => {
    toggleLoader(loader);
    if (photosList) {
      fillGallery(gallery, photosList);
    }
  });
});
