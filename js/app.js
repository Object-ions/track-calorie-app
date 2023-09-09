class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];

    this._displayCaloriesTotal();
  }
  //// Public Methods API ////
  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    
    this._rander();
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;

    this._rander();
  }

  //// Private Methods ////

  _displayCaloriesTotal() {
    const totalCaloriesEl = document.getElementById('calories-total');
    totalCaloriesEl.innerHTML = this._totalCalories;
  }
  
  // Update the UI after adding data
  _rander() {
    this._displayCaloriesTotal();
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
tracker.addMeal(breakfast);

// Add new workout
const run = new Workout('Morning Run', 300);
tracker.addWorkout(run);

// Testing
console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._totalCalories);