// Promise Chaining example

function step1() {
  return new Promise((resolve, reject) => {
    console.log("Step1 started");
    setTimeout(() => {
      console.log("Step1 Successful");
      resolve();
    }, 3000);
  });
}
function step2() {
  return new Promise((resolve, reject) => {
    console.log("Step2 started");
    setTimeout(() => {
      console.log("Step2 Successful");
      resolve();
    }, 3000);
  });
}
function step3() {
  return new Promise((resolve, reject) => {
    console.log("Step3 started");
    setTimeout(() => {
      console.log("Step3 Successful");
      resolve();
    }, 3000);
  });
}
function step4() {
  return new Promise((resolve, reject) => {
    console.log("Step4 started");
    setTimeout(() => {
      console.log("Step4 Successful");
      resolve();
    }, 3000);
  });
}
// Promise chain
// step1()
//   .then(step2)
//   .then(step3)
//   .them(step4)
//   .then(() => console.log("All steps successful"))
//   .catch(() => console.log("Promise Failed"));

// Async Await
const run = async () => {
  try {
    await step1();
    await step2();
    await step3();
    await step4();
    console.log("Promise Fulfilled");
  } catch (error) {
    console.log("Promise Failed");
  }
};

run();
