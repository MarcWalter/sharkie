class Bubble extends MovableObject {
    x = 100;
    y = 400;
    size = 25;
    speedY = 2;
    speedX = 2;

    IMAGES = [
        'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
    ];

    constructor() {
        super();
        this.loadImage(this.IMAGES[0]);
        this.height = this.size;
        this.width = this.size;
        this.setPosition();
        this.applyBuoyancy();
    }

    setPosition() {
        this.x = xPositionSharky + 120;
        this.y = yPositionSharky + 70;
    }

    applyBuoyancy() {
        setInterval(() => {
            if (this.y > 0 || this.speedY > 0) {
                this.y -= this.speedY;
            }
            if (this.x > 0 || this.speedX > 0) {
                this.x += this.speedX;
            }
            if (this.speedX > 0) {
                this.speedX -= 0.01;
            }
        }, 10);
    }
}