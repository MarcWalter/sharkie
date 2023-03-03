class World {
    sharkie = new Sharkie();

    level = level1;

    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarHealth = new StatusBarHealth();
    statusBarCoins = new StatusBarCoins();
    statusBarPoison = new StatusBarPoison();
    // statusCoins = new StatusCoins();
    // statusPoison = new StatusPoison();
    bubbles = [];
    lastBubble = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.sharkie.world = this;
        this.statusBarHealth.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgrounds);
        this.addToMap(this.sharkie);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.staticObjects);
        this.addObjectsToMap(this.bubbles);

        this.ctx.translate(-this.camera_x, 0);
        // ------ Space for fixed objexts --------------------------------
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarPoison);
        this.ctx.translate(this.camera_x, 0);

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
        try {
            this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);

        } catch (error) {
            console.log(error);
            console.log(object);
        }
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
        object.xColliding = object.x + object.width * object.xCollidingFactor;    // offset for collision detection
        object.yColliding = object.y + object.height * object.yCollidingFactor;
        object.widthColliding = object.width * object.widthCollidingFactor;
        object.heightColliding = object.height * object.heightCollidingFactor;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.createBubble();
        }, 50);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.sharkie.isColliding(enemy) && !this.sharkie.isDead()) {
                enemy.hitSharkie();
            }
        });
        this.level.staticObjects.forEach((object) => {
            if (this.sharkie.isColliding(object) && (object instanceof Coin || object instanceof Poison) && !this.sharkie.isDead()) {
                object.collect();
            }
        });
        this.bubbles.forEach(bubble => {
            this.level.enemies.forEach(enemy => {
                if (enemy instanceof JellyFish && enemy.isColliding(bubble)) {
                    enemy.hitByBubble();
                }
            });

        });
    }

    createBubble() {
        if (this.keyboard.J && (this.lastBubble == 0 || ((new Date().getTime() - this.lastBubble) > 1000))) {
            this.lastBubble = new Date().getTime();
            console.log(this.lastBubble);
            setTimeout(() => {
                let bubble = new Bubble();
                this.bubbles.push(bubble)
            }, 800);
        }
    }
}