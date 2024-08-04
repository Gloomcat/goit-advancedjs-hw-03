import { showErrorMessage } from './render-functions';

const API_KEY = '45271330-704da2140a32d702981ddfad2';

export const fetchPhotosList = query => {
  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `Failed to load images, error code: ${response.status}`
        );
      }

      return response.json();
    })
    .then(data => {
      if (parseInt(data.totalHits) > 0) {
        return data.hits;
      } else {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
    })
    .catch(error => {
      showErrorMessage(error.message);
    });
};
