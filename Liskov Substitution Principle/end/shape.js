class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
}

class Square extends Shape {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }
  setHeight(height) {
    this.height = height;
    this.width = height;
  }
}

function increaseShapeWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

const rectangle = new Rectangle(10, 5);
const square = new Square(5, 5);
const rectangle2 = new Rectangle(5, 5);

increaseShapeWidth(rectangle);
increaseShapeWidth(rectangle2);

increaseShapeWidth(square);

console.log(rectangle.area());
console.log(square.area());
console.log(rectangle2.area());
