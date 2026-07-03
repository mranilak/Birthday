// ======================================
// Video Scene Controller
// ======================================

document.addEventListener("DOMContentLoaded", () => {
    const introScreen = document.getElementById("introScreen");
    const memoryVideo = document.getElementById("memoryVideo");
    const fadeScreen = document.getElementById("fadeScreen");
    const videoBlur = document.querySelector(".video-blur");
    const skipBtn = document.getElementById("skipBtn");

    if (!(introScreen && memoryVideo && fadeScreen)) {
        return;
    }

    setTimeout(() => {
        introScreen.classList.add("hide");
        memoryVideo.classList.add("show");

        memoryVideo.play().catch(() => {
            // Video may be blocked until user interaction
        });

        if (videoBlur) {
            videoBlur.play().catch(() => {
                // Some browsers may block autoplay for muted background video
            });
        }
    }, 1200);

    memoryVideo.addEventListener("ended", () => {
        // show fade overlay and pause videos to ensure a smooth transition
        fadeScreen.classList.add("show");
        try { memoryVideo.pause(); } catch (e) {}
        if (videoBlur) {
            try { videoBlur.pause(); } catch (e) {}
        }

        // add body fade to smoothly fade out remaining content
        document.body.classList.add('fade-out');

        // wait for the CSS transitions (fade-screen:1s, body fade:1s) then navigate
        setTimeout(() => {
            window.location.href = "letter.html";
        }, 1100);
    });

    if (skipBtn) {
        setTimeout(() => {
            skipBtn.style.opacity = "1";
        }, 2000);

        skipBtn.addEventListener("click", () => {
            fadeScreen.classList.add("show");
            try { memoryVideo.pause(); } catch (e) {}
            if (videoBlur) {
                try { videoBlur.pause(); } catch (e) {}
            }
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = "letter.html";
            }, 1100);
        });
    }
});
