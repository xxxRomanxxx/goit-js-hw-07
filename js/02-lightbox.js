import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryCardClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />\
        </a>`
    }).join("");
}

function onGalleryCardClick(evt) {
  evt.preventDefault();
//   const isGalleryImg = evt.target.classList.contains("gallery__image");

//   if (!isGalleryImg) {
//     return;
//   }
  
  const lightbox = new SimpleLightbox(".gallery__item", 
  {
    captionDelay: 250,
    captionData: 'alt',
  });
}


console.log(galleryItems);
