class MovableObject extends DrawableObject {
   x = 150;
   y = 150;
   height = 150;
   width = 150;
   energy = 100;

   xColliding = 0;
   yColliding = 0;
   widthColliding = 0;
   heightColliding = 0;

   // sharkieIntervall;

   constructor() {
      super();
   }

   moveRight(speed) {
      setInterval(() => {
         if (!this.isDead()) {
            this.x += speed;
         }
      }, 1000 / 60)
   }

   moveLeft(speed) {
      setInterval(() => {
         if (!this.isDead()) {
            this.x -= speed; 
         }
      }, 1000 / 60)
   }

   moveY(speed) {
      setInterval(() => {
         if (!this.isDead()) {
            this.y -= this.yMove;
         }
      }, 1000 / 60)
      this.changeY(speed);
   }



   isColliding(obj) {
      return (this.xColliding + this.widthColliding) >= obj.xColliding && this.xColliding <= (obj.xColliding + obj.widthColliding) &&
         (this.yColliding + this.heightColliding) >= obj.yColliding &&
         (this.yColliding) <= (obj.yColliding + obj.heightColliding);
      //&& obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

      // return (this.x * xCollidingFactor + this.width * widthCollidingFactor) >= (obj.x * xCollidingFactor) && (this.x * xCollidingFactor) <= (obj.x * xCollidingFactor + obj.width * widthCollidingFactor) &&
      // (this.y * yCollidingFactor + this.heightColliding * heightCollidingFactor) >= (obj.y * yCollidingFactor) &&
      // (this.y * yCollidingFactor) <= (obj.y * yCollidingFactor + obj.heightColliding * heightCollidingFactor);
   }

   isNear(obj) {
      return (this.xColliding + this.widthColliding) >= (obj.xColliding - 40) && this.xColliding <= (obj.xColliding + obj.widthColliding + 40) &&
         (this.yColliding + this.heightColliding) >= obj.yColliding &&
         (this.yColliding) <= (obj.yColliding + obj.heightColliding);
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

}