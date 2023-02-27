class StatusCoins extends Status {

    x = 7;
    y = 35;
    height = 40;
    width = 40;

    world;

    constructor() {
        super();
        this.loadImage('./img/4. Marcadores/green/100_ copia 6.png');
        this.updateCoinStatus();
    }

    updateCoinStatus() {
        setInterval(() => {
            this.world.ctx.fillText("Hello World", 200, 200);
        }, 1000);
    }
}