class Background extends DrawableObject {
    x = 0;
    y = 0;
    width = 720 * 2;
    height = 480;
    xStart = 0;

    constructor(xStart) {
        super();
        this.setX();
        this.xStart = xStart;
    }

    setX() {
        stoppableInterval(() => {
            this.x = this.xStart + backgroundPosition * this.width;
        }, 1000);
    }
}
