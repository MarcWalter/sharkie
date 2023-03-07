class Keyboard {
    W = false;
    A = false;
    S = false;
    D = false;
    J = false;
    SPACE = false;

    constructor() {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 87) {
                this.W = true;
            }
            if (e.keyCode == 38) {
                this.W = true;
            }
            if (e.keyCode == 65) {
                this.A = true;
            }
            if (e.keyCode == 37) {
                this.A = true;
            }
            if (e.keyCode == 83) {
                this.S = true;
            }
            if (e.keyCode == 40) {
                this.S = true;
            }
            if (e.keyCode == 68) {
                this.D = true;
            }
            if (e.keyCode == 39) {
                this.D = true;
            }
            if (e.keyCode == 74) {
                this.J = true;
            }
            if (e.keyCode == 32) {
                this.SPACE = true;
            }
        });

        window.addEventListener("keyup", (e) => {
            if (e.keyCode == 87) {
                this.W = false;
            }
            if (e.keyCode == 38) {
                this.W = false;
            }
            if (e.keyCode == 65) {
                this.A = false;
            }
            if (e.keyCode == 37) {
                this.A = false;
            }
            if (e.keyCode == 83) {
                this.S = false;
            }
            if (e.keyCode == 40) {
                this.S = false;
            }
            if (e.keyCode == 68) {
                this.D = false;
            }
            if (e.keyCode == 39) {
                this.D = false;
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
            this.W = true;
        });
        document.getElementById('up-btn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.W = false;
        });
        document.getElementById('down-btn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.S = true;
        });
        document.getElementById('down-btn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.S = false;
        });
        document.getElementById('left-btn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.A = true;
        });
        document.getElementById('left-btn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.A = false;
        });
        document.getElementById('right-btn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.D = true;
        });
        document.getElementById('right-btn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.D = false;
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