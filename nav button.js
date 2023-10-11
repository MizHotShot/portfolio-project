const toggleButton = document.getElementById('toggleButton');
const navbarContainer = document.getElementById('navbar-container');

toggleButton.addEventListener('click', () => {
    navbarContainer.classList.toggle('open'); // Toggle the 'open' class
});