document.addEventListener('DOMContentLoaded', function() {

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlideIndex = 0;

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImage = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');

// dots 
const dotsContainer = document.querySelector('.dots');
const dots = dotsContainer.querySelectorAll('.dot');

function updateCarousel() {
	bannerImage.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
	bannerText.innerHTML = slides[currentSlideIndex].tagLine;

	// dots
	dots.forEach((dot, index) => {
		dot.classList.remove('dot_selected');
		if (index === currentSlideIndex) {
			dot.classList.add('dot_selected');
		}
	});
}

// Event Listeners sur les flèches 
arrowLeft.addEventListener('click', function() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1;
    }
    updateCarousel();
});

arrowRight.addEventListener('click', function() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
}
updateCarousel();
});

// Event Listeners sur les points 
dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
    	currentSlideIndex = index;
		updateCarousel();
	});
});

  updateCarousel();
});
