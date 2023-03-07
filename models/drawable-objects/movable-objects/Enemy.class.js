class Enemy extends MovableObject {
    lastHit = 0;

    constructor() {
        super();
        this.respornIfFarAway();
        this.setX();
    }

    changeY(speed) {
        stoppableInterval(() => {
            this.fishStopAtBottom();
            this.fishStopAtTop();
            this.fishYMovement(speed);
        }, 1000 / 60)
    }

    fishStopAtBottom() {
        if (this.y > 430) {
            this.y = 430;
            this.yMove = 0;
        }
    }

    fishStopAtTop() {
        if (this.y < -20) {
            this.y = -20;
            this.yMove = 0;
        }
    }

    fishYMovement(speed) {
        let n = Math.random();
        if (n < 0.5) {
            this.yMove += Math.random() * speed;
        }
        else {
            this.yMove -= Math.random() * speed;
        }
    }

    setX() {
        let position = xPositionSharky + Math.random() * 7200 * 3 - 4320;
        if (this.sharkyIsFarEnough(position)) { // avoid sharkie
            this.x = position;
        }
        else {
            this.x = position - 1000;
        }
    }

    sharkyIsFarEnough(position) {
        return (position < xPositionSharky - 350 || position > xPositionSharky + 750);
    }

    respornIfFarAway() {
        stoppableInterval(() => {
            if (this.x < xPositionSharky - 2880 || this.x > xPositionSharky + 4320) {
                this.setX();
            }
        }, 300);
    }
}