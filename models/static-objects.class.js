class StaticObjects {
    x = 350;
    y = 300;
    height = 70;
    width = 70;
    imgCache = {};
    currentImg = 0;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }

    animate(t) {
        setInterval(() => {
            let i = this.currentImg % this.IMAGES_ANIMATION.length;
            let path = this.IMAGES_ANIMATION[i];
            this.img = this.imgCache[path];

            this.currentImg++;
        }, t)
    }
}