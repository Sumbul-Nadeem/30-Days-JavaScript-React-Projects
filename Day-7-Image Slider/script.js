let scrollContainer = document.querySelector(".gallery");
let previousBtn = document.getElementById("previousBtn");
let nextBtn = document.getElementById("nextBtn");

const imageSpan = scrollContainer.querySelector("span");
const imageWidth = imageSpan.offsetWidth + 20; // 20px grid-gap

// Scroll buttons
nextBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: imageWidth, behavior: "smooth" });
    setTimeout(updateButtons, 300);
});

previousBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -imageWidth, behavior: "smooth" });
    setTimeout(updateButtons, 300);
});

// Disable/enable buttons based on scroll position
function updateButtons() {
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    previousBtn.disabled = scrollContainer.scrollLeft <= 0;
    nextBtn.disabled = scrollContainer.scrollLeft >= maxScrollLeft - 5; // minor buffer
}

// Initial check on load
window.addEventListener("load", updateButtons);
