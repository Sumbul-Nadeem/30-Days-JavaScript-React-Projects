const inputColor = document.getElementById("color-input");
const generateColor = document.getElementById("generate-color");
const randomColor = document.getElementById("random-color");
const colorBadge = document.querySelector(".color-badge");

// Apply user-entered color
generateColor.addEventListener("click", () => {
    const colorValue = inputColor.value.trim();
    if (isValidColor(colorValue)) {
        document.body.style.backgroundColor = colorValue;
        updateColorDisplay(colorValue);
    } else if (colorValue !== "") {
        alert("Please enter a valid color code or name.");
    }
    inputColor.value = "";
});

// Generate random HEX color
randomColor.addEventListener("click", () => {
    const color = generateRandomHexColor();
    document.body.style.backgroundColor = color;
    updateColorDisplay(color);
});

// Copy to clipboard when badge is clicked
colorBadge.addEventListener("click", () => {
    navigator.clipboard.writeText(colorBadge.textContent)
        .then(() => {
            const originalText = colorBadge.textContent;
            colorBadge.textContent = "Copied!";
            setTimeout(() => {
                colorBadge.textContent = originalText;
            }, 1000);
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
        });
});

// Function to generate random HEX color
function generateRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, "0")}`;
}

// Validate color string
function isValidColor(strColor) {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== "";
}

// Update badge text
function updateColorDisplay(color) {
    colorBadge.textContent = color.toUpperCase();
}
