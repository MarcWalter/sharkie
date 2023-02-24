class World {
    sharkie = new Sharkie();

    level = level1;

    canvas;
    ctx;
    keyboard;
    camera_x = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.sharkie.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgrounds);
        this.addToMap(this.sharkie);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.staticObjects);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });

    }

    addToMap(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }

        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        this.drawFrame(object);
        // this.setCollidingPosition(object); // use instead of function below if check collisionwith frame

        if (object.otherDirection) {
            this.flipImageBack(object);
        }
        this.setCollidingPosition(object); 
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        })
    }

    setBackgrounds() {
        setInterval(() => {
            if (this.sharkie.x > 350) {
                this.backgrounds[0].x = 719;
            }
        }, 200);
    }

    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    flipImageBack(object) {
        object.x = object.x * -1;
        this.ctx.restore();
    }

    drawFrame(object) {
        if (object instanceof MovableObject || object instanceof StaticObjects) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '2';
            this.ctx.strokeStyle = 'blue';
            this.ctx.rect(object.xColliding, object.yColliding, object.widthColliding, object.heightColliding);
            this.ctx.stroke();
        }
    }

    setCollidingPosition(object) {
        // object.xColliding = object.x;    // offset for collision detection
        // object.yColliding = object.y ;
        // object.widthColliding = object.width;
        // object.heightColliding = object.height;
  
        object.xColliding = object.x + object.width * object.xCollidingFactor;    // offset for collision detection
        object.yColliding = object.y + object.height * object.yCollidingFactor;
        object.widthColliding = object.width * object.widthCollidingFactor;
        object.heightColliding = object.height * object.heightCollidingFactor;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.sharkie.isColliding(enemy)) {
                    this.sharkie.hit();
                }
            });
            this.level.staticObjects.forEach((object) => {
                if (this.sharkie.isColliding(object)) {
                    this.collisionWithStaticObject(object);
                }
            });
        }, 200);
    }

    collisionWithStaticObject(object) {
        if(object instanceof Coin) {
            console.log('coin collision');
        }
    }
    
}