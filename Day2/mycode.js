var bottlesOfBeer = 99;

while (bottlesOfBeer > 0) {
    console.log(bottlesOfBeer + 'bottles of beer on the wall');
    bottlesOfBeer = bottlesOfBeer - 1;
}

//Nine times table using while loops, first method
var number = 1;
while (number < 13) {  
    console.log("9 x " + number + " = " + 9*number);
    number++;
    //number = number -1;
    //number--;
}


//Nine times table using while loops, second method
var number = 1;
while (number < 13) {  
    var counter = 1;
    while (counter < 13) {
        console.log(counter + " x " + number + " = " + counter*number);
        counter++;
    }
    // console.log("9 x " + number + "=" + 9*number);
    number++;
    //number = number -1;
    //number--;
}


//Will count 1-10
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//Nine times table using for loop
for (var num = 1; num <= 12; num++) {
    console.log("9 x " + num + " = " + 9*num);
}


//Nine times table using for loop, seconnd method
for (num = 1; num <= 12; num++) {
    for (var counter = 1; counter <= 12; counter ++)
    console.log(counter + " x " + num + " = " + counter*num);
    counter++;
}

//Count from 1 to 100
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        //Says "Fizz" after multiple of three
        console.log(' fizz');
    }
    else if (i % 5 === 0) {
        //Says "Buzz" after multiple of five
        console.log(' buzz');
    } else {
        console.log(i);
    }
}

//Count from 1 to 20
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + " is odd");
    }
}

//Count from 100 to 200
for (var i = 100; i <= 200; i++) {
    console.log("Testing " + i);

    //Stops at the first multiple of 7
    if  (i % 7 == 0) {
        console.log("Found it! " + i)
        break;
    }
}



for (var num = 1; num <= 12; num++) {
    //Stops at the first multiple of 6
    if  (i === 6) {
        console.log("I hate the number 6")
        break;
    }
    console.log(9*num);
}


//Using ARRays
var rainbowColors = ["red", "orange", " yellow", "green", "blue", "indigo", "violet"];
console.log(rainbowColors[0], rainbowColors[6]);


//Using ARRays
var loterryNumber = [33, 72, 64, 18, 17, 85]; 
console.log(loterryNumber.length);

//Using ARRays,  Replacing, Expanding arrrays.
var favoriteFoods = ["Pizza", "Sushi", "Broccoli", "Shrimps", "Bread", "Strawberry", "Salad", "Mango"];
favoriteFoods[2] = "Apples"; //Replaces Broccoli in the array
favoriteFoods.push("Cake"); // Expands the array, will add cake to the array
console.log(favoriteFoods[0]);// Displays specific thing in the array
console.log(favoriteFoods[7]);// Displays specific thing in the array
console.log(favoriteFoods[2]);// Displays specific thing in the array
console.log(favoriteFoods); //Displays everything in the array




var rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
for (var i = 0; i < rainbowColors.length; i++) {
    console.log(rainbowColors[i])
}


//Using ARRays,  Replacing, Expanding arrrays.
var favoriteFoods = ["Pizza", "Sushi", "Broccoli", "Shrimps", "Bread", "Strawberry", "Salad", "Mango"];
favoriteFoods[2] = "Apples"; //Replaces Broccoli in the array
favoriteFoods.push("Cake"); // Expands the array, will add cake to the array
for (var i = 0; i < favoriteFoods.length; i++) {
    console.log(favoriteFoods[i])
}


//Creating an object
var favoriteRecipe = {
    recipeTitle: "Seminary Muffins",
    recipeDescription: "Delicious and healthy muffins. Great for breakfast or a snack. No oil, butter or yeast! You may use oat bran instead of oatmeal if you wish.",
    ingredients: ["1 egg", "2 teaspoons baking powder", "1 1/3 cups mashed ripe banana", "3/4 cup packed brown sugar", "1/3 cup applesauce", "1/2 cup chopped walnuts"],
    directions: "Preheat oven to 350 degrees F (175 degrees C)",
    rating: 3,
    cookTime: 20,
};

favoriteRecipe.servings = true;
favoriteRecipe.rating = 5;
delete favoriteRecipe.cookTime;

console.log(favoriteRecipe.ingredients);
console.log(favoriteRecipe["directions"]);
console.log(favoriteRecipe);


//ARRAYS OF OBJECTS
var movies = [
    {name: "Black Panther", rating: 5},
    {name: "Snoepiercer", rating: -16}
];

for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    console.log("I give " + movie.name + movie.rating + " stars");
}


//Objects can be passed to a function!!
var jolene =  {
    age: 21,
    hairColor: "red",
    likes: ["pizza", "tacos"],
    birthday: {month: 3, day: 7, year: 1996}
}

function describeUser (user) {
    console.log("You are " + user.age + " years old with " + user.hairColor + " hair");
}

describeUser(jolene);


//Objects can be passed to a function!!
var favoriteRecipe =  {
    recipeTitle: "Seminary Muffins",
    recipeDescription: "Delicious and healthy muffins. Great for breakfast or a snack. No oil, butter or yeast! You may use oat bran instead of oatmeal if you wish.",
    ingredients: ["1 egg", "2 teaspoons baking powder", "1 1/3 cups mashed ripe banana", "3/4 cup packed brown sugar", "1/3 cup applesauce", "1/2 cup chopped walnuts"],
    directions: "Preheat oven to 350 degrees F (175 degrees C)",
    rating: 3,
    servings: 8,
}

function describeRecipe (recipe) {
    console.log("Your recipe title is " + recipe.recipeTitle + " and servings are " + recipe.servings);
}

describeRecipe(favoriteRecipe);



//OBJECT CAN ALSO HOLD FUNCTIONS
var jolene =  {
    age: 21,
    hairColor: "red",
    talk: function() {
        console.log("hello");
    },
    eat: function(food) {
        console.log("yum, I love " + food);
    }
};

jolene.talk();
jolene.eat("pizza");



//OBJECT CAN ALSO HOLD FUNCTIONS
var favoriteRecipe =  {
    recipeTitle: "Seminary Muffins",
    recipeDescription: "Delicious and healthy muffins. Great for breakfast or a snack. No oil, butter or yeast! You may use oat bran instead of oatmeal if you wish.",
    ingredients: ["1 egg", "2 teaspoons baking powder", "1 1/3 cups mashed ripe banana", "3/4 cup packed brown sugar", "1/3 cup applesauce", "1/2 cup chopped walnuts"],
    directions: "Preheat oven to 350 degrees F (175 degrees C)",
    rating: 3,
    servings: 8,
    letsCook: function(recipe) {
        console.log("I'm hungry! Lets cook " + recipe.recipeTitle);
    }
};

favoriteRecipe.letsCook(favoriteRecipe);



var array = ["cats", "dogs", "elephants", "rabbits"];
array.reverse();
console.log(array);


// var movies = ["Fast & Furious", "The Mechanic", "DBZ Battle", "The Shawshank Redemption", "Airplane"];
// var books = ["Don Quixote", "Sparta", "Sybil", "Moby-Dick", "HTML", "Hunger Games"];
// console.log(movies.length);
// console.log(books.length);

