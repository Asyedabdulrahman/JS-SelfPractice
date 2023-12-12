const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (startingIndex, middleIndex) {
    return [this.categories[startingIndex], this.starterMenu[middleIndex]];
  },
};
//Destructuring Arrays
// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [first, , third] = restaurant.categories;
// console.log(first, third);

// [first, third] = [third, first];
// console.log(first, third);

// const [starting, ending] = restaurant.order(1, 0);
// console.log(starting, ending);

//Destructuring objects
// let { name, starterMenu, mainMenu } = restaurant;
// console.log(name, starterMenu, mainMenu);

// [name, starterMenu, mainMenu] = [mainMenu, name, starterMenu];
// console.log(name, starterMenu, mainMenu);

// const {
//   name: newname,
//   starterMenu: newstartermenu,
//   mainMenu: newmainmenu,
// } = restaurant;
// console.log(newname, newstartermenu, newmainmenu);

//spread operator
const newMainmenu = [...restaurant.mainMenu, "chicken manchurian"];
console.log(newMainmenu);
