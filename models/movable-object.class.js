class MovableObject {
   x = 150;
   y = 150;
   img;
   height = 150;
   width = 150;
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

   moveY(speed) {
      setInterval(() => {
         this.y -= this.yMove;
      }, 1000 / 60)
      this.changeY(speed);
   }

   animate(t) {
      setInterval(() => {
         let i = this.currentImg % this.IMAGES_ANIMATION.length;
         let path = this.IMAGES_ANIMATION[i];
         this.img = this.imgCache[path];

         this.currentImg++;
      }, t)
   }

   setX() {
      let position = Math.random() * 7200 * 3 - 4320;
      if (position < 150 && position > 500) { // avoid sharkie
         this.x = position;
      }
      else {
         this.x = position - 350
      }
   }

   moveLeft() {
      console.log('Moving left')
   }

}