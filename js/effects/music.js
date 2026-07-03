// ======================================
// Birthday Music
// ======================================

const birthdaySong = document.getElementById("birthdaySong");

function playCelebrationMusic() {

    if (!birthdaySong) return;

    birthdaySong.currentTime = 0;

    birthdaySong.play().catch(error => {
        console.log("Audio could not be played:", error);
    });

}