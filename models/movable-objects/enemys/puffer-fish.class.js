class PufferFish extends Enemy {
    height = 60;
    width = 60;
    yMove = 0;

    fishType = 1 + Math.round(Math.random() * 2);
    IMAGES_ANIMATION = [
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.fishType}.swim1.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.fishType}.swim2.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.fishType}.swim3.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.fishType}.swim4.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.fishType}.swim5.png`
    ];

    speed = 0.5 + Math.random() * 1.5;

    xCollidingFactor = 0.05;    // offset for collision detection
    yCollidingFactor = 0.01;
    widthCollidingFactor = 0.85;
    heightCollidingFactor = 0.85;

    constructor() {
        super().loadImage('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.loadImages(this.IMAGES_ANIMATION);
        this.swim();
        this.animatePufferFish(this.IMAGES_ANIMATION, 100 / this.speed);
    }

    animatePufferFish(IMAGES, t) {
        setInterval(() => {
            this.animate(IMAGES);
        }, t);
    }

    swim() {
        this.moveY(0.1);

        if (Math.random() < 0.5) {
            this.moveLeft(this.speed);
        }
        else {
            this.moveRight(this.speed);
            this.otherDirection = true;
        }
    }

    
}