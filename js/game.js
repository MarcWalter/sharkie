let canvas;
let world;
let keyboard = new Keyboard();
let backgroundPosition = 0;
let xPositionSharky = 150;
let yPositionSharky = 150;


let music = new Audio('audio/music-1.mp3');
let ocean1 = new Audio('audio/ocean-1.mp3');
let ocean2 = new Audio('audio/ocean-2.mp3');
let ocean3 = new Audio('audio/ocean-3.mp3');
let ocean4 = new Audio('audio/ocean-4.mp3');
let ocean5 = new Audio('audio/ocean-5.mp3');
let underwater = new Audio('audio/underwater.mp3');

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

}

function playSound() {
    music.loop = true;
    music.play();
    music.volume = 0.05;

    ocean1.loop = true;
    ocean1.play();
    ocean1.volume = 0.1;

    ocean2.loop = true;
    ocean2.play();
    ocean2.volume = 0.5;

    ocean3.loop = true;
    ocean3.play();
    ocean3.volume = 1;

    ocean4.loop = true;
    ocean4.play();
    ocean4.volume = 0.3;

    ocean5.loop = true;
    ocean5.play();
    ocean5.volume = 0.3;

    underwater.loop = true;
    underwater.play();
    underwater.volume = 1;
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