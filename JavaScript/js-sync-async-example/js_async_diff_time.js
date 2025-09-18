const register = () => {
  setTimeout(() => {
    console.log("Registered sucessfully");
  }, 4000);
};

const sendEmail = () => {
  setTimeout(() => {
    console.log("Email sent sucessfully");
  }, 3000);
};

const login = () => {
  setTimeout(() => {
    console.log("Login sucessfully");
  }, 1000);
};

const getData = () => {
  setTimeout(() => {
    console.log("Data fetched sucessfully");
  }, 8000);
};

const displayData = () => {
  setTimeout(() => {
    console.log("Display data sucessfully");
  }, 2000);
};

// this will be not printed in sequence :)
register();
sendEmail();
login();
getData();
displayData();
