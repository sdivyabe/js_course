function loadDashboardData(id, callback) {
  let error;
  setTimeout(() => {
    if (error) {
      return callback(error, null);
    }
    console.log("Fetching user data...");
    setTimeout(() => {
      if (error) {
        return callback(error, null);
      }
      console.log("Fetching user friend list...");
      setTimeout(() => {
        // error = 'User not found';
        if (error) {
          return callback(error, null);
        }
        console.log("Fetching user details...");
        setTimeout(() => {
          if (error) {
            return callback(error, null);
          }
          console.log("Fetching user comments...");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000); // Simulate an asynchronous operation
}

function errorHandler(error) {
  console.error("An error occurred:", error);
}

// loadDashboardData(1, errorHandler);

// Readability issue: The code above demonstrates a common problem known as "callback hell" or "pyramid of doom," where multiple nested callbacks make the code difficult to read and maintain. Each asynchronous operation is nested within the previous one, leading to deep indentation and reduced clarity.
// Problem: The code is hard to read and maintain due to the nested structure of callbacks. Each asynchronous operation is dependent on the previous one, leading to a pyramid-like structure that can be difficult to follow. This can make it challenging to handle errors and manage the flow of data through the callbacks.
// Solution: To improve readability and maintainability, we can use Promises or async/await syntax to handle asynchronous operations in a more linear and manageable way. This allows us to write asynchronous code that looks more like synchronous code, making it easier to read and understand.

//Promise-based approach

let prm = new Promise((resolve, reject) => {
  console.log("Executor Function...");
  resolve("Success");
  reject("Failure");
});

console.log(prm);
prm
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
