const imgs = [
  document.getElementById('text1'),
  document.getElementById('text2'),
  document.getElementById('head')
];

window.addEventListener('mousemove', (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const offsetX = (e.clientX - centerX) / centerX;
  const offsetY = (e.clientY - centerY) / centerY;

  imgs.forEach((img, i) => {
    const moveX = offsetX * (3 + i * 3);
    const moveY = offsetY * (3 + i * 3);
    img.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

window.addEventListener('mouseout', () => {
  imgs.forEach(img => img.style.transform = 'translate(0, 0)');
});

const enterBtn = document.getElementById('enter-btn');
const firstPage = document.getElementById('first-page');
const secondPage = document.getElementById('second-page');
const introAudio = document.getElementById('intro-audio');

enterBtn.addEventListener('click', () => {
  firstPage.style.transition = 'opacity 0.8s ease';
  firstPage.style.opacity = '0';

  setTimeout(() => {
    firstPage.style.display = 'none';
    secondPage.classList.add('active');
    secondPage.setAttribute('aria-hidden', 'false');

    introAudio.play().catch(() => {});
  }, 800);
});
