class MovableObject {
   x = 150;
   y = 150;
   img;
   height = 150;
   width = 150;
   imgCache = {};
   currentImg = 0;

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

   moveRight(speed) {
      setInterval(() => {
         this.x += speed;
     }, 1000 / 60)

   }

   moveLeft(speed) {
      setInterval(() => {
         this.x -= speed;
     }, 1000 / 60)
   }

   moveY() {
      setInterval(() => {
         this.y -= this.yMove;
     }, 1000 / 60)
     this.changeY();
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