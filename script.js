let currentSlide = 0;

function showSlide(index) {
	const slides = document.querySelectorAll('.carousel-item');
	if (index >= slides.length) {
		currentSlide = 0;
	} else if (index < 0) {
		currentSlide = slides.length - 1;
	} else {
		currentSlide = index;
	}

	const carousel = document.querySelector('.carousel');
	const offset = -currentSlide * 100;
	carousel.style.transform = translateX(${offset}%);
}

function changeSlide(direction) {
	showSlide(currentSlide + direction);
}

// Automatically change slide every 3 seconds
setInterval(() => {
	changeSlide(1);
}, 3000);

///Footer
function updateClock() {
	const now = new Date();
	const options = {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false
	};
	const formattedTime = now.toLocaleTimeString([], options);
	document.getElementById('clock').textContent = formattedTime;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock immediately on page load

/////////////////////////////

const images = document.querySelectorAll('#slider img');
let index = 0;

setInterval(() => {
	images[index].classList.remove('active');
	index = (index + 1) % images.length;
	images[index].classList.add('active');
}, 1200);

////////////////////////////

const carouselImages = document.querySelectorAll('.image-carousel img');
let currentImageIndex = 0;

// Define the change speed for each image in milliseconds
const changeSpeeds = [400, 400, 400, 500, 400, 400, 400, 500, 400, 400, 400, 500, 400, 400, 400]; // Example speeds for each image
let imageChangeTimer;

function changeImage() {
	carouselImages[currentImageIndex].style.display = 'none'; // Hide current image
	currentImageIndex = (currentImageIndex + 1) % carouselImages.length; // Update index
	carouselImages[currentImageIndex].style.display = 'block'; // Show next image

	// Reset the timer based on the current image's change speed
	clearTimeout(imageChangeTimer);
	imageChangeTimer = setTimeout(changeImage, changeSpeeds[currentImageIndex]);
}

// Start the image change process based on the speed of the first image
imageChangeTimer = setTimeout(changeImage, changeSpeeds[currentImageIndex]);
