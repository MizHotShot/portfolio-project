const toggleButton = document.getElementById('toggleButton');
const navbarContainer = document.getElementById('navbar-container');
const navbarElements = document.getElementById('navbar');

toggleButton.addEventListener('click', () => {
    navbarContainer.classList.toggle('open'); // Toggle the 'open' class
    navbarElements.classList.toggle('open');
});