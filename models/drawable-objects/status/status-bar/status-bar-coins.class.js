class StatusBarCoins extends StatusBar {
    height = 40;
    x = 10;
    y = 40;

    IMAGES = [
        './img/4. Marcadores/green/Coin/0_copia_4.png',
        './img/4. Marcadores/green/Coin/20_copia_2.png',
        './img/4. Marcadores/green/Coin/40_copia_4.png',
        './img/4. Marcadores/green/Coin/60_copia_4.png',
        './img/4. Marcadores/green/Coin/80_copia_4.png',
        './img/4. Marcadores/green/Coin/100_copia_4.png'      
    ];

    constructor() {
        super();
        this.loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.updateBarStatus();
    }

    updateBarStatus() {
        let imagePath = this.IMAGES[0];
            setInterval(() => {
            this.value = world.sharkie.coins;
            imagePath = this.IMAGES[this.value];
            this.img = this.imgCache[imagePath];
        }, 1000);
    }
}