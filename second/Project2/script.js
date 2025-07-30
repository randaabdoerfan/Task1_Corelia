const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.slide');

let currentIndex = 0;
const visibleImages = 3;

function moveCarousel() {
  currentIndex++;
  if (currentIndex > images.length - visibleImages) {
    currentIndex = 0; // reset to start
  }
  const imageWidth = images[0].offsetWidth;
  track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Slide every 3 seconds
setInterval(moveCarousel, 3000);
