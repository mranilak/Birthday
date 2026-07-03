// ===============================
// Stars Effect
// ===============================

const starsContainer = document.getElementById("stars");

function createStars() {
    if (!starsContainer) return;

    const totalStars = 200;

    for (let i = 0; i < totalStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${Math.random() * 3}s`;

        starsContainer.appendChild(star);
    }
}

createStars();