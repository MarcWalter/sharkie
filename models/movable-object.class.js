class MovableObject {
   x = 150;
   y = 150;
   img;
   height = 150;
   width = 150;
   imgCache = {};

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

   moveRight() {
      console.log('Moving right')
   }

   moveLeft() {

   }
}