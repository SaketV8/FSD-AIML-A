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
      console.log("Login sucessfully");
      // resolve();
      reject("error occured during login")
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

register()
  .then(sendEmail)
  .then(login)
  .then(getData)
  .then(displayData)
  .catch((err) => {
    console.log("⭕ ERROR: ", err);
  });
