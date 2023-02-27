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
        setInterval(() => {
            this.x = this.xStart + backgroundPosition * this.width;
        }, 1000);
    }

    // setX() {
    //     let position = xPositionSharky + Math.random() * 7200 * 3 - 4320;
    //     if (position < xPositionSharky - 350 || position > xPositionSharky + 750) { // avoid sharkie
    //        this.x = position;
    //     }
    //     else {
    //        this.x = position - 1000;
    //     }
    //  }

    // respornIfFarAway() {
    //     setInterval(() => {
    //         if (this.x < xPositionSharky - 2880 || this.x > xPositionSharky + 4320) {
    //             this.setX();
    //         }
    //     }, 300);
    // }

}
