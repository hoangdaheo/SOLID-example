//? separate the bird to 2 type (flying, swimming)

class FlyingBird {
  fly() {
    console.log('I can fly.');
  }
}
class SwimmingBird {
  swim() {
    console.log('I can swim');
  }
}

class Duck extends FlyingBird {
  // also duck can swim, it the problem of OOP
  quack() {
    console.log('I can quack.');
  }
}

class Penguin extends SwimmingBird {}

function makeFlyingBirdFly(bird) {
  bird.fly();
}
function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin(); //! violated the Liskov Substitution
makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);
//?  Functions that use pointers or references to base classes
//?  must be able to use objects of derived classes without knowing it.
