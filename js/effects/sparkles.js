// ======================================
// Magical Golden Particles
// ======================================

const sparkleContainer = document.body;

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * window.innerWidth + "px";

    sparkle.style.top = Math.random() * window.innerHeight + "px";

    const size = 4 + Math.random() * 10;

    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";

    sparkle.style.animationDuration =
        (4 + Math.random() * 3) + "s";

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 7000);

}

setInterval(createSparkle, 450);