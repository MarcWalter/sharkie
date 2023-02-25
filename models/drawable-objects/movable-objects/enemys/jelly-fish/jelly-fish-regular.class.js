class JellyFishRegular extends JellyFish {
     
    fishTypeArray = ['Lila', 'Yellow'];
    
    IMAGES_ANIMATION = [
        `./img/2.Enemy/2 Jelly fish/Regular damage/${this.fishTypeArray[this.fishType]} 1.png`,
        `./img/2.Enemy/2 Jelly fish/Regular damage/${this.fishTypeArray[this.fishType]} 2.png`,
        `./img/2.Enemy/2 Jelly fish/Regular damage/${this.fishTypeArray[this.fishType]} 3.png`,
        `./img/2.Enemy/2 Jelly fish/Regular damage/${this.fishTypeArray[this.fishType]} 4.png` 
    ];

    IMAGE_PATH = `./img/2.Enemy/2 Jelly fish/Regular damage/${this.fishTypeArray[this.fishType]} 1.png`;

    hitJellyFishAudio = new Audio('./audio/shock-1.mp3');

    constructor() {
        super();
        this.loadImage(this.IMAGE_PATH);
        this.loadImages(this.IMAGES_ANIMATION);
        this.animateJellyFish(this.IMAGES_ANIMATION, this.animationSpeed);
    }
      
}