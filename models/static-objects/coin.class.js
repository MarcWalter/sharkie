class Coin extends StaticObjects {
    width = 30;
    height = 30;

    IMAGES_ANIMATION = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'               
    ];


    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_ANIMATION);
        this.animate(200);
        this.setX();
    }

    setX() {
        this.y = Math.random() * 450;
        this.x = Math.random() * 720 * 3 - 900;
    }

}