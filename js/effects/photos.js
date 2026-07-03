// ===========================================
// Floating Memory Photos
// ===========================================

const photoContainer = document.getElementById("photos");

if (photoContainer) {
    const images = [
        "assets/images/photo1.jpg",
        "assets/images/photo2.jpg",
        "assets/images/photo3.jpg",
        "assets/images/photo4.jpg"
    ];

    const positions = [
        { left: "5%", top: "18%" },
        { left: "78%", top: "15%" },
        { left: "8%", top: "68%" },
        { left: "74%", top: "66%" },
        { left: "42%", top: "2%" }
    ];

    let previousImage = -1;
    let previousPosition = -1;

    function randomIndex(max, previous) {
        if (max <= 1) return 0;

        let value;
        do {
            value = Math.floor(Math.random() * max);
        } while (value === previous);
        return value;
    }

    function createPhoto() {
        const imageIndex = randomIndex(images.length, previousImage);
        previousImage = imageIndex;

        const positionIndex = randomIndex(positions.length, previousPosition);
        previousPosition = positionIndex;

        const img = document.createElement("img");
        img.src = images[imageIndex];
        img.className = "photo";
        img.style.left = positions[positionIndex].left;
        img.style.top = positions[positionIndex].top;
        img.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

        photoContainer.appendChild(img);

        setTimeout(() => {
            img.remove();
        }, 8000);
    }

    createPhoto();
    setInterval(createPhoto, 2500);
}
