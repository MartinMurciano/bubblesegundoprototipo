let currentSlide = 0;

function moveSlide(direction) {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  const offset = -currentSlide * 100; // Desplaza las imágenes
  carousel.style.transform = `translateX(${offset}%)`;
}

// Desplazamiento automático cada 5 segundos
setInterval(() => {
  moveSlide(1);
}, 5000);



