const Task = require("../model/taskModel");
const asyncHandeler = require("../middlewares/async");
const { customErrorHandler } = require("../errors/customerror");

// Get all tasks
const getAllTasks = asyncHandeler(async (req, res) => {
  const tasks = await Task.find({});
  res
    .status(200)
    .json({ status: "sucess", data: { tasks, nbHits: tasks.length } });
});

// Get single task
const getTask = asyncHandeler(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    return next(customErrorHandler("id not found", 500));
  }
  res.status(200).json(task);
});

// Update task
const updateTask = asyncHandeler(async (req, res,next) => {
  const { id } = req.params;
  const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedTask) {
    return next(customErrorHandler("not found ", 500));
  }
  res.status(200).json(updatedTask);
});

// Delete task
const deleteTask = asyncHandeler(async (req, res,next) => {
  const { id } = req.params;
  const deletedTask = await Task.findByIdAndDelete(id);
  if (!deletedTask) {
    return next(customErrorHandler("Task not found", 400));
  }
  res.status(200).json({ message: "Task deleted successfully", deletedTask });
});

// Create task
const createTask = asyncHandeler(async (req, res) => {
  const { name, completed } = req.body;
  const task = await Task.create({ name, completed });
  res.status(201).json(task);
});

module.exports = { getAllTasks, getTask, deleteTask, updateTask, createTask };
