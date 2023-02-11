class Background extends MovableObject {
    x = 0;
    y = 0;
    width = canvas.width * 2;
    height = canvas.height;
    xStart = 0;


    constructor(xStart) {
        super();
        this.setX();
        this.xStart = xStart;
    }

    setX() {
        setInterval(() => {
            this.x = this.xStart + backgroundPosition * this.width;
        }, 1000);
    }
}
