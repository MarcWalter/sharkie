let canvas;
let ctx;
let character = new Sharkie();

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    console.log('My character is', character);
    
}