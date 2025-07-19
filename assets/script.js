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

  if (secondPageActive) {
    const spElements = document.querySelectorAll('#second-page img, #second-page h1, #second-page a');
    spElements.forEach((el, i) => {
      const moveX = offsetX * (2 + i * 1.5);
      const moveY = offsetY * (2 + i * 1.5);
      el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  }
});

window.addEventListener('mouseout', () => {
  imgs.forEach(img => img.style.transform = 'translate(0, 0)');
  const spElements = document.querySelectorAll('#second-page img, #second-page h1, #second-page a');
  spElements.forEach(el => el.style.transform = 'translate(0, 0)');
});

let secondPageActive = false;

document.getElementById('enter-btn').addEventListener('click', () => {
  const secondPage = document.getElementById('second-page');
  secondPage.classList.add('active');
  secondPageActive = true;

  const audio = new Audio('assets/intro.wav');
  audio.loop = true;
  audio.play();
});
