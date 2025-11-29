import express from "express";
import students from "./data/students.js";

const app = express();

// this middleware is required to parse JSON bodies
app.use(express.json());

// ===============================================================================
// ===============================================================================
app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Fetch All Students", data: students });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch", Error: error.message });
  }
});

// ===============================================================================
// ===============================================================================
app.get("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const student = students.find((s) => s.id === id);

    if (!student) {
      res
        .status(404)
        .json({ message: "student not found", Error: error.message });
      // return early when students not found
      return;
    }
    res.status(200).json({ message: "found student", data: student });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch", Error: error.message });
  }
});

// ===============================================================================
// ===============================================================================
app.post("/add", (req, res) => {
  const { name, course } = req.body;

  try {
    const { name, course } = req.body;

    if (!name || !course) {
      return res.status(400).json({ message: "name and course are required" });
    }

    const obj = { name, course };

    // Create new ID
    const newId =
      students.length > 0 ? students[students.length - 1].id + 1 : 1;

    const newStudent = { id: newId, name, course };
    students.push(newStudent);

    res.status(201).json({ message: "student added", data: newStudent });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add student", Error: error.message });
  }
});

// ===============================================================================
// ===============================================================================
app.delete("/delete/:id", (req, res) => {
  try {
    const id = Number(req.params.id);

    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "student not found" });
    }

    const deletedStudent = students.splice(index, 1)[0];

    res.status(200).json({ message: "student deleted", data: deletedStudent });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete student", Error: error.message });
  }
});
// ===============================================================================
// ===============================================================================
app.put("/edit/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, course } = req.body;

    const student = students.find((s) => s.id === id);
    
    if (!student) {
      return res.status(404).json({ message: "student not found" });
    }

    // Update only provided fields
    if (name) student.name = name;
    if (course) student.course = course;

    res.status(200).json({ message: "student updated", data: student });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update student", Error: error.message });
  }
});
// ===============================================================================
// ===============================================================================

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`🌸 Server is running on http://localhost:${PORT}`);
});
