// example 1
// class Rectangle {
//   constructor(private width: number, private height: number) {}

//   public setWidth(width: number) {
//     this.width = width;
//   }
//   public setHeight(height: number) {
//     this.height = height;
//   }
//   public getArea() {
//     return this.width * this.height;
//   }
// }

// class Square extends Rectangle {
//   constructor(side: number) {
//     super(side, side);
//   }

//   setWidth(width: number) {
//     super.setWidth(width);
//     super.setHeight(width);
//   }

//   setHeight(height: number) {
//     super.setWidth(height);
//     super.setHeight(height);
//   }
// }

// const rectangle = new Square(10);
// rectangle.setWidth(20);

// if (rectangle instanceof Square) {
//   // ...
// } else {
//   // ...
// }

// example 2
// class Order {
//   constructor(
//     public id: number,
//     public items: string[],
//     public payed = false
//   ) {}

//   markAsPaid(): void {
//     this.payed = true;
//   }
// }

// class DraftOrder extends Order {
//   markAsPaid(): void {
//     throw new Error("Draft orders can't be payed");
//   }
// }
