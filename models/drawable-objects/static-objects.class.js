class StaticObjects extends DrawableObject {
    x = 350;
    y = 300;
    height = 70;
    width = 70;

    xCollidingFactor = 0.01;    // offset for collision detection
    yCollidingFactor = 0.01;
    widthCollidingFactor = 1;
    heightCollidingFactor = 1;

    constructor() {
        super();
        this.setX();
        this.respornIfFarAway();
    }

    // setX() {
    //     let position =  Math.random() * 7200 * 3 - 4320;
    //     if (position < 100 || position > 500) { // avoid sharkie
    //         this.x = position;
    //     }
    //     else {
    //         this.x = position - 600;
    //     }
    // }

    setX() {
        let position = xPositionSharky + Math.random() * 7200 * 3 - 4320;
        if (position < xPositionSharky - 350 || position > xPositionSharky + 750) { // avoid sharkie
           this.x = position;
        }
        else {
           this.x = position - 2000;
        }
     }

    respornIfFarAway() {
        setInterval(() => {
            if (this.x < xPositionSharky - 2880 || this.x > xPositionSharky + 4320) {
                this.setX();
            }
        }, 300);
    }

    animateStaticObject(t) {
        setInterval(() => {
            this.animate(this.IMAGES_ANIMATION);
        }, t);
    }
}