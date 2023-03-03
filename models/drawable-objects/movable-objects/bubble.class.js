class Bubble extends MovableObject {
    x = 100;
    y = 400;
    size = 25;
    speedY = 2;
    speedX = 3;

    xCollidingFactor = 0.01;    // offset for collision detection
    yCollidingFactor = 0.01;
    widthCollidingFactor = 1;
    heightCollidingFactor = 1;

    IMAGES = [
        'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
    ];

    constructor() {
        super();
        this.loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.chooseBubbleSort();
        this.height = this.size;
        this.width = this.size;
        this.setParameter();
        this.applyPhysics();
        world.sharkie.energy -= 5;
        this.bubbleDestroy();
    }

    chooseBubbleSort() {
        setInterval(() => {
            if (world.sharkie.poison >= 5) {
                this.img = this.imgCache['img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'];
            } else {
                this.img = this.imgCache['img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'];
            }
        }, 50);
    }

    setParameter() {
        if (world.sharkie.otherDirection == false) {
            this.x = xPositionSharky + 125;
            this.y = yPositionSharky + 70;
        }
        if (world.sharkie.otherDirection == true) {
            this.x = xPositionSharky;
            this.y = yPositionSharky + 70;
            this.speedX = this.speedX * (-1);
        }

    }

    applyPhysics() {
        setInterval(() => {
            if (this.y > 0 || this.speedY > 0) { //appy bouyancy
                this.y -= this.speedY;
            }
            if (this.speedX != 0) {
                this.x += this.speedX;
            }
            if (this.speedX > 0) { //apply friction
                this.speedX -= 0.02;
            }
            if (this.speedX < 0) { //apply friction
                this.speedX += 0.02;
            }
        }, 10);
    }

    bubbleDestroy() {
        setInterval(() => {
            world.level.enemies.forEach(enemy => {
                if (this.isColliding(enemy)) {
                        this.y = -100;
                }
            });

        }, 100);
    }
}