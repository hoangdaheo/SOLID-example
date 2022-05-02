//! STORE IS HIGH LEVEL MODULE
class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }
  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}

//! THE WRAPPER
class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}
//! THE LOW LEVEL MODULE
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

//! THE WRAPPER
class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }
  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
  }
}

//! THE LOW LEVEL MODULE
class Paypal {
  makePayment(user, amountInDollars) {
    //? It take user in a argument of makePayment function
    //? so it will violate the Dependency inversion
    console.log(`${user} made payment of $${amountInDollars} with Paypal`);
  }
}

const store = new Store(new PaypalPaymentProcessor('John'));
store.purchaseBike(2);
store.purchaseHelmet(2);

//? create an API call wrapper in the middle of HIGH level module and LOW level module
//? the ideal of that wrapper that it has exact same function and the exact same interface
