const body = document.body;
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});