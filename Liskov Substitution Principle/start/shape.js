class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }
  setHeight(height) {
    this.height = height;
    this.width = height;
  }
}

function increaseRectangleWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

const rectangle = new Rectangle(10, 5);
const square = new Square(5, 5);
const rectangle2 = new Rectangle(5, 5);

increaseRectangleWidth(rectangle);
increaseRectangleWidth(rectangle2);

increaseRectangleWidth(square);

console.log(rectangle.area());
console.log(square.area()); //! this square is violated the Liskov
console.log(rectangle2.area());
