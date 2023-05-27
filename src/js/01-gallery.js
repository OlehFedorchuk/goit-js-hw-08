// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const ulEl = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li >`;
});
// Додавання фрагмента в DOM
ulEl.insertAdjacentHTML('afterbegin', markup.join(''));
// ulEl.addEventListener('click', openModal);

// function openModal(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   const lightbox = new simpleLightbox();
//   lightbox.load({
//     source: event.target.dataset.source,
//   });
// }
// console.log(galleryItems);
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'Alt',
});
