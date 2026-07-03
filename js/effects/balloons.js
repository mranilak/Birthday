// ===============================
// Premium Balloons
// ===============================

const balloonContainer = document.getElementById("balloons");

const colors = [
    "#ff4d8d",
    "#ff6b6b",
    "#ffd166",
    "#8ec5fc",
    "#b388ff",
    "#6ee7b7"
];

function createBalloon() {
    if (!balloonContainer) return;

    const balloon = document.createElement("div");
    balloon.className = "balloon";

    const size = Math.random() * 30 + 40;
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.3}px`;
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDuration = `${8 + Math.random() * 6}s`;

    balloonContainer.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 15000);
}

if (balloonContainer) {
    setInterval(createBalloon, 1000);
}
