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
        new Water(),
        new Light(),
        new Fondo2(),
        new Fondo1(),
        new Floor()
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        
        this.addObjectsToMap(this.backgrounds);
        this.addToMap(this.sharkie);
        this.addObjectsToMap(this.enemies);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

        addToMap(object) {
            this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        }

        addObjectsToMap(objects) {
            objects.forEach(object => {
                this.addToMap(object);
            })
        }
}