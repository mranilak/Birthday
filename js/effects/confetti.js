// ======================================
// Confetti Effect
// =====================================

function ensureConfettiContainer() {
    let container = document.getElementById("confetti");
    if (!container) {
        container = document.createElement("div");
        container.id = "confetti";
        document.body.appendChild(container);
    }
    return container;
}

function startConfetti() {
    const confettiContainer = ensureConfettiContainer();

    const colors = [
        "#ff4d8d",
        "#ffd700",
        "#00e5ff",
        "#7CFC00",
        "#ff9800",
        "#ffffff"
    ];

    const isSmall = window.innerWidth < 768;
    const count = isSmall ? 40 : 140;

    for (let i = 0; i < count; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti";
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animation = `confettiFall ${4 + Math.random() * 3}s linear forwards`;
        piece.style.animationDelay = `${Math.random()}s`;

        confettiContainer.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 9000);
    }
}
