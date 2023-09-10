class CalorieTracker {
  constructor() {
    this._calorieLimit = 2200;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];

    this._displayCaloriesLimit();
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCaloriesProgress();
  }
  
  //// Public Methods API ////
  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;

    this._render();
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;

    this._render();
  }

  //// Private Methods ////

  _displayCaloriesTotal() {
    const totalCaloriesEl = document.getElementById('calories-total');
    totalCaloriesEl.innerHTML = this._totalCalories;
  }

  _displayCaloriesLimit() {
    const caloriesLimitEl = document.getElementById('calories-limit');
    caloriesLimitEl.innerHTML = this._calorieLimit;
  }
  
  _displayCaloriesConsumed() {
    const caloriesConsumedEl = document.getElementById('calories-consumed');
    const consumed = this._meals.reduce((total, meal) => total + meal.calories, 0);
    caloriesConsumedEl.innerHTML = consumed;
  }

  _displayCaloriesBurned() {
    const caloriesBurnedEl = document.getElementById('calories-burned');
    const burned = this._workouts.reduce((total, workout) => total + workout.calories, 0);
    caloriesBurnedEl.innerHTML = burned;
  }

  // Display calories remaining
  _displayCaloriesRemaining() {
    const caloriesRemainingEl = document.getElementById('calories-remaining');
    const remaining = this._calorieLimit - this._totalCalories;

    caloriesRemainingEl.innerHTML = remaining;
  }

  // Display calories progress bar
  _displayCaloriesProgress() {
    const progressEl = document.getElementById('calorie-progress');
    const percentage = (this._totalCalories / this._calorieLimit) * 100;
    const width = Math.min(percentage, 100);

    progressEl.style.width = `${width}%`;
  }

  // Update the UI after adding data
  _render() {
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCaloriesProgress();
  }
}

class Meal {
  constructor(name, calories) {
    // Add random id with hexadecimal number minus '0.'
    this.id = Math.random().toString(36).slice(2);
    this.name = name;
    this.calories = calories
  }
}
class Workout {
  constructor(name, calories) {
    // Add random id with hexadecimal number minus '0.'
    this.id = Math.random().toString(36).slice(2);
    this.name = name;
    this.calories = calories
  }
}

// Initialize tracker
const tracker = new CalorieTracker();

// Add new meal
const breakfast = new Meal ('Breakfast', 400);
const lunch = new Meal ('Lunch', 350)

tracker.addMeal(breakfast);
tracker.addMeal(lunch);

// Add new workout
const run = new Workout('Morning Run', 320);
tracker.addWorkout(run);

// Testing
console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._totalCalories);