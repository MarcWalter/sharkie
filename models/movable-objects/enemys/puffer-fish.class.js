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

    constructor() {
        super().loadImage('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.loadImages(this.IMAGES_ANIMATION);
        this.swim();
        this.animate(100 / this.speed);
    }

    swim() {
        this.moveLeft(this.speed);
        this.moveY();
    }

    changeY() {
        setInterval(() => {
            let n = Math.random();

            if (this.y > 400) { //fish cannot reach bottom
                this.y = 399;
                this.yMove = 0;
            }

            if (n < 0.5) {
                this.yMove += Math.random() * 0.1;
            }
            else {
                this.yMove -= Math.random() * 0.1;
            }

        }, 1000 / 60)
    }
}