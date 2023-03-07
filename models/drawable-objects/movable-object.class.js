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

   constructor() {
      super();
   }

   moveRight(speed) {
      stoppableInterval(() => {
         if (!this.isDead()) {
            this.x += speed;
         }
      }, 1000 / 60)
   }

   moveLeft(speed) {
      stoppableInterval(() => {
         if (!this.isDead()) {
            this.x -= speed;
         }
      }, 1000 / 60)
   }

   moveY(speed) {
      stoppableInterval(() => {
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
   }

   isNear(obj) {
      return (this.xColliding + this.widthColliding) >= (obj.xColliding - 60) && this.xColliding <= (obj.xColliding + obj.widthColliding + 60) &&
         (this.yColliding + this.heightColliding) >= obj.yColliding &&
         (this.yColliding) <= (obj.yColliding + obj.heightColliding);
   }

   hit(damage) {
      this.energy -= damage;
   }

   isDead() {
      return this.energy <= 0;
   }
}