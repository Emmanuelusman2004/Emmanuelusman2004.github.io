// JavaScript logic for the recap page
document.addEventListener('DOMContentLoaded', () => {
    const recapData = [
        {
            image: 'assets/photos/photo1.jpg',
            description: 'Our first date at the park!',
            special: false
        },
        {
            image: 'assets/photos/photo2.jpg',
            description: 'Celebrating your birthday together!',
            special: true
        },
        {
            image: 'assets/photos/photo3.jpg',
            description: 'Our trip to the beach!',
            special: false
        },
        {
            image: 'assets/photos/photo4.jpg',
            description: 'Movie night with popcorn!',
            special: false
        },
        {
            image: 'assets/photos/photo5.jpg',
            description: 'Our anniversary dinner!',
            special: true
        }
    ];

    let currentIndex = 0;

    const cardContainer = document.querySelector('.card-container');
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    const valentinePrompt = document.querySelector('.valentine-prompt');

    function updateCard() {
        const { image, description, special } = recapData[currentIndex];
        cardContainer.innerHTML = `
            <img src="${image}" alt="Memory" class="memory-image" />
            <p class="memory-description">${description}</p>
        `;
        if (special) {
            triggerConfetti();
        }
    }

    function triggerConfetti() {
        // Simple confetti effect
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        document.body.appendChild(confetti);
        setTimeout(() => {
            document.body.removeChild(confetti);
        }, 3000);
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % recapData.length;
        updateCard();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + recapData.length) % recapData.length;
        updateCard();
    });

    valentinePrompt.addEventListener('click', () => {
        alert('Will you be my Valentine? ❤️');
    });

    updateCard();
});