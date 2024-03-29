class JellyFish extends Enemy {
    height = 60;
    width = 60;
    yMove = 0;
    fishType = Math.round(Math.random() * 1);
    fishTypeArray;
    animationSpeed = 150 + Math.random() * 100;
    IMAGES_ANIMATION;
    IMAGE_PATH;

    xCollidingFactor = 0.01;    // offset for collision detection
    yCollidingFactor = 0.01;
    widthCollidingFactor = 1;
    heightCollidingFactor = 1;

    speed = + Math.random() * 0.5;

    constructor() {
        super();
        this.swim();
    }

    animateJellyFish(t) {
        stoppableInterval(() => {
            if (!this.isDead()) {
                this.animate(this.IMAGES_ANIMATION);
            }
        }, t);
    }

    animateDeadJellyFish() {
        stoppableInterval(() => {
            if (this.isDead() && this.y >= -15) {
                this.animate(this.IMAGES_DEAD);
                this.y += -7;
            }
        }, 100);
    }

    swim() {
        this.moveLeft(this.speed);
        this.moveY(0.01);
    }

    hitSharkie() {
        if ((new Date().getTime() - this.lastHit) >= 3000 || this.lastHit == 0) {
            world.sharkie.hit(20);
            this.hitJellyFishAudio.play();
            world.sharkie.hurtAnimation(this);
            this.lastHit = new Date().getTime();
        }
    }

    hitBySharkie() {
        this.hitSharkie();
    }

    hitByBubble() {
        this.energy = 0;
    }
}