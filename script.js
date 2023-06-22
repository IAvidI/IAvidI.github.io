var currentPage = 0;

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 37) {
        // Left arrow key
        changePage(currentPage - 1);
    } else if (event.keyCode === 39) {
        // Right arrow key
        changePage(currentPage + 1);
    }
});

// Handle page indicators click events
var indicatorDots = document.querySelectorAll(".indicator-dot");
indicatorDots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        changePage(index);
    });
});

// Handle previous page button click event
document.getElementById("prev-page").addEventListener("click", function () {
    changePage(currentPage - 1);
});

// Handle next page button click event
document.getElementById("next-page").addEventListener("click", function () {
    changePage(currentPage + 1);
});

let slides = document.querySelectorAll(".page");
let slidesCount = slides.length;

// Function to change the page
function changePage(pageNumber) {
    var dots = document.querySelectorAll(".indicator-dot");
    var slide = document.querySelector(".slide");

    pageNumber = pageNumber % slidesCount;

    if (pageNumber < 0) {
        pageNumber = 0;
    }

    let ditance = -100;
    let styleValue = pageNumber * ditance;

    dots.forEach(function (dot) {
        dot.classList.remove("current");
    });
    dots[pageNumber].classList.add("current");

    /* Applying the CSS */
    let style = `translateX(${styleValue}%)`;
    slide.style.transform = style;

    currentPage = pageNumber;
}
