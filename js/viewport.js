// Sets a --vh CSS variable that matches 1% of the viewport height
// This avoids mobile browser UI (address bar) causing 100vh jumps.
(function () {
    function setVh() {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    }

    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);
    // set initially
    setVh();
})();
