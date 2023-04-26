// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

const functionArr = [
  () => {
    console.log('first function');
  },
  () => {
    console.log('second function');
  },
  () => {
    console.log('third function');
  }
];

functionArr.forEach((func) => func());

// Create a function as a const and try creating a function normally. Call both functions.
const variableFunction = () => {
  console.log('This is function expression');
};

function regularFunction() {
  console.log('This is function declaration');
}

variableFunction();
regularFunction();

// Create an object that has a key whose value is a function. Try calling this function.

const functionObject = {
  func: () => {
    console.log('This function is an object value');
  }
};

functionObject.func();
