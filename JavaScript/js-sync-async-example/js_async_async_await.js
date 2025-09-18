const register = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Registered sucessfully");
      resolve();
    }, 4000);
  });
};

const sendEmail = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email sent sucessfully");
      resolve();
    }, 3000);
  });
};

const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("Login sucessfully");
      // resolve();
      reject("error occured during login");
    }, 1000);
  });
};

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data fetched sucessfully");
      resolve();
    }, 8000);
  });
};

const displayData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Display data sucessfully");
      resolve();
    }, 2000);
  });
};

// This will result in catching the error
// message written inside the reject block
async function runAll() {
  try {
    await register();
    await sendEmail();
    await login();
    await getData();
    await displayData();
  } catch (error) {
    console.log("⭕ ERROR: ", error);
  }
}

runAll();

// This will result in uncaught error
// async function runAll() {
//   await register();
//   await sendEmail();
//   await login();
//   await getData();
//   await displayData();
// }

// try {
//   runAll();
// } catch (error) {
// console.log("⭕ ERROR: ", error);
// }
