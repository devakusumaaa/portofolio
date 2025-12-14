// Scroll reveal animation
const sections = document.querySelectorAll(
  '.hero-section, .about-section, .education-section, .skills-section, .certificate-section, .experience-section, .project-section'
);

const revealOnScroll = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 120;

    if (top < trigger) {
      section.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// Parallax effect for hero image
window.addEventListener('scroll', () => {
  const heroImg = document.querySelector('.img-box img');
  if (heroImg) {
    heroImg.style.transform = `translateY(${window.scrollY * 0.12}px)`;
  }
});


// Hover effect project card (extra smooth)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
});
