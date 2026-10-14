function studentGrade(studentMark) {
  const totalMarks = 100;
  const percentage = (studentMark / totalMarks) * 100;
  let grade;
  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}

function add(a, b) {
  console.log(a + b);
}

console.log(add.name);
console.log(add.length);

// Scope Chain/ Closure
let firstName = "Divya";
function outerFunction() {
  let lastName = "Chandravel";
  function innerFunction() {
    let fullName = firstName + " " + lastName;
    console.log(fullName);
  }
  innerFunction();
}
outerFunction();

// Closure Example
function outer() {
  console.log("Outer function called");
  let outerVariable = 10;
  function inner() {
    console.log("Inner function called");
    console.log(outerVariable);
    console.log("Inner function finished");
  }
  console.log("Outer function finished");
  return inner;
}
const innerFunc = outer();
innerFunc();

function outerFunction() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counterA = outerFunction();
counterA();
counterA();
counterA();
const counterB = outerFunction();
counterB();

//Callback Function
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

function calculator(a, b, operation) {
  return operation(a, b);
}
calculator(10, 5, add);
calculator(10, 5, sub);
calculator(10, 5, mul);
calculator(10, 5, div);
