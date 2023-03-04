/**----
Problem #1: What should the following evaluations return?

2 == '2' ---> true
'he' == 'she' ---> false
2 === 2 --->  true
'true' == true ---> false
true === true ---> true
'true' != true ---> true
'true' !== true ---> true
----**/

/**----
Problem #2: What are the three different ways you can declare a variable? And what is the differences
between them? 

const - locally scoped, meaning that variables assigned using 'const' within a callback function can not be called from outside of that callback function,
         & immutable, meaning that its value cannot be reassigned

let - locally scoped, meaning that variables assigned using 'let' within a callback function can not be called from outside of that callback function,
         & mutable, meaning that its value can be reassigned

var - globally scoped, meaning that variables assigned using 'var' within a callback function can be read from outside of that function
         & mutable, meaning that its value can be reassigned
         This combination is the reason that 'var' should be considered deprecated in favor of 'const' or 'let', since this combination is prone to accidental data mutation
----**/

/**----
Problem #3: Write a simple function for each type of these functions:
- First-Class Function ----**/

function introduceSelf(name) {
  console.log(`Hi! ` + `My name is ${name}.`);
}

/**---- Higher-Order Function ----**/

personalizedGreeting = introduceSelf("Cailin");

/**---- Callback Function ----**/

function doSomethingToCailinsName(callback) {
  callback("Cailin");
}
doSomethingToCailinsName(
  introduceSelf
); /**---- introduceSelf is action as the callback function here ----**/

/**----
Problem #4: What is the value of the console.log of “a”, “b”, and “c” shown in the code below?
----**/

const a = "hi";
console.log(c);
const someFunction = (arg) => {
  const b = "bye";
  if (arg) {
    const c = "see ya!";
    console.log(a);
    console.log(b);
  }
};

/**----
The first console.log(c) will log nothing.
If someFunction is actually called, the enclosed console.log(a) will log 'hi' and the enclosed console.log(b) will log 'bye'
----**/

/**----
Problem #5: Given the following data structure, write a for loop using:
const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
- For statement
- For…of
The for loops should console.log out each of the values in order like this: e. g. 1, 2, 3, 4, 5, 6, 7, 8 …
----**/

const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**---- 'FOR STATEMENT' SOLUTION ----**/

for (let i = 0; i < someArray.length; i++) {
  console.log(someArray[i]);
}

/**---- 'FOR...OF' SOLUTION ----**/

for (i of someArray) {
  console.log(i);
}

/**----
Problem #6: Given the following data structure (label each one as either Mutative or Non-Mutative):
const someArray = [1, 2, 3, 4, 5];
----**/

const someArray = [1, 2, 3, 4, 5];

/**---- Use the concat() method to merge the two arrays to return: [1, 2, 3, 4, 5] ----**/

/**---- What is the second array??? ----**/

/**---- Use the length property to return the length of the array ----**/

someArray.length; /**---- NON-MUTATIVE ----**/

/**---- Use the filter() method to filter out the element “3” and return: [1, 2, 4, 5] ----**/

someArray.filter((num) => num !== 3); /**---- NON-MUTATIVE ----**/

/**---- Use the find() method to find and return the value of 5. ----**/

someArray.find((num) => num === 5); /**---- NON-MUTATIVE ----**/

/**---- Use the slice() method to return back this array: [3, 4] ----**/

someArray.slice(2, 4); /**---- NON-MUTATIVE ----**/

/**---- Use the splice() method to return back this array: [1, 2, 5] ----**/

someArray.splice(2, 2); /**---- MUTATIVE ----**/
someArray;

/**---- Use the includes() method to return back TRUE when I pass in “4” into the includes method. ----**/

someArray.includes(4); /**---- NON-MUTATIVE ----**/

/**---- Use the indexOf() method to return back the index of the element “2” ----**/

someArray.indexOf(3); /**---- NON-MUTATIVE ----**/

/**---- Use the isArray() method to return back TRUE when I pass in the array ----**/

Array.isArray(someArray); /**---- NON-MUTATIVE ----**/

/**---- Use the join() method to return back: “1, 2, 3, 4, 5” ----**/

someArray.join(", "); /**---- NON-MUTATIVE ----**/

/**---- Use the map() method to return back a new array: [2, 4, 6, 8, 10] ----**/

someArray.map((num) => num * 2); /**---- NON-MUTATIVE ----**/

/**---- Use the pop() method to return back a new array: [1, 2, 3, 4] ----**/

someArray.pop(); /**---- MUTATIVE ----**/
someArray;

/**---- Use the push() method to return back a new array: [1, 2, 3, 4, 5, 6] ----**/

someArray.push(6); /**---- MUTATIVE ----**/
someArray;

/**---- Use the shift() method to return back a new array: [2, 3, 4, 5] ----**/

someArray.shift(); /**---- MUTATIVE ----**/
someArray;

/**---- Use the unshift() method to return back a new array: [0, 1, 2, 3, 4, 5] ----**/

someArray.unshift(0); /**---- MUTATIVE ----**/
someArray[
  /**---- Sort this array [9, 1, 3, 5] to return from smallest to largest using the sort() method, should return:
[1, 3, 5, 9] ----**/

  (9, 1, 3, 5)
].sort(); /**---- MUTATIVE ----**/

/**---- Use the reduce() method to return back the sum of all numbers in the array ----**/

/**---- for someArray: ----**/

const initialValue = 0;
someArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
); /**---- NON-MUTATIVE ----**/

/**---- Problem #7: Given the following data structure:
const someObject = {
 color: 'black'
}
----**/

const someObject = {
  color: "black",
};

/**---- Use the assign() method to add a new key value pair of: name: ‘john doe’ ----**/

Object.assign(someObject, { name: "john doe" });

/**---- Use the dot notation to add a new key value pair of: age: 22 ----**/

someObject.age = 22;

/**---- Use the bracket notation to add a new key value pair of: address: ‘123 test address’ ----**/

someObject["address"] = "123 test address";

/**---- Use the keys() method to return a array back of the keys: [“color”, “name”, “age”, “address”] ----**/

Object.keys(someObject);

/**---- Use the values() method to return a array back of the values: [“black”, “john doe”, “22”, “123 test
address”] ----**/

Object.values(someObject);

/**---- Use the for…in loop against this object to console.log each of the keys values.
Your terminal should return:
- // black
- // john doe
- // 22
- // 123 test address
----**/

for (i in someObject) {
  console.log(someObject[i]);
}

/**---- Problem #8: Given the following data structure: ----**/
const numbers = [
  {
    num: 1,
  },
  {
    num: 2,
  },
  {
    num: 3,
  },
];

/**---- Use either the for statement or for…of loop to console.log each of the keys. Values.
Your terminal should return
// 1
// 2
// 3
----**/

for (i of numbers) {
  console.log(i.num);
}

/**---- Problem #9: Create a new Set() object
- Add a new value of: ‘john doe’
- Check if the value of ‘john doe’ exists
- Remove the value of ‘john doe’
----**/

const newSetObject = new Set();
newSetObject.add("john doe");
newSetObject.has("john doe");
newSetObject.delete("john doe");

/**---- Problem #10: Create a new Map() object
- Add a new key-value pair of: name: ‘john doe’
- Check if the value ‘john doe’ exists
- Remove the key-value pair of ‘john doe’
----**/

const newMapObject = new Map();
newMapObject["name"] = "john doe";
Object.values(newMapObject).includes("john doe");
delete newMapObject.name;

/**---- Problem #11: Explain what asynchronous programming means in 3 sentences.

Asynchronous programming means that each line of code does not wait for the previous line or lines to finish running in order to run itself. 
This means that in some cases, lines of code farther down in the file will output results earlier than the lines above output results.
This can be useful if one of the tasks included takes a long time to run and would stall or freeze the rest of the process if the program 
were to wait for the code to finish running before moving on the next task.
----**/

/**---- Problem #12: Explain what call back hell is. 

A function with multiple layers of callback functions nested within it is referred to as "callback hell." It is very difficult to read and 
to diagnose when things go wrong. It can also create a blocking effect if any of the functions take a long time to load, as layer
of nesting will need to wait for the one within it to complete before getting to run.
----**/

/**---- Problem #13: Explain what is a promise and describe the possible states of promises. 

A 'Promise' is special Object used as a placeholder for the result of an asynchronous function. Its state can be 'fulfilled', in that the function's
operation was successful, 'rejected', if the operation failed, or 'pending', uncompleted one way or the other,
----**/

/**---- Problem #14: What is async/await?

'async' is a way of declaring a function that allows for easier configuration of asynchronous functions. In a function declared using 'async', 
lines of code can be set to trigger based on certain events determined by the 'await' keyword that can be used within the async function.
----**/

/**---- Problem #15: Create two async functions:
- fetchRickAndMorty
o Using this api: https://rickandmortyapi.com/api/character
o Use a try/catch block
o Your catch block should: console.log(error.message)
o Fetch this api, and the function should return a payload of a ARRAY of the Characters’ name
such as shown below:
§ [“Rick Sanchez”, “Morty Smith”, “Tom Jones”, …. ]
o Hint: What array methods can you use to get the result above??
- fetchMultipleAPIs
o Using these apis:
§ API 1: https://rickandmortyapi.com/api/character/2
§ API 2: https://randomuser.me/api/?results=1
o Use a try/catch block
o Your catch block should: console.log(error.message)
o Using a Promise.all() method, fetch both of these api’s concurrently, and the function should
return a payload of the Names from each payload such as shown below:
§ [“Morty Smith”, “Tony Kim”]
§ The first value “Morty Smith” should be coming from API 1.
§ The second value “Tony Kim” should be coming from API 2. Keep in mind, this second
API will have a new random user each time you call it!
----**/

/**--- I was running super late this week and ran into some technical problems with this one (Problem #15), but I still wanted to get the rest in in a timely manner ---**/

/**---- Problem #16: OOP
In this task create a Shape class. It has three properties: name, sides, and sideLength. This class only models
shapes for which all sides are the same length, like a square or an equilateral triangle.
We'd like you to:
• Add a constructor to this class. The constructor takes arguments for the name, sides,
and sideLength properties, and initializes them.
• Add a new method calcPerimeter() method to the class, which calculates its perimeter (the length of
the shape's outer edge) and logs the result to the console.
• Create a new instance of the Shape class called square. Give it a name of square, 4 sides, and
a sideLength of 5.
• Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the
browser's console as expected.
• Create a new instance of Shape called triangle, with a name of triangle, 3 sides and a sideLength of 3.
• Call triangle.calcPerimeter() to check that it works OK.
----**/

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter = () => {
    return this.sides * this.sideLength;
  };
}

const square = new Shape("square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

/**---- Problem #17: OOP (Part 2)
Next we'd like you to create a Square class that inherits from Shape, and adds a calcArea() method that
calculates the square's area. Also set up the constructor so that the name property of Square object instances
is automatically set to square, and the sides property is automatically set to 4. When invoking the constructor,
you should therefore just need to provide the sideLength property.
Create an instance of the Square class called square with appropriate property values, and call
its calcPerimeter() and calcArea() methods to show that it works OK.
----**/

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
    this.sideLength = sideLength;
  }
  calcArea = () => {
    return this.sideLength * this.sideLength;
  };
}

const square = new Square(10);
square.calcPerimeter();
square.calcArea();
