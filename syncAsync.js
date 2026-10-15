function syncFunction1() {
  // Synchronous code here
  console.log("Executing syncFunction1");
  let start = Date.now();
  let delay = 5000; // 5 seconds
  let end = start + delay;
  while (Date.now() <= end) {
    // Busy waiting
  }
  console.log("Finished syncFunction1");
}

function syncFunction2() {
  // Synchronous code here
  console.log("Executing syncFunction2");
  let start = Date.now();
  let delay = 5000; // 5 seconds
  let end = start + delay;
  while (Date.now() <= end) {
    // Busy waiting
  }
  console.log("Finished syncFunction2");
}

function syncFunction3() {
  // Synchronous code here
  console.log("Executing syncFunction3");
  let start = Date.now();
  let delay = 6000; // 6 seconds
  let end = start + delay;
  while (Date.now() <= end) {
    // Busy waiting
  }
  console.log("Finished syncFunction3");
}

// console.log("Dashboard loading...");
// syncFunction1();
// syncFunction2();
// syncFunction3();
// console.log("Dashboard loaded successfully.");

// Asynchronous code example
function function1() {
  console.log("Executing function1");
  console.log("Finished function1");
}
function function2() {
  console.log("Executing function2");
  let start = Date.now();
  let delay = 6000; // 6 seconds
  let end = start + delay;
  while (Date.now() <= end) {
    // Busy waiting
  }
  console.log("Finished function2");
}
function function3() {
  console.log("Executing function3");
  let start = Date.now();
  let delay = 2000; // 2 seconds
  let end = start + delay;
  while (Date.now() <= end) {
    // Busy waiting
  }
  console.log("Finished function3");
}
function function4() {
  console.log("Executing function4");
  console.log("Finished function4");
}

function1();
setTimeout(function2, 10);
setTimeout(function3, 0); // Schedule function3 to run after 0 milliseconds (asynchronously). setTimeout is WebApi used to schedule a function to run after a specified delay. In this case, we are scheduling function2 to run after 0 milliseconds, which means it will be added to the event queue and executed after the current synchronous code has finished executing.
function4();
//callback queue - The callback queue is a queue of functions that are waiting to be executed. When a function is scheduled to run asynchronously (like with setTimeout), it is added to the callback queue. The event loop continuously checks the call stack and the callback queue, and if the call stack is empty, it will take the first function from the callback queue and push it onto the call stack for execution. This allows asynchronous functions to be executed after the current synchronous code has finished executing.

//setInterval - The setInterval function is used to schedule a function to run repeatedly at a specified interval. It takes two arguments: the function to be executed and the interval in milliseconds. The function will be executed repeatedly until clearInterval is called with the interval ID returned by setInterval. In this case, we are scheduling function2 to run every 6 seconds, which means it will be added to the event queue and executed after the current synchronous code has finished executing.
let intervalId = setInterval(function1, 2000); // Schedule function1 to run every 2 seconds
setTimeout(() => {
  clearInterval(intervalId);
}, 12000); // Stop the interval after 12 seconds
