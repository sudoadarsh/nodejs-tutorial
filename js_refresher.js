// 1. Objects in Javascript.
const teacher = {
    name: "Slughorn",
    subject: "Potions",
    greet: function() {
        console.log('Good morning students. I\'am ' + this.name);
    },
    // Alternative way to define a method inside an object.
    intro() {
        console.log("I\'ll be teaching you "+ this.subject)
    }
};

teacher.greet()
teacher.intro()

// 2. Arrow functions in javascript.
/**
 * Arrow functions in js differs by two points from a normal function.
 * 1. Obviously, the syntax is shortened.
 * 2. It doesn't have its own scope. If [this] keyword is used inside js, it will
 * look for the latest outer scope with access to [this].
 */
function a() {
    // a has access to this.
    const b = () => {
        // b doesn't have access to this.
        const c = () => {
            // nor does c have any access to this.
            console.log(this)
        }
        c()
    }
    b()
}

a() // Will still output as undefined 'cause it's not defined inside a object.

// 3. Arrays
/**
 * Arrays in Js can hold data of different types.
 */ 
const directory = ["leviosa", 'accio', 12];
const directory1 = ['hogwarts'];

// 3.1 [concate]: combine two arrays and returns a new array without modifying others.
const file1 = directory1.concat(directory);
console.log(file1);

// 3.2 [copyWithin]: copies array elements to another position in the array.
/**
 * 1. It overrites the existing values.
 * 2. Doesn't add items to the array.
 */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(
    // The index to copy the elements to.
    3,
    // Start index
    0,
    // End index
    1);

// 3.3 [entries]: return an array interator object with key value pairs.
const fEntries = fruits.entries();

for (let fruit of fEntries) {
    console.log(fruit);
}

// 3.4 [every]: executes a function for every element in the array.
/**
 * Returns false if all the elements doesn't satify the function.
 * Returns true if all the elements satisfies the function.
 */
const temperatures = [42, 36, 44, 48];
const isSummer = (temperature) => temperature >= 36;
console.log(temperatures.every(isSummer));

// 3.5 [fill]: replaces all the elements in a given array with the element specified.
console.log(temperatures.fill(
    // value to be filled
    "filled",
    // start index.
    temperatures.length - 1
    ));

// 3.6 [filter]: returns a new array with the elements that satisfies a particular condition.
const heatWave = temperatures.filter((value)=>value > 40);
console.log(heatWave);

// 3.7 [find]: retunrs the first element that satifies a particular condition. 
/**
 * [findIndex] is similar but it returns the index of the first element that satisfies a condition.
 * It returns -1 if no index is found.
 */
console.log(temperatures.find((e)=> e > 40));

// 3.7 [forEach]: calls a function for each element of an array. 
// 3.6 [from]: creates a array from any object with a length property.
const alphabets = Array.from('ABCDE');
console.log(alphabets);

// 3.7 [includes]: returns true if a certain element in found in the array. 
// 3.8 [indexOf]: retunrs the index of the specified array element.
// 3.9 [isArray]: checks if an object is an array or not. 
// 3.10 [keys]: creates an array interator object with the keys of the arrray.
// 3.11 [lastIndexOf]: returns in the last index of a repeating element in the array. 

// 3.12 [reduce]: returns a single result, a function's accumulalated result. 
const reduceThis = [1, 2, 3, 4, 5];
const reduceFunction = (
    // the accumulated result/ total.
    total,
    // the value.
    val,
    // the index [optional].
    index,
    // the array that the current element belongs to [optional]. 
    arr,
) => total + val;
console.log(reduceThis.reduce(reduceFunction));

// 3.13 [splice]: this method add and/or remove elements from an array.
const spliceThis = [1, 2, 3, 4, 5];
spliceThis.splice(
    // Position to add/remove items. 
    3,
    // Item to remove.
    1,
    // New items to be added.
    'new1', 'new2', 'new3'
);
console.log(spliceThis);

// 4. Arrays as reference types. 
/**
 * Arrays declared with const keyword can be still modified since the address of the 
 * array remains constant.
 */
const constArray = [1, 2, 3, 4];
constArray.push("new value added");
console.log(constArray);

// 5. Class in javascript. 
/**
 * [constructor]: a special method used for creating and intialising objects inside a class. 
 * Keywords used in class:
 * 1) static: Defines a static method for a class. 
 * 2) super: refers to the parent class. 
 * 3) extends: inherit another class. 
 */

class Car {
    constructor(name) {
        this.name = name;
    }

    revEngine() {
        console.log("Rev engine of "+ this.name);
    }

    // Static method. 
    vroom() {
        console.log('vroom vroom');
    }
}

class Ford extends Car {
    constructor(name, model) {
        // Call the constructor of the super class.
        super(name);
        this.model = model;
    }

    drift() {
        console.log("drifting the hell out of "+ this.name + ' ' + this.model);
    }
}

// 5.1 Creating an instance of the class. 
const mustang = new Ford('ford', 'mustang');
mustang.drift();
mustang.vroom();

// 6. Rest operator in js. 
const restEx = (...args) => {
    return args;
};

console.log(restEx(1, 2, 3, 4, 5, 6));

// 7. Object destructuring. 
const harley = {
    name: 'Harley',
    weight: 250
}

// 7.1 This function only accepts the weight parameter from an object and drops
// the others. 
const isRoadSafe = ({weight}) => weight < 200;

console.log(isRoadSafe(harley));

// 7.2 Another method to destructure objects. 
const {weight} = harley;
console.log(weight);