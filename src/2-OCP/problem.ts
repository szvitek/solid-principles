// class Triangle {
//   public base: number;
//   public height: number;
//   constructor(base: number, height: number) {
//     this.base = base;
//     this.height = height;
//   }
// }

// class Rectangle {
//   public width: number;
//   public height: number;
//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
// }

// // when we add a new shape, we have to change our computeAreasOfShapes function, which is bad
// class Circle {
//   public radius: number;
//   constructor(radius: number) {
//     this.radius = radius;
//   }
// }

// function computeAreasOfShapes(
//   shapes: Array<Rectangle | Triangle /* | Circle */>
// ) {
//   let area = 0;
//   for (let shape of shapes) {
//     if (shape instanceof Rectangle) {
//       area + shape.width * shape.height;
//     }
//     if (shape instanceof Triangle) {
//       area + shape.base * shape.height * 0.5;
//     }
//     // if (shape instanceof Circle) {
//     //   area + shape.radius * Math.PI;
//     // }
//   }

//   return area;
// }
