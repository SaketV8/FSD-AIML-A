import express from "express";

const app = express();

// this middleware is required to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: "View Id", data: id });
});

app.post("/data", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  const obj = { name, age };

  res.status(200).json({ message: "user added", data: obj });
});

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`🌸 Server is running on http://localhost:${PORT}`);
});
