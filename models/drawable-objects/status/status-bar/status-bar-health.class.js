class StatusBarHealth extends StatusBar {
    height = 40;
    x = 10;

    IMAGES = [
        'img/4. Marcadores/green/Life/0_  copia 3.png',
        'img/4. Marcadores/green/Life/20_ copia 4.png',
        'img/4. Marcadores/green/Life/40_  copia 3.png',
        'img/4. Marcadores/green/Life/60_  copia 3.png',
        'img/4. Marcadores/green/Life/80_  copia 3.png',
        'img/4. Marcadores/green/Life/100_  copia 2.png'
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
            this.value = Math.round(world.sharkie.energy/20);
            if (this.value < 0) {
                this.value = 0;
            }
            imagePath = this.IMAGES[this.value];
            this.img = this.imgCache[imagePath];
        }, 1000);
    }
}