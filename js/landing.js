// ========================================
// Landing Page Controller
// ========================================

function initLanding() {
    const startBtn = document.getElementById("startBtn");
    const bgMusic = document.getElementById("bgMusic");
    const glow = document.querySelector(".cursor-glow");
    const hero = document.querySelector(".hero");
    const overlay = document.querySelector(".page-transition");

    if (window.innerWidth <= 768 && glow) {
        glow.style.display = "none";
    }

    if (glow) {
        document.addEventListener("mousemove", (e) => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    }

    if (!(startBtn && bgMusic && hero && overlay)) {
        return;
    }

    startBtn.addEventListener("click", () => {
        bgMusic.volume = 0;
        bgMusic.play().catch(() => { });

        let volume = 0;
        const fade = setInterval(() => {
            volume = Math.min(volume + 0.02, 0.35);
            bgMusic.volume = volume;
            if (volume >= 0.35) {
                clearInterval(fade);
            }
        }, 120);

        hero.classList.add("fade-out");
        overlay.style.visibility = "visible";

        setTimeout(() => {
            overlay.style.opacity = "1";
        }, 200);

        setTimeout(() => {
            window.location.href = "cake.html";
        }, 1500);
    });
}

document.addEventListener("DOMContentLoaded", initLanding);
