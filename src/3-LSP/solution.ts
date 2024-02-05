// example 1
interface Shape {
  getArea: () => number;
}

interface Rectangle extends Shape {
  width: number;
  length: number;
}

interface Square extends Shape {
  sides: number;
}

// Implementation...
// Now, Shape is substitutable by both Rectangle and Square,
// because none of the two subtypes break the behavior defined by Shape.

// example 2
// This way it is possible to replace the parent class by the subclass without breaking the code.
class Order {
  constructor(public id: number, public items: string[]) {}
}

class ConfirmedOrder extends Order {
  constructor(public id: number, public items: string[], public payed = false) {
    super(id, items);
  }

  markAsPaid(): void {
    this.payed = true;
  }
}
