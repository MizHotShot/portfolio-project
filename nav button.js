const toggleButton = document.getElementById('toggleButton');
const navbar = document.getElementById('navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('open'); // Toggle the 'open' class
});