class Sharkie extends MovableObject {

    IMAGES_ANIMATION = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ];

    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];

    world;
    x_start = 150;

    constructor() {
        super().loadImage('./img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_ANIMATION);
        this.loadImages(this.IMAGES_SWIMMING);

        this.x = this.x_start;

        this.animateSharkie(200);
        this.swimAnimation(8)
        this.moveSharkieRight(50); //2.5
        this.moveSharkieLeft(50);
        this.moveSharkieUp(2.5);
        this.moveSharkieDown(2.5);
    }

    animateSharkie(t) {
        setInterval(() => {
            if (this.world.keyboard.D == false && this.world.keyboard.A == false) {

                let i = this.currentImg % this.IMAGES_ANIMATION.length;
                let path = this.IMAGES_ANIMATION[i];
                this.img = this.imgCache[path];

                this.currentImg++;
            }

        }, t)
    }

    swimAnimation(speed) {
        setInterval(() => {
            if (this.world.keyboard.D || this.world.keyboard.A || this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let i = this.currentImg % this.IMAGES_SWIMMING.length;
                let path = this.IMAGES_SWIMMING[i];
                this.img = this.imgCache[path];

                this.currentImg++;
            }
            backgroundPosition = Math.round(this.x / (720 * 2)); //move background position
            xPositionSharky = this.x;
        }, 1000 / speed)
    }

    moveSharkieRight(speed) {
        setInterval(() => {
            if (this.world.keyboard.D || this.world.keyboard.RIGHT) {
                this.x += speed;
                this.otherDirection = false;
                this.world.camera_x = this.x_start - this.x;
            }
        }, 1000 / 60)
    }

    moveSharkieLeft(speed) {
        setInterval(() => {
            if (this.world.keyboard.A || this.world.keyboard.LEFT) {
                this.x -= speed;
                this.otherDirection = true;
                this.world.camera_x = this.x_start - this.x;
            }
        }, 1000 / 60)
    }

    moveSharkieUp(speed) {
        
            setInterval(() => {
                if ((this.world.keyboard.W || this.world.keyboard.UP) && this.y > -100) {
                    this.y -= speed;
                }
            }, 1000 / 60)
                
    }

    moveSharkieDown(speed) {
        setInterval(() => {
            if ((this.world.keyboard.S || this.world.keyboard.DOWN) && this.y < 355) {
                this.y += speed;
            }
        }, 1000 / 60)
    }
}