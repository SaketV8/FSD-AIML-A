const register = () => {
  waitforfiveseconds();
  console.log("Registered sucessfully");
};

const sendEmail = () => {
  waitforfiveseconds();
  console.log("Email sent sucessfully");
};

const login = () => {
  waitforfiveseconds();
  console.log("Login sucessfully");
};

const getData = () => {
  waitforfiveseconds();
  console.log("Data fetched sucessfully");
};

const displayData = () => {
  waitforfiveseconds();
  console.log("Display data sucessfully");
};

function waitforfiveseconds() {
  const ms = new Date().getTime() + 5000;
  while (new Date().getTime() < ms) {}
}

// this will be printed in sequence :)
register();
sendEmail();
login();
getData();
displayData();
console.log("call other application");


// NOTE:
// Teacher Code :

// function register(){
//     waitforfiveseconds();
//  console.log('register end')
// }
// function sendEmail(){
//     waitforfiveseconds();
//  console.log('send Email end')
// }
// function login(){
//     waitforfiveseconds();
//  console.log('login end')
// }
// function getData(){
//     waitforfiveseconds();
//  console.log('get Data end')
// }
// function displayData(){
//     waitforfiveseconds();
//  console.log('Display Data end')
// }
// function waitforfiveseconds(){
//     const ms=new Date().getTime()+5000;
//     while(new Date().getTime()<ms)
//     {}
// }
// register();
// sendEmail();
// login();
// getData();
// displayData();
// console.log('call other application')
