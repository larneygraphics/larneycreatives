// Toggle mobile menu (optional, already handled by checkbox+CSS, but JS fallback)
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('change', () => {
    nav.style.display = menuToggle.checked ? 'flex' : 'none';
  });
});

// Smooth scroll behavior on nav links (optional enhancement)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Card hover animation logging (demo purpose)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    console.log(`Hovered on: ${card.querySelector('h3')?.textContent}`);
  });
});

// Responsive testimonial slider (optional enhancement if testimonials increase)
const testimonials = document.querySelectorAll('#testimonials .box');
if (testimonials.length > 2 && window.innerWidth < 768) {
  let index = 0;
  setInterval(() => {
    testimonials.forEach((box, i) => {
      box.style.display = (i === index) ? 'block' : 'none';
    });
    index = (index + 1) % testimonials.length;
  }, 4000);
}
