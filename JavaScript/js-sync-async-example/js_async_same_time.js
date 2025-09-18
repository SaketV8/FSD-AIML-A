const register = () => {
  setTimeout(() => {
    console.log("Registered sucessfully");
  }, 5000);
};

const sendEmail = () => {
  setTimeout(() => {
    console.log("Email sent sucessfully");
  }, 5000);
};

const login = () => {
  setTimeout(() => {
    console.log("Login sucessfully");
  }, 5000);
};

const getData = () => {
  setTimeout(() => {
    console.log("Data fetched sucessfully");
  }, 5000);
};

const displayData = () => {
  setTimeout(() => {
    console.log("Display data sucessfully");
  }, 5000);
};

// this will be printed in sequence
// but after 5000 ms
register();
sendEmail();
login();
getData();
displayData();
