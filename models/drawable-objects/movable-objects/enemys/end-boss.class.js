class EndBoss extends MovableObject {

    x = 500;
    y = -500;
    height = 300;
    width = 300;
    lastHit = 0;

    xCollidingFactor = 0.06;    // offset for collision detection
    yCollidingFactor = 0.5;
    widthCollidingFactor = 0.8;
    heightCollidingFactor = 0.3;

    animationCounter = 0;
    lastAttack = 0;
    hitByPoisendBubble = false;

    START_ANIMATION = [
        './img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    IMAGES_ANIMATION = [
        `img/2.Enemy/3 Final Enemy/2.floating/1.png`,
        `img/2.Enemy/3 Final Enemy/2.floating/2.png`,
        `img/2.Enemy/3 Final Enemy/2.floating/3.png`,
        `img/2.Enemy/3 Final Enemy/2.floating/4.png`,
        `img/2.Enemy/3 Final Enemy/2.floating/5.png`,
        `img/2.Enemy/3 Final Enemy/2.floating/6.png`,
        `img/2.Enemy/3 Final Enemy/2.floating/7.png`,
        `img/2.Enemy/3 Final Enemy/2.floating/8.png`,
        `img/2.Enemy/3 Final Enemy/2.floating/9.png`,
        `img/2.Enemy/3 Final Enemy/2.floating/10.png`,
        `img/2.Enemy/3 Final Enemy/2.floating/11.png`,
        `img/2.Enemy/3 Final Enemy/2.floating/12.png`,
        `img/2.Enemy/3 Final Enemy/2.floating/13.png`

    ];

    IMAGES_ATTACK = [
        './img/2.Enemy/3 Final Enemy/Attack/1.png',
        './img/2.Enemy/3 Final Enemy/Attack/2.png',
        './img/2.Enemy/3 Final Enemy/Attack/3.png',
        './img/2.Enemy/3 Final Enemy/Attack/4.png',
        './img/2.Enemy/3 Final Enemy/Attack/5.png',
        './img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];

    attackAudio = new Audio('./audio/monster-attack-1.mp3');

    constructor() {
        super().loadImage('./img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
        this.loadImages(this.START_ANIMATION);
        this.loadImages(this.IMAGES_ANIMATION);
        this.endBossAppears();
    }

    endBossAppears() {
        setTimeout(() => {
            this.y = 0;
            this.x = xPositionSharky + 650;
            if (world.sharkie.otherDirection == true) {
                this.x = xPositionSharky + 250;
            }
            this.setXPositionEndBoss();
            this.setYPositionEndBoss();
            this.animateEndBoss();
        }, 10000);
    }

    animateEndBoss() {
        setInterval(() => {
            if (this.animationCounter < 10) {
                this.img.src = this.START_ANIMATION[this.animationCounter];
            }
            else if (this.isDead()) {
                console.log('EndBoss is dead');
            }
            else if (this.hitByPoisendBubble) {
                this.endBossGetHit();
            }
            else if (this.x <= xPositionSharky + 150 && !world.sharkie.isDead()) {
                this.endBossAttack();
            }
            else {
                this.animate(this.IMAGES_ANIMATION);
            }
            this.animationCounter++;
        }, 200);
    }

    hitSharkie() {
        if ((new Date().getTime() - this.lastHit) >= 3000 || this.lastHit == 0) {
            world.sharkie.hit(100);
            this.lastHit = new Date().getTime();
        }
    }

    hitBySharkie() {
        this.hitSharkie();
    }

    setXPositionEndBoss() {
        setInterval(() => {
            if (this.x >= xPositionSharky + 150) {
                this.x -= 5;
            }
        }, 50);
    }

    setYPositionEndBoss() {
        setInterval(() => {
            if (this.y >= yPositionSharky - 100 && !world.sharkie.isDead()) {
                if (this.x >= xPositionSharky + 200) {
                    this.y -= 4;
                } else {
                    this.y -= 15;
                }
            }

            if (this.y <= yPositionSharky - 100 && !world.sharkie.isDead()) {
                if (this.x >= xPositionSharky + 200) {
                    this.y += 4;
                } else {
                    this.y += 15;
                }
            }
        }, 50);
    }

    endBossAttack() {
        if (this.lastAttack == 0 || (this.animationCounter - this.lastAttack) >= 6) {
            this.lastAttack = this.animationCounter;
            this.attackAudio.play();
        }
        this.img.src = this.IMAGES_ATTACK[this.animationCounter - this.lastAttack];
        this.x -= 20;
    }

    hitByBubble() {
        if (world.sharkie.poison >= 5) {
            this.hitByPoisendBubble = true;
        }
    }

    endBossGetHit() {
        if ((new Date().getTime() - this.lastHit > 3000) || this.lastHit == 0) {
            this.hitByPoisendBubble = false;
            this.energy -= 100;
        }


    }

}