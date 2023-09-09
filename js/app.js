class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
  }

  addMeal(meal) {
    this._meals.push(meal);
    this.totalCalories += meal.calories;
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this.totalCalories -= workout.calories;
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
