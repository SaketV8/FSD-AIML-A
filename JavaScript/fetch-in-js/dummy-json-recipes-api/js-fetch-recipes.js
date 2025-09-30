const url = `https://dummyjson.com/recipes?limit=5`;

const getRecipesData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // looping through array
    // const users = data.users;
    // users.forEach((element) => {
    //   console.log(element);
    // });
  } catch (error) {
    console.log("ERROR: ", error.message);
  }
};

getRecipesData();
