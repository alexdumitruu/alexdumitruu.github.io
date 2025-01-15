let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function moveCarousel() {
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 100; // Move by 100% of the width
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

setInterval(moveCarousel, 3000);

setTimeout(() => {
    const confirmationMessage = document.getElementById('confirmation-message');
    const continueButton = document.getElementById('continue-button');

    confirmationMessage.classList.remove('hidden');
    continueButton.classList.remove('hidden');
}, 27000);

function fadeOutHourglass() {
    const hourglassBackground = document.querySelector(".hourglassBackground");

    if (hourglassBackground) {
        hourglassBackground.style.transition = "opacity 2s ease";
        hourglassBackground.style.opacity = "0";

        setTimeout(() => {
            hourglassBackground.style.display = "none";
        }, 2000);
    }
}

// Trigger the fade-out after 27 seconds
setTimeout(fadeOutHourglass, 27000);