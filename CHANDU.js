const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const card = document.getElementById('main-card');
const question = document.getElementById('question');

// The "Run Away" logic
noBtn.addEventListener('mouseover', () => {
    // Calculate random position within the card boundaries
    const maxWidth = card.clientWidth - noBtn.clientWidth;
    const maxHeight = card.clientHeight - noBtn.clientHeight;
    
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// The Success logic
yesBtn.addEventListener('click', () => {
    card.innerHTML = `
        <h1>💖 YAY!!! 💖</h1>
        <p>Best decision ever! 🥰</p>
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjN4d3d6bzNtcm9wcWZtZGNqMXg1OGF0bDFvczN5Z3c3OHRxeWpmMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FY5vhK1zpoJGqap917/giphy.gif" width="200">
        <p>I love you ❤️</p>
    `;
});