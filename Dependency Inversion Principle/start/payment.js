class Store {
  constructor(user) {
    // this.stripe = new Stripe(user);
    this.user = user;
    this.paypal = new Paypal();
  }
  purchaseBike(quantity) {
    // this.stripe.makePayment(200 * quantity * 100);
    this.paypal.makePayment(this.user, 200 * quantity);
  }
  purchaseHelmet(quantity) {
    // this.stripe.makePayment(15 * quantity * 100);
    this.paypal.makePayment(this.user, 15 * quantity);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of $${amountInCents / 100} with Stripe`
    );
  }
}
class Paypal {
  makePayment(user, amountInDollars) {
    //? It take user in a argument of makePayment function
    //? so it will violate the Dependency inversion
    console.log(`${user} made payment of $${amountInDollars} with Paypal`);
  }
}
const store = new Store('John');
store.purchaseBike(2);
store.purchaseHelmet(2);

//? create an API call wrapper in the middle of HIGH level module and LOW level module
//? the ideal of that wrapper that it has exact same function and the exact same interface
