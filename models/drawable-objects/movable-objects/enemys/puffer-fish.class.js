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

    IMAGES_DEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png'
    ];

    speed = 0.5 + Math.random() * 1.5;
    FishAnimationIntervall;

    xCollidingFactor = 0.05;    // offset for collision detection
    yCollidingFactor = 0.1;
    widthCollidingFactor = 0.75;
    heightCollidingFactor = 0.60;

    constructor() {
        super().loadImage('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.loadImages(this.IMAGES_ANIMATION);
        this.loadImages(this.IMAGES_TRANSFORMATION);
        this.loadImages(this.IMAGES_BUBBLE_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.swim();
        this.animatePufferFish(100 / this.speed);
    }

    animatePufferFish(t) {
        this.FishAnimationIntervall = setInterval(() => {
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
        this.transformation = true;
        this.resetTrasformation();

        if ((new Date().getTime() - this.lastHit) >= 3000 || this.lastHit == 0) {
            world.sharkie.hit(20);
            this.hitPufferFishAudio.play();
            world.sharkie.hurtAnimation(this);
            this.lastHit = new Date().getTime();
        }
    }

    hitBySharkie() {
        clearInterval(this.FishAnimationIntervall);
        this.energy = 0;
        setTimeout(() => {
            let path = this.IMAGES_DEAD[this.fishType - 1]
            this.img = this.imgCache[path];
            this.hitAnimation();
        }, 200);
    }

    hitAnimation() {
      
        let hitAniIntervall = setInterval(() => {
            if (this.y > -10) {
                this.y -= 2;
                console.log(this.y);
            } else {
                clearInterval(hitAniIntervall);
            }
        })
    }
}