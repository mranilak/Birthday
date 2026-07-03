// ===========================================
// Floating Hearts
// ===========================================

const heartContainer = document.getElementById("hearts");
let heartInterval = null;

function createHeart() {
    if (!heartContainer) return;

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = `${Math.random() * 100}vw`;

    const size = 12 + Math.random() * 18;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${5 + Math.random() * 4}s`;
    heart.style.opacity = `${0.3 + Math.random() * 0.7}`;

    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 9000);
}

function startHearts() {
    if (!heartContainer || heartInterval) return;
    heartInterval = setInterval(createHeart, 700);
}
