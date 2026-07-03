// ======================================
// Magical Letter Scene
// ======================================

const envelope = document.getElementById("envelope");
const fullLetter = document.getElementById("fullLetter");
const typingText = document.getElementById("typingText");
const replayBtn = document.getElementById("replayBtn");

const message = `

Today is a very special day.

I just want to say...

Thank you for every smile.

Thank you for every memory.

May your life always be filled
with happiness, success,
and endless love.

❤️ Happy Birthday ❤️

`;

envelope.addEventListener("click", () => {

    // Open flap
    envelope.classList.add("open");

    // Wait for animation
    setTimeout(() => {

        // Fade envelope away
        envelope.style.opacity = "0";

        // Show full letter
        fullLetter.classList.add("show");

        // Start typing
        setTimeout(typeMessage, 700);



    }, 1200);

});

function typeMessage() {

    let i = 0;

    function type() {

        if (i < message.length) {

            typingText.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 40);
        } else {
            setTimeout(showPhotos, 500);
        }
    }
    type();

}

function showPhotos() {

    const photos =
        document.querySelectorAll(".memory-photo");

    photos.forEach((photo, index) => {

        setTimeout(() => {

            photo.classList.add("show");

        }, index * 500);

    });

    setTimeout(showSignature, 3000);

}

function showSignature() {

    document
        .getElementById("signature")
        .classList.add("show");

    setTimeout(() => {

        replayBtn.classList.add("show");

    }, 1200);

}
replayBtn.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "index.html";

    }, 1000);

});