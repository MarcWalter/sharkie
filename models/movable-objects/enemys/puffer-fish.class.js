class PufferFish extends Enemy {
    height = 60;
    width = 60;
    yMove = 0;
    transformation = false;
    i = 1;
    fishType = 1 + Math.round(Math.random() * 2);
    hitPufferFishAudio = new Audio('./audio/damage-1.mp3');


    IMAGES_ANIMATION = [
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.fishType}.swim1.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.fishType}.swim2.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.fishType}.swim3.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.fishType}.swim4.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.fishType}.swim5.png`
    ];

    IMAGES_TRANSFORMATION = [
        `img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${this.fishType}.transition1.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${this.fishType}.transition2.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${this.fishType}.transition3.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${this.fishType}.transition4.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${this.fishType}.transition5.png`,
    ];

    IMAGES_BUBBLE_SWIM = [
        `img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${this.fishType}.bubbleswim1.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${this.fishType}.bubbleswim2.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${this.fishType}.bubbleswim3.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${this.fishType}.bubbleswim4.png`,
        `img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${this.fishType}.bubbleswim5.png`,
    ];

    speed = 0.5 + Math.random() * 1.5;

    xCollidingFactor = 0.05;    // offset for collision detection
    yCollidingFactor = 0.01;
    widthCollidingFactor = 0.85;
    heightCollidingFactor = 0.85;

    constructor() {
        super().loadImage('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.loadImages(this.IMAGES_ANIMATION);
        this.loadImages(this.IMAGES_TRANSFORMATION);
        this.loadImages(this.IMAGES_BUBBLE_SWIM);
        this.swim();
        this.animatePufferFish(100 / this.speed);
    }

    animatePufferFish(t) {
        setInterval(() => {
            if (this.transformation && this.i <= 5) {
                this.img = this.imgCache[`img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${this.fishType}.transition${this.i}.png`];
                this.i++
            }
            else if (this.transformation) {
                this.animate(this.IMAGES_BUBBLE_SWIM);
            }
            else if (this.transformation == false && this.i > 1) {
                this.i = this.i - 1;
                this.img = this.imgCache[`img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${this.fishType}.transition${this.i}.png`];
            }
            else {
                this.animate(this.IMAGES_ANIMATION);
            }
        }, t);
    }

    resetTrasformation() {
        setTimeout(() => {
            this.transformation = false;
        }, 5000);
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

    hitSharkie() {
        //  world.sharkie.hit(20);
         this.transformation = true;
         this.resetTrasformation();
         this.hitPufferFishAudio.play();
    }

}