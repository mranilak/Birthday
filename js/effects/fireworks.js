// ======================================
// Fireworks Effect
// =====================================

function ensureFireworksContainer() {
    let container = document.getElementById("fireworks");
    if (!container) {
        container = document.createElement("div");
        container.id = "fireworks";
        document.body.appendChild(container);
    }
    return container;
}

function createFirework(container, x, y) {
    if (!container) return;

    const colors = [
        "#ff4d8d",
        "#ffd700",
        "#00e5ff",
        "#7CFC00",
        "#ff9800",
        "#ffffff"
    ];

    const isSmall = window.innerWidth < 768;
    const pieces = isSmall ? 12 : 30;

    for (let i = 0; i < pieces; i++) {
        const particle = document.createElement("div");
        particle.className = "firework";
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 120;

        particle.animate([
            { transform: "translate(0,0) scale(1)", opacity: 1 },
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1200 + Math.random() * 400,
            easing: "ease-out"
        });

        container.appendChild(particle);
        setTimeout(() => particle.remove(), 1600);
    }
}

function startFireworks() {
    const container = ensureFireworksContainer();

    const isSmall = window.innerWidth < 768;

    // Fire a few bursts across the top area for a fuller celebration
    const positions = isSmall
        ? [[window.innerWidth * 0.5, window.innerHeight * 0.2], [window.innerWidth * 0.3, window.innerHeight * 0.25]]
        : [
            [window.innerWidth * 0.2, window.innerHeight * 0.28],
            [window.innerWidth * 0.5, window.innerHeight * 0.18],
            [window.innerWidth * 0.8, window.innerHeight * 0.25],
            [window.innerWidth * 0.35, window.innerHeight * 0.22],
            [window.innerWidth * 0.65, window.innerHeight * 0.2]
        ];

    positions.forEach((pos, idx) => {
        setTimeout(() => createFirework(container, pos[0], pos[1]), idx * 300);
    });
}

// Fire repeated bursts for a given duration (ms)
function burstFireworks(duration = 6000, interval = 700) {
    const handle = setInterval(() => {
        startFireworks();
    }, interval);

    setTimeout(() => clearInterval(handle), duration);
}
