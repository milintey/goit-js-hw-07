import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

function onCreateItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>`;
    }).join('');
}

const item = onCreateItem(galleryItems);

gallery.insertAdjacentHTML('beforeend', item);

gallery.addEventListener('click', onImgClick);

function onImgClick(evt) {
    evt.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`)

    instance.show();
}


console.log(galleryItems);