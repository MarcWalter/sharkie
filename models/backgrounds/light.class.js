class Light extends Background {

    imgPath = './img/3. Background/Layers/1. Light/1.png';

    constructor() {
        super().loadImage(this.imgPath);
        this.setX();
    }

    setX() {
        setInterval(() => {
            this.x = xPositionSharky - 500;
        }, 1000/60);
    }
}