class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }
  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      this.logCalorieSurplus();
    }
  }
  logCalorieSurplus() {
    console.log('Max calories exceeded');
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(1500);

//! This code above violate the Single responsibility principle
//? The SRP is "1 class should only keep 1 resonsibility." and "only modify class with 1 reason"

//* so we will refactor that CalorieTracker class
