class Poison extends StaticObjects {
    width = 40;
    height = 50;

    xCollidingFactor = 0.2;    // offset for collision detection
    yCollidingFactor = 0.4;
    widthCollidingFactor = 0.6;
    heightCollidingFactor = 0.5;

    collectPoisonAudio = new Audio('./audio/get-item-4.mp3');

    IMAGES_ANIMATION = [
        './img/4. Marcadores/Posión/Animada/1.png',
        './img/4. Marcadores/Posión/Animada/2.png',
        './img/4. Marcadores/Posión/Animada/3.png',
        './img/4. Marcadores/Posión/Animada/4.png',
        './img/4. Marcadores/Posión/Animada/5.png',
        './img/4. Marcadores/Posión/Animada/6.png',
        './img/4. Marcadores/Posión/Animada/7.png',
        './img/4. Marcadores/Posión/Animada/8.png'
    ];

    constructor() {
        super();
        this.loadImage('./img/4. Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_ANIMATION);
        this.animateStaticObject(100);
        this.setY();
    }

    setY() {
        this.y = 350 + Math.random() * 90;
    }

    collect() {
        if (world.sharkie.poison < 5) {
            this.setX();
            world.sharkie.poison += 1;
            this.collectPoisonAudio.play();
        }
    }
}