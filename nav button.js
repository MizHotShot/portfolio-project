document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle');
    const navbar = document.getElementById('navbar');

    toggleButton.addEventListener('click', () => {
        navbar.classList.toggle('open'); // Toggle the 'open' class
    });
});