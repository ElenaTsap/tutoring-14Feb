console.log('RECAP!');

//OBJECTS

let ourObject = {
                    userName: 'Pio',
                    hairColor: 'brown',
                    age: 48,
                    hasDog: false,
                    progLanguages : ['html', 'CSS', 'JavaScript']
                }
let userName ='Eleni';
let age = 35;

let ourSecondObject = {userName: userName, age: age};
//same as
let ourThirdObject = {userName, age};

console.log('ourSecondObject', ourSecondObject);
console.log('ourThirdObject', ourThirdObject);

//another way to declare an object

let person = new Object();
//assigning key-value pairs using dot
person.firstName = 'John';
person.lastName = 'Lennon';
//assigning key-value pairs using []
person['age'] = 35;

/* let key = prompt('give me a key!');
person[key] = prompt('give me a value!')
console.log(person); */

ourSecondObject.age = 97;
console.log('ourSecondObject', ourSecondObject);

//JSON.stringify()
//converts the object into a string

//alert(ourSecondObject); //returns only [object Object]
//alert(JSON.stringify(ourSecondObject)); //returns {"userName":"Eleni","age":97}
let stringObject = JSON.stringify(ourSecondObject);
//alert(stringObject);
//JSON.parse

stringObject = JSON.parse(stringObject);
//alert(stringObject);

//deleting a property
delete ourSecondObject.age;
console.log(ourSecondObject);

//----------------------------------------------------------------------

//ARRAYS

//returns the keys of an object
//Object.keys returns an array with the object keys
console.log(Object.keys(ourThirdObject));
console.log(Object.keys(ourThirdObject)[1]); //age

let animalsArr = ['dog', 'cat', 'bird', 'monkey', {fish: ['tuna', 'dorado', 'catfish'] }, 45, true];
console.log(animalsArr);

//lines 64 and 65 are the same
//ALWAYS use quotations for square brackets anf key values!!!!
console.log(animalsArr[4]['fish'][1]);
console.log(animalsArr[4].fish[1]);

//length of the array
console.log(animalsArr.length);

//arr.push()
//adds an element at the end of the array
//returns the length of the array!
animalsArr[4]['fish'].push('shark');
console.log(animalsArr);
//console.log(animalsArr[4]['fish'].push('shark'));

//arr.pop()
//returns the value that is removed
console.log(animalsArr[4]['fish'].pop());
console.log(animalsArr);

//arr.unshift()
//add an element at the beginning of the array
//returns the length of the array!
animalsArr[4]['fish'].unshift('goldfish');
console.log(animalsArr);

//arr.shift()
//removes an element from the top of the array
//returns the value that is removed
animalsArr[4]['fish'].shift('goldfish');
console.log(animalsArr);

//arr.slice(firstNumber, secondNumber)
//slice returns the values that start with the first index number and end before the second index number
//IT DOES NOT CHANGE THE LENGTH OF THE ARRAY
console.log(animalsArr.slice(1,3)); //returns ["cat", "bird"]

//arr.splice(start[, deleteCount, 'item(s) placed in the start position')
//CHANGES THE LENGTH OF THE ARRAY
//returns the removed items
console.log(animalsArr.splice(2, 2, 'zebra', 'lulu'));
console.log(animalsArr);//items that had index no 5 and 6 are removed and 'zebra was added' at the end

//----------------------------------------------------------------------

//Iterations

//for...in
//loop in the keys of an object
for (const key in ourThirdObject) {
    console.log(key);
}
//for arrays just returns the index number
for (const key in animalsArr) {
    console.log(key);
}

//for...of
//works ONLY for ARRAYS
for (const index of animalsArr) {
    console.log(index);
}


//forEach()

animalsArr.forEach(element => {
    console.log(element);
});

//What is the difference between for...of and for...each?
//for...of is a loop syntax while forEach() is a method
//for...of can be used for any Iterable
//most common Iterables are Strings and Arrays

for (let char of "test") {
    // triggers 4 times: once for each character
    console.log( char ); // t, then e, then s, then t
}

//----------------------------------------------------------------------

//Functions

///function declarations 
//creates a function and wait for the user to call it
//this way does not take any place in memory but might take more time to load since it is not ready

function myFunction(param) {
    //I am a comment
    alert(param)
}
//call the function
myFunction('Did you call me?');

///function expressions - Functions declared as values
//The function runs, assigns the outcome to the constant and waits for the result ready to be used.  
//This way it takes space in the memory.

const mySecFunc = function (param) {
    alert(param);
}

//arrow functions
const myThirdFunc = (param) => {
    alert(param);
}

//why we use the declaration way or the assignment way has to do with time management. Some parts of the website have to be ready to load and others not


