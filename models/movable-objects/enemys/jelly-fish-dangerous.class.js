class JellyFishDangerous extends Enemy {
    height = 70;
    width = 70;
    yMove = 0;
    fishType = Math.round(Math.random() * 1);
    fishTypeArray = ['Green', 'Pink'];
    animationSpeed = 150 + Math.random() * 100;

    IMAGES_ANIMATION = [
        `./img/2.Enemy/2 Jelly fish/Súper dangerous/${this.fishTypeArray[this.fishType]} 1.png`,
        `./img/2.Enemy/2 Jelly fish/Súper dangerous/${this.fishTypeArray[this.fishType]} 2.png`,
        `./img/2.Enemy/2 Jelly fish/Súper dangerous/${this.fishTypeArray[this.fishType]} 3.png`,
        `./img/2.Enemy/2 Jelly fish/Súper dangerous/${this.fishTypeArray[this.fishType]} 4.png`       
    ];

    speed = + Math.random() * 0.5;

    constructor() {
        super().loadImage(`./img/2.Enemy/2 Jelly fish/Súper dangerous/${this.fishTypeArray[this.fishType]} 1.png`);
        this.loadImages(this.IMAGES_ANIMATION);
        this.swim();
        this.animate(this.animationSpeed);
    }

    swim() {
        this.moveLeft(this.speed);
        this.moveY(0.01);
    }

}