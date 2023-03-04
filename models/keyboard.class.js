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

        document.getElementById('up-btn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.UP = true;
        });
        document.getElementById('up-btn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.UP = false;
        });
        document.getElementById('down-btn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.DOWN = true;
        });
        document.getElementById('down-btn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.DOWN = false;
        });
        document.getElementById('left-btn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.LEFT = true;
        });
        document.getElementById('left-btn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.LEFT = false;
        });
        document.getElementById('right-btn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.RIGHT = true;
        });
        document.getElementById('right-btn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.RIGHT = false;
        });
        document.getElementById('bubble-btn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.J = true;
        });
        document.getElementById('bubble-btn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.J = false;
        });
        document.getElementById('fin-slap-btn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.SPACE = true;
        });
        document.getElementById('fin-slap-btn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.SPACE = false;
        });
    }
}