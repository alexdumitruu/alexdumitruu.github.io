let noClickCount = 0; // Counter for the number of "No" button clicks
const maxClicks = 5; // Total number of allowed clicks
const shrinkStep = 0.2; // How much smaller the "No" button gets each click
const growStep = 0.2; // How much bigger the "Yes" button gets each click

function shrinkNo() {
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");
    const message = document.getElementById("forced-message");
    const gifContainer = document.querySelector(".gif");

    if (noClickCount < maxClicks) {
        // Increment the click counter
        noClickCount++;

        // Shrink the "No" button proportionally
        const newScaleNo = 1 - shrinkStep * noClickCount; // Decrease size gradually
        noBtn.style.transform = `scale(${newScaleNo})`;
        noBtn.style.opacity = `${1 - noClickCount / maxClicks}`; // Fade out gradually

        // Grow the "Yes" button proportionally
        const newScaleYes = 1 + growStep * noClickCount; // Increase size gradually
        yesBtn.style.transform = `scale(${newScaleYes})`;

        // Transition for smooth effect
        noBtn.style.transition = "all 0.3s ease-in-out";
        yesBtn.style.transition = "all 0.3s ease-in-out";

        // If maximum clicks reached, remove "No" button and show the message
        if (noClickCount === maxClicks) {
            setTimeout(() => {
                noBtn.style.display = "none"; // Hide the "No" button completely
                message.classList.remove("hidden"); // Show the message
                message.style.opacity = "1"; // Fade in the message
                gifContainer.style.display = "block"; // Show the GIF
                gifContainer.style.opacity = "1";
            }, 300); // Delay to match the transition
        }
    }
}
