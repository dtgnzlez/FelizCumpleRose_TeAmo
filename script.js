const audio = new Audio();
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const volume = document.getElementById("volume");
const cover = document.getElementById("cover");
const selector = document.getElementById("selector");
const songTitle = document.getElementById("song-title");

let currentSong = 0;
let options = Array.from(selector.options);

// Cargar canción
function loadSong(index) {
    const option = options[index];
    audio.src = "assets/musica/" + option.value;
    cover.src = "assets/covers/" + option.dataset.cover;
    songTitle.textContent = option.textContent;
    audio.play();
    playBtn.textContent = "⏸";
}

// Play / Pausa
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶️";
    }
});

// Volumen
volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

// Canción siguiente
nextBtn.addEventListener("click", () => {
    currentSong = (currentSong + 1) % options.length;
    loadSong(currentSong);
});

// Canción anterior
prevBtn.addEventListener("click", () => {
    currentSong = (currentSong - 1 + options.length) % options.length;
    loadSong(currentSong);
});

// Desde selector
selector.addEventListener("change", () => {
    currentSong = selector.selectedIndex;
    loadSong(currentSong);
});
