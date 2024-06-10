const menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        this._price = priceToCheck;
      }
    },
    generateRandomMeal() {
      const meals = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
      const prices = [10, 15, 20, 25, 30];
  
      const randomIndexMeals = Math.floor(Math.random() * meals.length);
      const randomIndexPrices = Math.floor(Math.random() * prices.length);
      this._meal = meals[randomIndexMeals];
      this._price = prices[randomIndexPrices];
      
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today’s Special is ${this._meal} for ${this._price}!`;
      } else {
        return "Meal or price was not set correctly!";
      }
    },
  };
  
  menu.generateRandomMeal();
  console.log(menu.todaysSpecial);
  