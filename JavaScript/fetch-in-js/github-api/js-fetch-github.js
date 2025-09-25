const username = "SaketV8";

const github_api_url = `https://api.github.com/users/${username}`;

fetch(github_api_url)
  .then((res) => res.json())
  .then((data) => {
    // console.log({ data });
    console.log(data);
  })
  .catch((err) => {
    console.log("Error:", err.message);
  })
  .finally(() => {
    console.log("Fetch operation complete");
  });
