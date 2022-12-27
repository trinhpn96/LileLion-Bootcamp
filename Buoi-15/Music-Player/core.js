// NEW METHODS:
// - durationupdate / timeupdate
// - currentTime
// -clientWidth = content + padding

let musicContainer = document.getElementById("music-container");
let playBtn = document.getElementById("play");
let audio = document.getElementById("audio");
let title = document.getElementById("tilte");
let cover = document.getElementById("cover");

// 1. RENDER SONG:
//List
let songs = ["How You Like That", "Kill This Love", "SOLO", "WHISTLE"];
//index
let songIndex = 3;

//function loadsong
loadSong(songs[songIndex]);
function loadSong(song) {
  title.innerText = song;
  cover.src = `./music/image/${song}.jpeg`;
  audio.src = `./music/music/${song}.mp3`;
}

// 2. PLAY & PAUSE SONG:
// play Song function
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fa-solid").classList.remove("fa-play");
  playBtn.querySelector("i.fa-solid").classList.add("fa-pause");

  audio.play();
}

// pause Song function
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fa-solid").classList.remove("fa-pause");
  playBtn.querySelector("i.fa-solid").classList.add("fa-play");

  audio.pause();
}

//add event to playButton
playBtn.addEventListener("click", playOrPause);
function playOrPause(event) {
  const isPlaying = musicContainer.classList.contains("play"); //-> return Boolean result
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

window.addEventListener("keydown", (event) => {
  let isPlaying = musicContainer.classList.contains("play");
  if (event.code === "Space") {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  }
  console.log(event);
});

// 3.PREVIOUS & NEXT SONG
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

// previous song function
prevBtn.addEventListener("click", playPrevSong);
function playPrevSong(event) {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}

// next song function
nextBtn.addEventListener("click", playNextSong);
function playNextSong(event) {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// 4. SONG PROGRESS
let progress = document.getElementById("progress");
let progressContainer = document.getElementById("progress-container");

// add event timeupdate
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", playNextSong);
// function update %:
function updateProgress(event) {
  // console.log(event);
  let currentTime = event.srcElement.currentTime;
  let duration = event.srcElement.duration;
  // console.log(currentTime,duration);
  let progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// set progress
function setProgress(event) {
  let width = this.clientWidth;
  // console.log(width);
  console.log(event);
  let clickX = event.offsetX;

  let duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

progressContainer.addEventListener("click", setProgress);
