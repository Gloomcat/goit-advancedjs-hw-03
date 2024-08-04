import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const showErrorMessage = errorMessage => {
  console.log(errorMessage);
  let settings = {
    titleSize: '16px',
    titleLineHeight: '24px',
    titleColor: '#FFF',
    messageSize: '16px',
    messageLineHeight: '24px',
    messageColor: '#FFF',
    theme: 'dark',
    position: 'topRight',
    title: 'Error',
    iconUrl: '../img/icon-error.svg',
    backgroundColor: '#EF4040',
    message: errorMessage,
  };

  iziToast.show(settings);
};

export const fillGallery = (gallery, photosList) => {
  const galleryItems = photosList.map(photo => {
    return `
        <div class='gallery-item'>
            <a href="${photo.largeImageURL}" class="gallery-link">
                <img src="${photo.previewURL}" alt="${photo.tags}" loading="lazy" width="360" height="200"/>
            </a>
            <ul class="info">
                <li>
                    <p class="info-name">Likes</p>
                    <p class="info-item">${photo.likes}</p>
                </li>
                <li>
                    <p class="info-name">Views</p>
                    <p class="info-item">${photo.views}</p>
                </li>
                <li>
                    <p class="info-name">Comments</p>
                    <p class="info-item">${photo.comments}</p>
                </li>
                <li>
                    <p class="info-name">Downloads</p>
                    <p class="info-item">${photo.downloads}</p>
                </li>
            </ul>
        </div>
        `;
  });
  gallery.innerHTML = galleryItems.join('\n');
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
};

export const clearGallery = gallery => {
  gallery.innerHTML = '';
};
