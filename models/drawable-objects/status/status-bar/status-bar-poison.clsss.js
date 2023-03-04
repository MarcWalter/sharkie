class StatusBarPoison extends StatusBar {
    height = 40;
    x = 10;
    y = 80;

    IMAGES = [
        './img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
        './img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
        './img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        './img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        './img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        './img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png'
    ];

    constructor() {
        super();
        this.loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.updateBarStatus();
    }

    updateBarStatus() {
        let imagePath = this.IMAGES[0];
        stoppableInterval(() => {
            this.value = world.sharkie.poison;
            imagePath = this.IMAGES[this.value];
            this.img = this.imgCache[imagePath];
        }, 1000);
    }
}