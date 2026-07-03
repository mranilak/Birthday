// ======================================
// Birthday Message
// ======================================

const birthdayMessage = document.getElementById("birthdayMessage");
const continueBtn = document.getElementById("continueBtn");

function showBirthdayMessage() {

    birthdayMessage.classList.add("show");

    // Show button after 5 seconds
    setTimeout(() => {

        continueBtn.classList.add("show");

    }, 3000);

}

// ======================================
// Continue Button
// ======================================

continueBtn.addEventListener("click", () => {

    const transition =
        document.getElementById("transitionScreen");

    // one-time celebration before navigating to the video
    try {
        if (typeof startConfetti === 'function') startConfetti();
    } catch (e) {
        // ignore if confetti not available
    }

    transition.classList.add("show");

    setTimeout(() => {

        window.location.href = "video.html";

    }, 1300);

});