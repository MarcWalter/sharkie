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
    bubbles = [];
    lastBubble = 0;
    gameEnd = false;

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

        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);

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
        stoppableInterval(() => {
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

    setCollidingPosition(object) {
        object.xColliding = object.x + object.width * object.xCollidingFactor;    // offset for collision detection
        object.yColliding = object.y + object.height * object.yCollidingFactor;
        object.widthColliding = object.width * object.widthCollidingFactor;
        object.heightColliding = object.height * object.heightCollidingFactor;
    }

    run() {
        stoppableInterval(() => {
            this.checkCollisions();
            this.createBubble();
            this.checkGameEnd();
        }, 50);
    }

    checkCollisions() {
        this.checkEnemyCollisions();
        this.checkObjectCollisions();
        this.checkBubbleCollisions();
    }

    checkEnemyCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.sharkie.isColliding(enemy) && !this.sharkie.isDead()) {
                enemy.hitSharkie();
            }
        });
    }

    checkObjectCollisions() {
        this.level.staticObjects.forEach((object) => {
            if (this.sharkie.isColliding(object) && (object instanceof Coin || object instanceof Poison) && !this.sharkie.isDead()) {
                object.collect();
            }
        });
    }

    checkBubbleCollisions() {
        this.bubbles.forEach(bubble => {
            this.level.enemies.forEach(enemy => {
                if ((enemy instanceof JellyFish || enemy instanceof EndBoss) && enemy.isColliding(bubble)) {
                    enemy.hitByBubble();
                }
            });
        });
    }

    createBubble() {
        if (this.keyboard.J && (this.lastBubble == 0 || ((new Date().getTime() - this.lastBubble) > 1000))) {
            this.lastBubble = new Date().getTime();
            setTimeout(() => {
                let bubble = new Bubble();
                this.bubbles.push(bubble)
            }, 800);
        }
    }

    checkGameEnd() {
        this.checkDefeat();
        this.checkVictory();
    }

    checkDefeat() {
        if (this.sharkie.energy <= 0 && this.gameEnd == false) {
            this.gameEnd = true;
            setTimeout(() => {
                stopGame();
                document.getElementById('game-over-card').classList.remove('d-none');
                document.getElementById('game-over-btn').classList.remove('d-none');
            }, 3000);
        }
    }

    checkVictory() {
        if (this.sharkie.energy > 0 && this.level.enemies[0].energy <= 0 && this.sharkie.coins >= 5 && this.gameEnd == false) {
            this.gameEnd = true;
            setTimeout(() => {
                stopGame();
                document.getElementById('victory-card').classList.remove('d-none');
                document.getElementById('victory-btn').classList.remove('d-none');
            }, 3000);
        }
    }
}