
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
  
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
      });

    main.addEventListener('click', () => {
    nav.classList.remove('open');
    });
  });
  

  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });


  
let slideIndices = {};

function plusSlides(n, sliderId) {
  showSlides((slideIndices[sliderId] || 1) + n, sliderId);
}

function currentSlide(n, sliderId) {
  showSlides(n, sliderId);
}

function showSlides(n, sliderId) {
  let container = document.querySelector(`.slideshow-container[data-slider-id="${sliderId}"]`);
  let slides = container.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(`.dots[data-slider-id="${sliderId}"] .dot`);

  if (!slideIndices[sliderId]) slideIndices[sliderId] = 1;
  if (n > slides.length) n = 1;
  if (n < 1) n = slides.length;
  slideIndices[sliderId] = n;

  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  slides[n - 1].style.display = "block";
  if (dots[n - 1]) dots[n - 1].classList.add("active");
}

// Initialisiere alle Slider beim Laden der Seite
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".slideshow-container").forEach(container => {
    let sliderId = container.getAttribute("data-slider-id");
    showSlides(1, sliderId);
  });
});
