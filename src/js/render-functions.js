import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

const refreshLightbox = () => {
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }

  lightbox.refresh();
};

export const toggleLoader = loader => {
  if (loader.classList.contains('hidden')) {
    loader.classList.remove('hidden');
  } else {
    loader.classList.add('hidden');
  }
};

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
  console.log(photosList);
  const galleryItems = photosList.map(photo => {
    return `
        <div class='gallery-item'>
            <a href="${photo.largeImageURL}" class="gallery-link">
                <img src="${photo.previewURL}" alt="${photo.tags}" loading="lazy" width="360" height="200"/>
            </a>
            <ul class="info">
                <li class="info-item">
                    <p class="info-category">Likes</p>
                    <p class=>${photo.likes}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Views</p>
                    <p class=>${photo.views}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Comments</p>
                    <p class=>${photo.comments}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Downloads</p>
                    <p class=>${photo.downloads}</p>
                </li>
            </ul>
        </div>
        `;
  });
  gallery.innerHTML = galleryItems.join('\n');
  refreshLightbox();
};

export const clearGallery = gallery => {
  gallery.innerHTML = '';
  refreshLightbox();
};
