class Fondo1L extends Background {
    width = 720 * 2;
    imgPath = './img/3. Background/Layers/3.Fondo 1/L.png';

    constructor(xStart) {
        super(xStart).loadImage(this.imgPath);
    }
}