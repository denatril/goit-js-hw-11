import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm.js';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = '38963544-7c343bd5df4ae8b0731ae7a7e';
const BASE_URL = 'https://pixabay.com/api/';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox;

function initLightbox() {
  if (lightbox) {
    lightbox.destroy();
  }

  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

form.addEventListener('submit', onSearch);

function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`);
}

function onSearch(event) {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();

  if (!query) {
    return;
  }

  clearGallery();
  showLoader();

  fetchImages(query)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }

      const markup = createGalleryMarkup(data.hits);
      gallery.innerHTML = markup;
      initLightbox();
    })
    .catch(() => {
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
}

function clearGallery() {
  gallery.innerHTML = '';
}

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}

function createGalleryMarkup(images) {
  return images
    .map(image => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
              class="gallery-image"
              src="${image.webformatURL}"
              alt="${image.tags}"
            />
          </a>
          <ul class="image-info">
            <li>
              <span>Likes</span>
              <span>${image.likes}</span>
            </li>
            <li>
              <span>Views</span>
              <span>${image.views}</span>
            </li>
            <li>
              <span>Comments</span>
              <span>${image.comments}</span>
            </li>
            <li>
              <span>Downloads</span>
              <span>${image.downloads}</span>
            </li>
          </ul>
        </li>
      `;
    })
    .join('');
}
