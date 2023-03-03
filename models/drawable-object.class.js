class DrawableObject {
    img;
    imgCache = {};
    currentImg = 0;
    otherDirection = false;
    x = 150;
    y = 150;
    height = 150;
    width = 150;

    xCollidingFactor = 0.01;    // offset for collision detection
    yCollidingFactor = 0.01;
    widthCollidingFactor = 1;
    heightCollidingFactor = 1;

    constructor() {
     
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
     }
  
     loadImages(arr) {
        arr.forEach((path) => {
           let img = new Image();
           img.src = path;
           this.imgCache[path] = img;
        });
     }
     
     animate(IMAGES) {

        let i = this.currentImg % IMAGES.length;
        let path = IMAGES[i];
        this.img = this.imgCache[path];
  
        this.currentImg++;
     }
  
     animateSingleTurn(IMAGES, t) {
        clearInterval(this.sharkieIntervall);
        this.currentImg = 0;
  
        let currentIntervall = setInterval(() => {
           this.movable = false;
  
           let i = this.currentImg % IMAGES.length;
           let path = IMAGES[i];
           this.img = this.imgCache[path];
           this.currentImg++;
  
           if (this.currentImg == IMAGES.length) { //start animateSharkie() if animateSingleTurn() showed animation one time
              clearInterval(currentIntervall);
              this.restartAnimation();
           }
        }, t);
     }
}