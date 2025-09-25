const url = `https://dummyjson.com/users?limit=2`;

// Method 1
// const pr = fetch(url);
// pr.then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error:", err.message);
//   })
//   .finally(() => {
//     console.log("Fetch operation complete");
//   });

// Method 2
// const pr = fetch(url);
// const response = await pr;
// const data = await response.json();
// console.log(data)

// Method 3
// const response = await fetch(url);
// const data = await response.json();
// console.log(data)

// Method 4
const getUserData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // looping through array
    const users = data.users;
    users.forEach((element) => {
      console.log(element);
    });
  } catch (error) {
    console.log("ERROR: ", error.message);
  }
};

getUserData();
