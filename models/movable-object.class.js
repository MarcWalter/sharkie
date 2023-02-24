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

   xColliding = 0;
   yColliding = 0;
   widthColliding = 0;
   heightColliding = 0;

   // sharkieIntervall;

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

   animate(IMAGES) {

      let i = this.currentImg % IMAGES.length;
      let path = IMAGES[i];
      this.img = this.imgCache[path];

      this.currentImg++;

   }

   animateSingleTurn(IMAGES, t) {
      clearInterval(this.sharkieIntervall);
      this.currentImg = 0;

      let currentIntervall = setInterval(() => {
         this.movable = false;

         let i = this.currentImg % IMAGES.length;
         let path = IMAGES[i];
         this.img = this.imgCache[path];
         this.currentImg++;

         if (this.currentImg == IMAGES.length) { //start animateSharkie() if animateSingleTurn() showed animation one time
            clearInterval(currentIntervall);
            this.restartAnimation();
         }
      }, t);
   }

   isColliding(obj) {
      return (this.xColliding + this.widthColliding) >= obj.xColliding && this.xColliding <= (obj.xColliding + obj.widthColliding) &&
         (this.yColliding + this.heightColliding) >= obj.yColliding &&
         (this.yColliding) <= (obj.yColliding + obj.heightColliding);
      // obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

      // return (this.x * xCollidingFactor + this.width * widthCollidingFactor) >= (obj.x * xCollidingFactor) && (this.x * xCollidingFactor) <= (obj.x * xCollidingFactor + obj.width * widthCollidingFactor) &&
      // (this.y * yCollidingFactor + this.heightColliding * heightCollidingFactor) >= (obj.y * yCollidingFactor) &&
      // (this.y * yCollidingFactor) <= (obj.y * yCollidingFactor + obj.heightColliding * heightCollidingFactor);
   }

   // isColliding(mo) {
   //    return this.x + this.width > mo.x &&
   //       this.y + this.height > mo.y &&
   //       this.x < mo.x &&
   //       this.y < mo.y + mo.height;
   // }

   hit(damage) {
      this.energy -= damage;
      console.log('Energy', this.energy);
   }

   isDead() {
      return this.energy <= 0;
   }

   restartAnimation() {
      if (!this.isDead()) {
         this.animateSharkie();
      }
   }
}