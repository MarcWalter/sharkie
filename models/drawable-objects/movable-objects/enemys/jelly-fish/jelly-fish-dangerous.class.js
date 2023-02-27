class JellyFishDangerous extends JellyFish {
    height = 70;
    width = 70;

    fishTypeArray = ['Green', 'Pink'];

    IMAGES_ANIMATION = [
        `./img/2.Enemy/2 Jelly fish/Súper dangerous/${this.fishTypeArray[this.fishType]} 1.png`,
        `./img/2.Enemy/2 Jelly fish/Súper dangerous/${this.fishTypeArray[this.fishType]} 2.png`,
        `./img/2.Enemy/2 Jelly fish/Súper dangerous/${this.fishTypeArray[this.fishType]} 3.png`,
        `./img/2.Enemy/2 Jelly fish/Súper dangerous/${this.fishTypeArray[this.fishType]} 4.png`       
    ];

    IMAGE_PATH = `./img/2.Enemy/2 Jelly fish/Súper dangerous/${this.fishTypeArray[this.fishType]} 1.png`;

    hitJellyFishAudio = new Audio('./audio/shock-2.mp3');

    constructor() {
        super();
        this.loadImage(this.IMAGE_PATH);
        this.loadImages(this.IMAGES_ANIMATION);
        this.animateJellyFish(this.IMAGES_ANIMATION, this.animationSpeed);
    }
   
}