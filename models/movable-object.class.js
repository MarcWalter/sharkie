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

   sharkieIntervall;

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

   animate(IMAGES, t) {

      let i = this.currentImg % IMAGES.length;
      let path = IMAGES[i];
      this.img = this.imgCache[path];

      this.currentImg++;

   }

   animateSingleTurn(IMAGES, t) {
      clearInterval(this.sharkieIntervall);
      this.currentImg = 0;

      let currentIntervall = setInterval(() => {
         let i = this.currentImg % IMAGES.length;
         let path = IMAGES[i];
         this.img = this.imgCache[path];

         this.currentImg++;
         if (this.currentImg == IMAGES.length) { //start animateSharkie() if animateSingleTurn() showed animation one time
               clearInterval(currentIntervall);
               this.animateSharkie();
         }
      }, 100);
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