class Shape {
  color;
  constructor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  height;
  constructor(color, height) {
    super(color);
    this.height = height;
  }
  calculateArea = () => {
    return this.height * this.height;
  };
}

class Circle extends Square {
  calculateArea = () => {
    return 3.14 * this.height * this.height;
  };
}

class Rectangle extends Square {
  width;
  constructor(color, height, width) {
    super(color, height);
    this.width = width;
  }
  calculateArea = () => {
    return this.height * this.width;
  };
}

const square = new Square("red", 5);
console.log(square.calculateArea());
const circle = new Circle("red", 5);
console.log(circle.calculateArea());
const rectangle = new Rectangle("red", 5, 4);
console.log(rectangle.calculateArea());
