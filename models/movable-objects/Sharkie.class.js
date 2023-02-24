class Sharkie extends MovableObject {

    IMAGES_ANIMATION = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_BUBBEL = [
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];

    IMAGES_POISONED_BUBBEL = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
        'img/1.Sharkie/1.IDLE/1.png'
    ];

    IMAGES_FIN_SLAP = [
        './img/1.Sharkie/4.Attack/Fin slap/1.png',
        './img/1.Sharkie/4.Attack/Fin slap/2.png',
        './img/1.Sharkie/4.Attack/Fin slap/3.png',
        './img/1.Sharkie/4.Attack/Fin slap/4.png',
        './img/1.Sharkie/4.Attack/Fin slap/5.png',
        './img/1.Sharkie/4.Attack/Fin slap/6.png',
        './img/1.Sharkie/4.Attack/Fin slap/7.png',
        './img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];

    IMAGES_DEAD = [
        './img/1.Sharkie/6.dead/1.Poisoned/1.png',
        './img/1.Sharkie/6.dead/1.Poisoned/2.png',
        './img/1.Sharkie/6.dead/1.Poisoned/3.png',
        './img/1.Sharkie/6.dead/1.Poisoned/4.png',
        './img/1.Sharkie/6.dead/1.Poisoned/5.png',
        './img/1.Sharkie/6.dead/1.Poisoned/6.png',
        './img/1.Sharkie/6.dead/1.Poisoned/7.png',
        './img/1.Sharkie/6.dead/1.Poisoned/8.png',
        './img/1.Sharkie/6.dead/1.Poisoned/9.png',
        './img/1.Sharkie/6.dead/1.Poisoned/10.png',
        './img/1.Sharkie/6.dead/1.Poisoned/11.png',
        './img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];

    world;
    x_start = 150;
    sharkieIntervall;
    movable = true;

    xCollidingFactor = 0.2;    // offset for collision detection
    yCollidingFactor = 0.5;
    widthCollidingFactor = 0.6;
    heightCollidingFactor = 0.25;

    xColliding = 999;
    yColliding = 999;

    constructor() {
        super();

        this.x = this.x_start;
        this.loadAnimationImages();
        this.animateSharkie();
        this.moveSharkieRight(5); //2.5
        this.moveSharkieLeft(5);
        this.moveSharkieUp(5);
        this.moveSharkieDown(5);
    }

    importKeyboard() {
        setTimeout(() => {
            if (this.world.keyboard.D == true) {
                this.D = true;
            } else {
                this.D = true;
            }
        }, 200);
    }

    loadAnimationImages() {
        this.loadImage('./img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_ANIMATION);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_FIN_SLAP);
        this.loadImages(this.IMAGES_BUBBEL);
        this.loadImages(this.IMAGES_POISONED_BUBBEL);
        this.loadImages(this.IMAGES_DEAD);
    }

    animateSharkie() {
        this.sharkieIntervall = setInterval(() => {
            if (this.isDead()) {
                this.sharkieDeadAnimation();
            }
            else if (this.world.keyboard.SPACE) {
                this.animateSingleTurn(this.IMAGES_FIN_SLAP, 50);
            }
            else if (this.world.keyboard.J) {
                this.animateSingleTurn(this.IMAGES_POISONED_BUBBEL, 100);
            }
            else if (this.world.keyboard.D == false && this.world.keyboard.A == false) {
                this.animate(this.IMAGES_ANIMATION)
            }
            else if (this.world.keyboard.D || this.world.keyboard.A || this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.animate(this.IMAGES_SWIMMING);
            }

            this.updateSharkyPosition();
            this.movable = true;
        }, 80)
    }

    moveSharkieRight(speed) {
        setInterval(() => {
            if ((this.world.keyboard.D || this.world.keyboard.RIGHT) && this.movable) {
                this.x += speed;
                this.otherDirection = false;
                this.world.camera_x = this.x_start - this.x;
            }
        }, 1000 / 60)
    }

    moveSharkieLeft(speed) {
        setInterval(() => {
            if ((this.world.keyboard.A || this.world.keyboard.LEFT) && this.movable) {
                this.x -= speed;
                this.otherDirection = true;
                this.world.camera_x = this.x_start - this.x;
            }
        }, 1000 / 60)
    }

    moveSharkieUp(speed) {
        setInterval(() => {
            if (((this.world.keyboard.W || this.world.keyboard.UP) && this.y > -100 && this.movable)) {
                this.y -= speed;
            }
        }, 1000 / 60)

    }

    moveSharkieDown(speed) {
        setInterval(() => {
            if ((this.world.keyboard.S || this.world.keyboard.DOWN) && this.y < 355 && this.movable) {
                this.y += speed;
            }
        }, 1000 / 60)
    }

    isSwimming() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
    }

    isAttacking() {
        return this.world.keyboard.SPACE && this.world.endboss.firstContactWithEndboss;
    }

    sharkieDeadAnimation() {
        this.animateSingleTurn(this.IMAGES_DEAD, 100);
        setTimeout(() => {
            setInterval(() => {
                if (this.y > -50) {
                    this.y -= 2;
                }
            }, 200 / 60)
        }, 1500);
    }

    updateSharkyPosition() {
        backgroundPosition = Math.round(this.x / (720 * 2)); //move background position
        xPositionSharky = this.x;
    }
    
}
