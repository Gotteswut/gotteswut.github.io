
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