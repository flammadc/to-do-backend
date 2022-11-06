const express = require("express");
const router = express.Router();

const {
  showTodo,
  searchTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

// routing
router.get("/", showTodo);

router.get("/:id", searchTodo);

router.post("/", createTodo);

router.delete("/:id", deleteTodo);

router.patch("/:id", updateTodo);

router.get("/dashboard", (req, res) => {
  res.json({
    title: "Dashboard Page",
    body: "lorem ipsum...",
  });
});

module.exports = router;
