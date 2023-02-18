class Enemy extends MovableObject {


    constructor() {
        super();
        this.setX();
        this.respornIfFarAway();
    }

    changeY(speed) {
        setInterval(() => {
            let n = Math.random();

            if (this.y > 430) { //fish cannot reach bottom
                this.y = 430;
                this.yMove = 0;
            }

            if (this.y < -20) { //fish cannot reach top
                this.y = -20;
                this.yMove = 0;
            }

            if (n < 0.5) {
                this.yMove += Math.random() * speed;
            }
            else {
                this.yMove -= Math.random() * speed;
            }

        }, 1000 / 60)
    }

    setX() {
        let position = xPositionSharky + Math.random() * 7200 * 3 - 4320;
        if (position < xPositionSharky - 350 || position > xPositionSharky + 750) { // avoid sharkie
           this.x = position;
        }
        else {
           this.x = position - 1000;
        }
     }

    respornIfFarAway() {
        setInterval(() => {
            if (this.x < xPositionSharky - 2880 || this.x > xPositionSharky + 4320) {
                this.setX();
            }
        }, 300);
    }
}