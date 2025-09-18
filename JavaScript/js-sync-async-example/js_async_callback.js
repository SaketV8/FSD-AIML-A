const register = (cb) => {
  setTimeout(() => {
    console.log("Registered sucessfully");
    cb();
  }, 4000);
};

const sendEmail = (cb) => {
  setTimeout(() => {
    console.log("Email sent sucessfully");
    cb();
  }, 3000);
};

const login = (cb) => {
  setTimeout(() => {
    console.log("Login sucessfully");
    cb();
  }, 1000);
};

const getData = (cb) => {
  setTimeout(() => {
    console.log("Data fetched sucessfully");
    cb();
  }, 8000);
};

const displayData = () => {
  setTimeout(() => {
    console.log("Display data sucessfully");
  }, 2000);
};

// this syntax is termed as callback hell
// this will be printed in sequence
register(() => {
  sendEmail(() => {
    login(() => {
      getData(() => {
        displayData();
      });
    });
  });
});
