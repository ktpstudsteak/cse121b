/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself



// Step 2: Inside of the object, add a property named name with a value of your name as a string
Name = {
    name: 'Kaden',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.drawception.com%2Fdrawings%2F663622%2FcnSYVShMLa.png&f=1&nofb=1',   
    favoriteFoods: ['bannana', 'cheetos', 'steak'],
    hobbies: ['guitar', 'home', 'silly', 'potato'],
    placesLived: [
        {place: 'Arizona', length: '12 years'},
        {place: 'Idaho', length: '1 year'}
    ],



};

document.getElementById('name').value = Name.name;


// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
let namePlaceholder = document.getElementById('name');
let nItem = document.createElement('p');
nItem.textContent = Name.name;
namePlaceholder.append(nItem);

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').src = Name.image;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').alt = Name.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let foodList = document.getElementById('favorite-foods');
let favFoods = Name.favoriteFoods;

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
favFoods.forEach(foodStuff => {
    let listItem = document.createElement('li');
    listItem.textContent = foodStuff;
    foodList.append(listItem);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hList = document.getElementById('hobbies');
let myHobbies = Name.hobbies;

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
myHobbies.forEach(hobby => {
    let listItem = document.createElement('li');
    listItem.textContent = hobby;
    hList.append(listItem);
});

// Step 8: For each object in the <em>placesLived</em> property:
let liveList = 
// - Create an HTML <dt> element and put its place property in the <dt> element

// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
