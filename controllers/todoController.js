const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

// GET
const showTodo = async (req, res) => {
  try {
    const todo = await Todo.find({}).sort({ updatedAt: -1 });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// SEARCH
const searchTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not a todo" });
  }
  try {
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// POST
const createTodo = async (req, res) => {
  const { title } = req.body;
  try {
    const todo = await Todo.create({ title });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not a todo" });
  }
  try {
    const todo = await Todo.findOneAndDelete({ _id: id });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE
const updateTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not a todo" });
  }
  try {
    const todo = await Todo.findOneAndUpdate({ _id: id }, { ...req.body });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  showTodo,
  searchTodo,
  createTodo,
  deleteTodo,
  updateTodo,
};
