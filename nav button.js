const toggleButton = document.getElementById('toggleButton');
const plusSign = document.getElementById('plus');
const main = document.querySelector('main'); // Get the <main> element
const navbarContainer = document.getElementById('navbar-container');
const navbarElements = document.getElementById('navbar');

// Define variables for different margin and height values
const closedMargin = 48;
const openMargin = 144;
const hoverMarginIncrement = 20;
const hoverNavbarHeightIncrement = 10;

// Function to set the main element's margin
function setMainMargin(marginValue) {
    main.style.marginTop = `${marginValue}px`;
}

// Function to set the navbarContainer's height
function setNavbarContainerHeight(heightValue) {
    navbarContainer.style.height = `${heightValue}px`;
}

// Function to handle button hover
function moveMainOnButtonHover() {
    if (navbarContainer.classList.contains('open')) {
        setMainMargin(openMargin);
        setNavbarContainerHeight(openMargin + hoverNavbarHeightIncrement);
    } else {
        setMainMargin(closedMargin);
        setNavbarContainerHeight(closedMargin + hoverNavbarHeightIncrement);
    }
}

// Function to reset the main element's margin
function resetMainMargin() {
    if (navbarContainer.classList.contains('open')) {
        setMainMargin(openMargin);
        setNavbarContainerHeight(openMargin);
    } else {
        setMainMargin(closedMargin);
        setNavbarContainerHeight(closedMargin);
    }
}

toggleButton.addEventListener('mouseenter', moveMainOnButtonHover);
toggleButton.addEventListener('mouseleave', resetMainMargin);

toggleButton.addEventListener('click', () => {
    navbarContainer.classList.toggle('open');
    navbarElements.classList.toggle('open');
    plusSign.classList.toggle('open');
    resetMainMargin(); // Ensure the margin is reset when clicking the button
});

// Add an event listener to handle hover over the navbar
navbarContainer.addEventListener('mouseenter', () => {
    if (navbarContainer.classList.contains('open')) {
        setNavbarContainerHeight(openMargin + hoverNavbarHeightIncrement);
    } else {
        setNavbarContainerHeight(closedMargin + hoverNavbarHeightIncrement);
    }
});

navbarContainer.addEventListener('mouseleave', () => {
    if (navbarContainer.classList.contains('open')) {
        setNavbarContainerHeight(openMargin);
    } else {
        setNavbarContainerHeight(closedMargin);
    }
});