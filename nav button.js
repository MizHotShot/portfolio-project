const toggleButton = document.getElementById('toggleButton');
const navbarContainer = document.getElementById('navbar-container');
const navbarElements = document.getElementById('navbar');
const plusSign = document.getElementById('plus');

toggleButton.addEventListener('click', () => {
    navbarContainer.classList.toggle('open'); // Toggle the 'open' class
    navbarElements.classList.toggle('open');
    plusSign.classList.toggle('open');
});