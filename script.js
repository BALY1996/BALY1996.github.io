// Animation "apparition progressive" au scroll
const revealElements = document.querySelectorAll('.reveal, .fade-in, .slide-up, .slide-left');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));
