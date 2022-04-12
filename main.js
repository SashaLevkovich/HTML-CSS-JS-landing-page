const searchBtn = document.querySelector('#search-btn');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');

console.log(closeBtn, overlay, searchBtn);

searchBtn.addEventListener('click', () => {
  overlay.classList.remove('closed-overlay');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.add('closed-overlay');
});
