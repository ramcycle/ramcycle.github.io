// Smooth scroll for CTA button
document.querySelector('.cta').addEventListener('click', e => {
  if (e.target.getAttribute('href') === '#services') {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
  }
});

// Card hover animation
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});

// Fun hover effect for Game Dungeon button
const dungeonBtn = document.querySelector('#game-dungeon .cta');
dungeonBtn.addEventListener('mouseover', () => {
  dungeonBtn.style.transform = 'scale(1.1)';
  dungeonBtn.style.boxShadow = '0 0 15px #ff6600';
});
dungeonBtn.addEventListener('mouseout', () => {
  dungeonBtn.style.transform = 'scale(1)';
  dungeonBtn.style.boxShadow = 'none';
});

// Form submission alert
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for reaching out! We’ll get back to you soon.');
});
