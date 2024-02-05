interface Shape {
  getArea(): number;
}

class TriangleShape implements Shape {
  public base: number;
  public height: number;
  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  public getArea() {
    return this.base * this.height * 0.5;
  }
}

class RectangleShape implements Shape {
  public width: number;
  public height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  public getArea() {
    return this.width * this.height;
  }
}

function computeAreasOfShapes(shapes: Shape[]) {
  let area = 0;
  for (let shape of shapes) {
    area + shape.getArea();
  }

  return area;
}
