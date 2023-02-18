class Coin extends StaticObjects {
    width = 30;
    height = 30;

    IMAGES_ANIMATION = [
        './img/4. Marcadores/1. Coins/1.png',
        './img/4. Marcadores/1. Coins/2.png',
        './img/4. Marcadores/1. Coins/3.png',
        './img/4. Marcadores/1. Coins/4.png'
    ];


    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_ANIMATION);
        this.animate(200);
        this.setY();
    }

    setY() {
        this.y = Math.random() * 450;
    }

}