const register = (cb) => {
  setTimeout(() => {
    console.log("Registered sucessfully");
    cb()
  }, 8000);
};

const sendEmail = (cb) => {
    setTimeout(() =>{
        console.log("Email sent sucessfully");
        cb()
    }, 2000)
};

const login = (cb) => {
    setTimeout(() =>{
        console.log("Login sucessfully");
        cb()
    }, 3000)
};

const getData = (cb) => {
    setTimeout(() =>{
        console.log("Data fetched sucessfully");
        cb()
    }, 1000)
};

const displayData = () => {
    setTimeout(() =>{
        console.log("Display data sucessfully");
    }, 5000)
};


// this syntax is termed as callback hell
register(() => {
  sendEmail(() => {
    login(() => {
      getData(() => {
        displayData();
      });
    });
  });
});
