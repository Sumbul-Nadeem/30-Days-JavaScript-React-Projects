const dice = document.getElementById('dice');
const rollBtn = document.getElementById('rollBtn');
const resultText = document.getElementById('result');

// Create dots for each face
function createDots() {
    document.querySelectorAll('.face').forEach(face => {
        face.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const dot = document.createElement('span');
            face.appendChild(dot);
        }
    });
}

// Mapping numbers to fixed dice rotations
const diceFaces = {
    1: { x: 0,   y: 0 },
    2: { x: -90, y: 0 },
    3: { x: 0,   y: -90 },
    4: { x: 0,   y: 90 },
    5: { x: 90,  y: 0 },
    6: { x: 180, y: 0 }
};

function rollDice() {
    const number = Math.floor(Math.random() * 6) + 1;

    // Add random spins for fun
    const extraX = 360 * 2; // 2 full spins
    const extraY = 360 * 2;

    const finalX = diceFaces[number].x + extraX;
    const finalY = diceFaces[number].y + extraY;

    dice.style.transform = `rotateX(${finalX}deg) rotateY(${finalY}deg)`;

    // Update result after animation ends
    setTimeout(() => {
        resultText.textContent = `You rolled a ${number}! 🎉`;
    }, 1000);
}

rollBtn.addEventListener('click', rollDice);
createDots();

window.addEventListener('load', () => {
    setTimeout(() => {
        dice.style.transform = 'rotateX(-10deg) rotateY(10deg)';
    }, 300);
});
