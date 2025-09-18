const name = "Saket";

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${name} logged in successfully`);
      resolve();
      // }, 2000);
    }, 1000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data fetched sucessfully");
      resolve();
      // }, 2000);
    }, 8000);
  });
}

function calculateData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data calculated sucessfully");
      resolve();
    }, 3000);
  });
}

function sendSMS() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Message sent sucessfully");
      resolve();
    }, 3000);
  });
}

function logout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${name} logged out successfully`);
      resolve();
    }, 3000);
  });
}

// login()
//   .then(getData)
//   .then(calculateData)
//   .then(sendSMS)
//   .then(logout)
//   .catch((error) => {
//     console.log("ERROR", error);
//   });

async function runAll() {
  try {
    await login();
    await getData();
    await calculateData();
    await sendSMS();
    await logout();
  } catch (error) {
    console.log("ERROR", error);
  }
}

runAll()

// This will run all the fucntion parallely
// Promise.all([login(), getData(), calculateData(), sendSMS(), logout()])
//   .then((results) => {
//     // This block runs after ALL promises have resolved
//     console.log("All operations completed successfully!");
//     console.log("Results:", results);
//   })
//   .catch((error) => {
//     // This block runs if any of the promises reject
//     console.error("An error occurred during one of the operations:", error);
//   });

// console.log("This will run anway :)");
