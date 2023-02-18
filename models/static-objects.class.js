class StaticObjects {
    x = 350;
    y = 300;
    height = 70;
    width = 70;
    imgCache = {};
    currentImg = 0;
    otherDirection = false;

    constructor() {
        this.setX();
        this.respornIfFarAway();
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

    animate(t) {
        setInterval(() => {
            let i = this.currentImg % this.IMAGES_ANIMATION.length;
            let path = this.IMAGES_ANIMATION[i];
            this.img = this.imgCache[path];

            this.currentImg++;
        }, t)
    }

    // setX() {
    //     let position =  Math.random() * 7200 * 3 - 4320;
    //     if (position < 100 || position > 500) { // avoid sharkie
    //         this.x = position;
    //     }
    //     else {
    //         this.x = position - 600;
    //     }
    // }

    setX() {
        let position = xPositionSharky + Math.random() * 7200 * 3 - 4320;
        if (position < xPositionSharky - 350 || position > xPositionSharky + 750) { // avoid sharkie
           this.x = position;
        }
        else {
           this.x = position - 1000;
        }
     }

    respornIfFarAway() {
        setInterval(() => {
            if (this.x < xPositionSharky - 2880 || this.x > xPositionSharky + 4320) {
                this.setX();
            }
        }, 300);
    }
}