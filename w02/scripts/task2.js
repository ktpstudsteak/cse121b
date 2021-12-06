/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

let myName = "kaden";
  
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

document.querySelector('#name').innerHTML = myName;

// Step 3: declare and instantiate a variable to hold the current year

let year = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file

document.getElementById('year').innerHTML = year;
// Step 5: declare and instantiate a variable to hold the name of your picture
let myPic;

// Step 6: copy your image into the "images" folder
//Okm but i'll use a link
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#pic').src = "https://www.biography.com/.image/t_share/MTc5Mzk0NDcxNjk0MTgxNzA5/macho01_ba.jpg";



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

let foods = ["brotien", " monster", " sunflower seeds"];
// Step 2: place the values of the favorite foods variable into the HTML file

document.querySelector("#food").innerHTML = foods.toString();
// Step 3: declare and instantiate a variable to hold another favorite food
let food2ElectricBoogaloo;

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(food2ElectricBoogaloo);

// Step 5: repeat Step 2
// What does this mean? But ok.

document.querySelector('#name').innerHTML = myName;

// Step 6: remove the first element in the favorite foods array
foods.shift();

// Step 7: repeat Step 2

document.querySelector('#name').innerHTML = myName;
// Step 8: remove the last element in the favorite foods array
foods.pop();

// Step 7: repeat Step 2
//>
document.querySelector('#name').innerHTML = myName;


