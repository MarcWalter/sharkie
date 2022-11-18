class World {
    sharkie = new Sharkie();
    enemies = [
        new JellyFish(),
        new JellyFish(),
        new PufferFish()
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
    }

    draw() {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.sharkie.img, this.sharkie.x, this.sharkie.y, this.sharkie.width, this.sharkie.height);
        
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }
}