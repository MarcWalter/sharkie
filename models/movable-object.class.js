class MovableObject {
   x = 200;
   y = 400;
   img;

   loadImage(path) {
    this.img = new Image();
    this.img.src = path;
   }

   moveRight() {
        console.log('Moving right')
   }

   moveLeft() {

   }
}