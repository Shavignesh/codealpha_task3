const songs = [
  { title: "Song 1", file: "song1.mp3" },
  { title: "Song 2", file: "song2.mp3" },
  { title: "Song 3", file: "song3.mp3" }
];

let currentSongIndex = 0;

const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const songTitle = document.getElementById("songTitle");

function loadSong(index) {
  songTitle.textContent = songs[index].title;
  audioPlayer.src = songs[index].file;
  audioPlayer.load();
}

function playSong() {
  audioPlayer.play();
  playPauseBtn.textContent = "Pause";
}

function pauseSong() {
  audioPlayer.pause();
  playPauseBtn.textContent = "Play";
}

playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

// Load the first song initially
loadSong(currentSongIndex);
