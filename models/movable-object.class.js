class MovableObject {
   x = 150;
   y = 150;
   img;
   height = 150;
   width = 150;
   imgCache = {};
   currentImg = 0;
   otherDirection = false;
   energy = 100;

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

   moveLeft() {
      console.log('Moving left')
   }

   // isColliding(obj) {
   //    return (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) &&
   //       (this.Y + this.offsetY + this.height) >= obj.Y &&
   //       (this.Y + this.offsetY) <= (obj.Y + obj.height) &&
   //       obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
   // }

   isColliding(mo) {
      return this.x + this.width > mo.x &&
         this.y + this.height > mo.y &&
         this.x < mo.x &&
         this.y < mo.y + mo.height;
   }

   hit() {
      this.energy -= 20;
      console.log('Energy', this.energy);
   }

   isDead() {
      return this.energy <= 0;
   }
}