// ======================================
// Birthday Cake Interaction
// ======================================

const candles = document.querySelector(".candles");
const flames = document.querySelectorAll(".flame");
const cakeContainer = document.querySelector(".cake-container");

let blown = false;

if (candles) {
    candles.addEventListener("click", () => {
        if (blown || flames.length === 0) return;
        blown = true;

        flames.forEach((flame, index) => {
            setTimeout(() => {
                flame.classList.add("flame-out");
                const smoke = flame.nextElementSibling;
                if (smoke) {
                    smoke.classList.add("smoke-rise");
                }
            }, index * 250);
        });

        setTimeout(() => {
            // run repeated fireworks bursts for a fuller celebration
            if (typeof burstFireworks === 'function') {
                burstFireworks(7000, 700);
            } else if (typeof startFireworks === 'function') {
                startFireworks();
            }

            // play confetti together with fireworks
            try {
                if (typeof startConfetti === 'function') startConfetti();
            } catch (e) {
                // ignore if confetti isn't available
            }

            startHearts();
            playCelebrationMusic();
        }, 2200);

        if (cakeContainer) {
            setTimeout(() => {
                cakeContainer.classList.add("cake-fade");
            }, 5500);
        }

        setTimeout(() => {
            showBirthdayMessage();
        }, 7000);
    });
}


