const prevBtn = document.querySelectorAll(".player-controls button")[0];
const nextBtn = document.querySelectorAll(".player-controls button")[2];
const playBtn = document.querySelectorAll(".player-controls button")[1];

const playList = document.querySelectorAll(".play-list li");
let audios = [];
let currentSongIndex = 0;


function collectSongNames() {
    let songNames = [];
    playList.forEach(song => {
        songNames.push(song.textContent);
    });
    return songNames;
}

async function generateAudio() {
    await collectSongNames().forEach(songName => {
        let audio = new Audio(`assets/sounds/${songName}.mp3`);
        audio.addEventListener('ended', playNextSong);
        audios.push(audio);
    });
}

function increaseSongIndex() {
    if (currentSongIndex === audios.length - 1) {
        currentSongIndex = 0;
    } else {
        currentSongIndex++;
    }
}

function decreaseSongIndex() {
    if (currentSongIndex === 0) {
        currentSongIndex = audios.length - 1;
    } else {
        currentSongIndex--;
    }
}

function playNextSong() {
    playList[currentSongIndex].classList.remove("item-active");
    audios[currentSongIndex].pause();
    increaseSongIndex()
    playList[currentSongIndex].classList.add("item-active");
    audios[currentSongIndex].play();
}

function playPrevSong() {
    playList[currentSongIndex].classList.remove("item-active");
    audios[currentSongIndex].pause();
    decreaseSongIndex()
    playList[currentSongIndex].classList.add("item-active");
    audios[currentSongIndex].play();
}

function togglePlay() {
    if (audios[currentSongIndex].paused) {
        playList[currentSongIndex].classList.add("item-active");
        audios[currentSongIndex].play();
        playBtn.classList.add("pause");
    } else {
        audios[currentSongIndex].pause();
        playBtn.classList.remove("pause");
    }
}

async function initPlayer() {
    await generateAudio();
    prevBtn.addEventListener('click', playPrevSong);
    nextBtn.addEventListener('click', playNextSong);
    playBtn.addEventListener('click', togglePlay);
    playBtn.addEventListener('click', togglePlay);
}

export { initPlayer };