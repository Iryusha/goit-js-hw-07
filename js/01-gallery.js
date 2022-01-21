import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryList = document.querySelector('.gallery')

galleryList.addEventListener('click', onGalleryList)

const galleryMark = createGalleryMark(galleryItems)
galleryList.insertAdjacentHTML('beforeend', galleryMark)

function createGalleryMark(images) {
	return images .map(({ preview, original, description }) => {
			return `<div class="gallery__item">
				<a class="gallery__link" href="${original}" >
					<img
						class="gallery__image"
						src="${preview}"
						data-source="${original}"
						alt="${description}"
					/>
				</a>
			</div>`
		})
		.join('')
}

function onGalleryList(event) {
	event.preventDefault()

	for (let i = 0; i < galleryItems.length; i += 1) {
        if (event.target.dataset.source === galleryItems[i].original) {
 
            const createLightBox = basicLightbox.create(`
			<img src="${galleryItems[i].original}" alt="${galleryItems[i].description}"/>
						`)
            createLightBox.show()

        //     document.addEventListener('keydown', closeEscape)

        //     function closeEscape(event) {
        //     	if (event.key === 'Escape') {
        //     		createLightBox.close()
        //     	}
        // }
	 	}
	}
}

console.log(galleryItems);

