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
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
        'img/1.Sharkie/1.IDLE/1.png'
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

    IMAGES_POISONED = [
        './img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/6.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/7.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/8.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/9.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/10.png'
    ]

    IMAGES_ELECTRO_SHOCK = [
        './img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        './img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        './img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
        './img/1.Sharkie/5.Hurt/2.Electric shock/4.png',
        './img/1.Sharkie/5.Hurt/2.Electric shock/5.png',
        './img/1.Sharkie/5.Hurt/2.Electric shock/6.png',
    ];

    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00000.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00001.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00002.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00003.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00004.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00005.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00006.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00007.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00008.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png'
    ];

    coins = 0;
    poison = 0;

    world;
    x_start = 150;
    sharkieIntervall;
    movable = true;
    lastSharkieHit = 0;

    xCollidingFactor = 0.25;    // offset for collision detection
    yCollidingFactor = 0.53;
    widthCollidingFactor = 0.55;
    heightCollidingFactor = 0.2;

    xColliding = 999;
    yColliding = 999;

    dead = false;

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
        this.loadImages(this.IMAGES_POISONED);
        this.loadImages(this.IMAGES_ELECTRO_SHOCK);
        this.loadImages(this.IMAGES_DEAD);
    }

    animateSharkie() {
        this.sharkieIntervall = setInterval(() => {
            if (this.isDead()) {
                this.sharkieDeadAnimation();
            }
            else if (this.world.keyboard.SPACE) {
                this.finSlap();
            }
            else if (this.world.keyboard.J) {
                this.animateSingleTurn(this.IMAGES_BUBBEL, 100);
            }
            else if (this.world.keyboard.D == false && this.world.keyboard.A == false % !this.isDead()) {
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

    sharkieDeadAnimation() {
        if (this.dead == false) {
            clearInterval(this.sharkieIntervall);
            this.animateSingleTurn(this.IMAGES_DEAD, 100);
            setTimeout(() => {
                setInterval(() => {
                    if (this.y > -90) {
                        this.y -= 2;
                    }
                }, 200 / 60)
            }, 500);
        }
        this.dead = true;
    }

    updateSharkyPosition() {
        backgroundPosition = Math.round(this.x / (720 * 2)); //move background position
        xPositionSharky = this.x;
        yPositionSharky = this.y;
    }

    hurtAnimation(enemy) {
        if ((new Date().getTime() - this.lastSharkieHit) >= 3000 || this.lastSharkieHit == 0) {
            this.hurtAnimationByEnemyType(enemy);
            this.lastSharkieHit = new Date().getTime();
        }
    }

    hurtAnimationByEnemyType(enemy) {
        let i = 1;
        clearInterval(this.sharkieIntervall);
        this.movable = false;
        let hurtAnimationIntervall = setInterval(() => {
            if (enemy instanceof PufferFish && i <= 10) {
                this.img = this.imgCache[`./img/1.Sharkie/5.Hurt/1.Poisoned/${i}.png`];
                i++
            }

            if ((enemy instanceof JellyFishRegular || enemy instanceof JellyFishDangerous) && i <= 6) {
                this.img = this.imgCache[`./img/1.Sharkie/5.Hurt/2.Electric shock/${i}.png`];
                i++
            }

            else if ((enemy instanceof PufferFish && i >= 11) || ((enemy instanceof JellyFishRegular || enemy instanceof JellyFishDangerous) && i >= 7)) {
                clearInterval(hurtAnimationIntervall);
                this.restartAnimation();
                this.movable = true;
            }
        }, 200);
    }

    finSlap() {
        this.animateSingleTurn(this.IMAGES_FIN_SLAP, 50);
        this.checkNearPufferFish();
        this.energy -= 5;
    }

    checkNearPufferFish() {
        world.level.enemies.forEach(obj => {
            if (this.isNear(obj)) {
                console.log("Enemy hit");
                obj.hitBySharkie();
            }

        });

    }
}
