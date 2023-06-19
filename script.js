// script.js

var currentPage = 1;
var maxPages = 3;

// Show the initial page
showPage(currentPage);

// Handle form submission
document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        // Perform form validation here
        // ...

        // Send form data to the server
        // ...
    });

// Handle page indicators click events
var indicatorDots = document.querySelectorAll(".indicator-dot");
indicatorDots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        changePage(index + 1);
    });
});

// Handle keyboard arrow keys navigation
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 37) {
        // Left arrow key
        changePage(currentPage - 1);
    } else if (event.keyCode === 39) {
        // Right arrow key
        changePage(currentPage + 1);
    }
});

// Function to show a specific page
function showPage(pageNumber) {
    var pages = document.querySelectorAll(".page");
    var dots = document.querySelectorAll(".indicator-dot");

    if (pageNumber < 1 || pageNumber > maxPages) {
        return;
    }

    pages.forEach(function (page) {
        page.classList.remove("current");
    });

    dots.forEach(function (dot) {
        dot.classList.remove("current");
    });

    pages[pageNumber - 1].classList.add("current");
    dots[pageNumber - 1].classList.add("current");

    currentPage = pageNumber;
}

// Function to change the page
function changePage(pageNumber) {
    var pages = document.querySelectorAll(".page");

    if (pageNumber < 1 || pageNumber > maxPages) {
        return;
    }

    pages[currentPage - 1].classList.add("animate-slide-out");

    setTimeout(function () {
        pages[currentPage - 1].classList.remove("animate-slide-out");
        showPage(pageNumber);
        pages[pageNumber - 1].classList.add("animate-slide-in");
    }, 500);

    setTimeout(function () {
        pages[pageNumber - 1].classList.remove("animate-slide-in");
    }, 1000);
}
