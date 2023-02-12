import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryContainer.addEventListener('click', onGalleryCardClick)

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class = "gallery__item">
        <a class = "gallery__link" href = "${original}"> 
        <img class = "gallery__image"
        src = "${preview}"
        data-sourse = "${original}"
        alt = "${description}"
        />
        </a>
        </div>
        `
        }).join("");
}

function onGalleryCardClick(evt) {
    evt.preventDefault();
    const isGaleryImage = evt.target.classList.contains(".gallery__image");
    if (!isGaleryImage) {
        return;
    }
    console.log(evt.target)
}
console.log(galleryItems);



