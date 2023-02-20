class Keyboard {
    W = false;
    UP = false;
    A = false;
    LEFT = false;
    S = false;
    DOWN = false;
    D = false;
    RIGHT = false;
    J = false;
    SPACE = false;

    constructor() {
        window.addEventListener("keydown", (e) => {
            // console.log(e);
            if (e.keyCode == 87) {
                this.W = true;
            }
            if (e.keyCode == 38) {
                this.UP = true;
            }
            if (e.keyCode == 65) {
                this.A = true;
            }
            if (e.keyCode == 37) {
                this.LEFT = true;
            }
            if (e.keyCode == 83) {
                this.S = true;
            }
            if (e.keyCode == 40) {
                this.DOWN = true;
            }
            if (e.keyCode == 68) {
                this.D = true;
            }
            if (e.keyCode == 39) {
                this.RIGHT = true;
            }
            if (e.keyCode == 74) {
                this.J = true;
            }
            if (e.keyCode == 32) {
                this.SPACE = true;
            }
        });
        window.addEventListener("keyup", (e) => {
            // console.log(e);
            if (e.keyCode == 87) {
                this.W = false;
            }
            if (e.keyCode == 38) {
                this.UP = false;
            }
            if (e.keyCode == 65) {
                this.A = false;
            }
            if (e.keyCode == 37) {
                this.LEFT = false;
            }
            if (e.keyCode == 83) {
                this.S = false;
            }
            if (e.keyCode == 40) {
                this.DOWN = false;
            }
            if (e.keyCode == 68) {
                this.D = false;
            }
            if (e.keyCode == 39) {
                this.RIGHT = false;
            }
            if (e.keyCode == 74) {
                this.J = false;
            }
            if (e.keyCode == 32) {
                this.SPACE = false;
            }
        });
    }
}