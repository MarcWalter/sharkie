class Barrier extends StaticObjects {
    BARRIERS = [{
        img: 'img/3. Background/Barrier/1.png',
        height: 480,
        width: 720,
        x: 100,
        y: 0
    },
    {
        img: 'img/3. Background/Barrier/2.png',
        height: 200,
        width: 200,
        x: 100,
        y: 280
    },
    {
        img: 'img/3. Background/Barrier/3.png',
        height: 270,
        width: 150,
        x: 100,
        y: -50
    }
    ];
    barrier;

    constructor() {
        super();
        this.barrier = this.BARRIERS[Math.round(Math.random() * 2)];
        this.loadImage(this.barrier.img);
        this.setVariables();
    }

    setVariables() {
        this.height = this.barrier.height;
        this.width = this.barrier.width;
        this.y = this.barrier.y;
        this.otherDirection = Math.random() < 0.5;
    }
}