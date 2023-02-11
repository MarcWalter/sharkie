let canvas;
let world;
let keyboard = new Keyboard();
let backgroundPosition = 0;
let xPositionSharky;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

}

window.addEventListener('onkeydown', (event) => {
    console.log(event);
})