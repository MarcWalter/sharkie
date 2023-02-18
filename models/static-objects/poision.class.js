class Poision extends StaticObjects {
    width = 40;
    height = 50;

    IMAGES_ANIMATION = [
        './img/4. Marcadores/Posión/Animada/1.png',
        './img/4. Marcadores/Posión/Animada/2.png',
        './img/4. Marcadores/Posión/Animada/3.png',
        './img/4. Marcadores/Posión/Animada/4.png',
        './img/4. Marcadores/Posión/Animada/5.png',
        './img/4. Marcadores/Posión/Animada/6.png',
        './img/4. Marcadores/Posión/Animada/7.png',
        './img/4. Marcadores/Posión/Animada/8.png'
    ];


    constructor() {
        super().loadImage('./img/4. Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_ANIMATION);
        this.animate(100);
        this.setY();
    }

    setY() {
        this.y = 350 + Math.random() * 100;
    }
}