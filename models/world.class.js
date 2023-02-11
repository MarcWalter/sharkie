class World {
    sharkie = new Sharkie();
    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new PufferFish()

    ];
    backgrounds = [
        new Water(0), // backround middle
        new Fondo2(0),
        new Fondo1L(0),
        new Floor(0),
        new Water(canvas.width * 2 - 3), // background before sharkie
        // new Light(canvas.width * 2- 3),
        new Fondo2(canvas.width * 2- 3),
        new Fondo1L(canvas.width * 2- 3),
        new Floor(canvas.width * 2- 3),
        new Water(-canvas.width * 2 + 3), // background after sharkie
        // new Light(-canvas.width * 2 + 3),
        new Fondo2(-canvas.width * 2 + 3),
        new Fondo1L(-canvas.width * 2 + 3),
        new Floor(-canvas.width * 2 + 3),
        new Light(0)
    ];
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
        // this.setBackgrounds();
    }

    setWorld() {
        this.sharkie.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        
        this.addObjectsToMap(this.backgrounds);
        this.addToMap(this.sharkie);
        this.addObjectsToMap(this.enemies);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });

    }

    addToMap(object) {
        if (object.otherDirection) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
        }

        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);

        if (object.otherDirection) {
            object.x = object.x * -1;
            this.ctx.restore();
        }
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
}