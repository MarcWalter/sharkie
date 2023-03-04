let canvas;
let world;
let keyboard = new Keyboard();
let backgroundPosition = 0;
let xPositionSharky = 150;
let yPositionSharky = 150;
let sharkieIntervalls = [];
let endBossIntervalls = [];
let intervalIds = [];


let music = new Audio('audio/music-1.mp3');
let ocean1 = new Audio('audio/ocean-1.mp3');
let ocean2 = new Audio('audio/ocean-2.mp3');
let ocean3 = new Audio('audio/ocean-3.mp3');
let ocean4 = new Audio('audio/ocean-4.mp3');
let ocean5 = new Audio('audio/ocean-5.mp3');
let underwater = new Audio('audio/underwater.mp3');

function init() {
    initSound();
}

function startGame() {
    stopIntervals(sharkieIntervalls);
    stopIntervals(endBossIntervalls);
    stopIntervals(intervalIds);
    canvas = document.getElementById('canvas');
    initLevel1();
    world = new World(canvas, keyboard);
    removeCards();
}

function removeCards() {
    document.getElementById('victory-btn').classList.add('d-none');
    document.getElementById('game-over-btn').classList.add('d-none');
    document.getElementById('intro').classList.add('d-none');

    setTimeout(() => {
        document.getElementById('victory-card').classList.add('d-none');
        document.getElementById('game-over-card').classList.add('d-none');
    }, 3000);
}

function stopGame() {
    stopIntervals(sharkieIntervalls);
    stopIntervals(endBossIntervalls);
    stopIntervals(intervalIds);
}

function initSound() {
    music.loop = true;
    music.volume = 0.2;

    ocean1.loop = true;
    ocean1.volume = 0.1;

    ocean2.loop = true;
    ocean2.volume = 0.5;

    ocean3.loop = true;
    ocean3.volume = 1;

    ocean4.loop = true;
    ocean4.volume = 0.3;

    ocean5.loop = true;
    ocean5.volume = 0.3;

    underwater.loop = true;
    underwater.volume = 1;
}

function playSound() {
    music.play();
    ocean1.play();
    ocean2.play();
    ocean3.play();
    ocean4.play();
    ocean5.play();
    underwater.play();
    document.getElementById('sound-btn').setAttribute("onclick", "pauseSound()");
    document.getElementById('sound-btn-img').src = "./img/mute-xxl.png";
}

function pauseSound() {
    music.pause();
    ocean1.pause();
    ocean2.pause();
    ocean3.pause();
    ocean4.pause();
    ocean5.pause();
    underwater.pause();
    document.getElementById('sound-btn').setAttribute("onclick", "playSound()");
    document.getElementById('sound-btn-img').src = "./img/volume-up-2-xxl.png";
}

// music.addEventListener('timeupdate', function(){
//     let buffer = 1
//     if(this.currentTime > this.duration - buffer){
//         this.currentTime = 0
//         this.play()
//     }
// });

window.addEventListener('onkeydown', (event) => {
    console.log(event);
})

function stoppableSharkieInterval(fn, intervall) {
    let id = setInterval(fn, intervall);
    sharkieIntervalls.push(id);
}

function stoppableEndBossInterval(fn, intervall) {
    let id = setInterval(fn, intervall);
    endBossIntervalls.push(id);
}

function stoppableInterval(fn, intervall) {
    let id = setInterval(fn, intervall);
    intervalIds.push(id);
}

function stopIntervals(intervallIdArray) {
    intervallIdArray.forEach(clearInterval);
}

function fullscreen() {
    let canvas = document.getElementById('canvas');
    openFullscreen(canvas)
}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
