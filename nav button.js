const toggleButton = document.getElementById('toggleButton');
const navbarContainer = document.getElementById('navbar-container');
const navbarElements = document.getElementById('navbar');
const plusSign = document.getElementById('plus');
const main = document.querySelector('main'); // Get the <main> element

// Store the default margin-top value of <main>
const mainDefaultMarginTop = parseFloat(getComputedStyle(main).marginTop);

// Function to move the main element
function moveMain() {
    main.style.marginTop = `${navbarElements.offsetHeight}px`;
}

// Function to reset the main element's margin
function resetMainMargin() {
    main.style.marginTop = `${mainDefaultMarginTop}px`;
}

toggleButton.addEventListener('mouseenter', () => {
    moveMain();
});

toggleButton.addEventListener('mouseleave', () => {
    resetMainMargin();
});

toggleButton.addEventListener('click', () => {
    navbarContainer.classList.toggle('open');
    navbarElements.classList.toggle('open');
    plusSign.classList.toggle('open');

    // After toggling, check if the navbar is open and adjust the main margin
    if (navbarContainer.classList.contains('open')) {
        moveMain();
    } else {
        resetMainMargin();
    }
});