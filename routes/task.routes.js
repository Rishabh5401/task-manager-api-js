const express = require('express');
const router = express.Router();

let tasks = [];
let taskIdCounter = 1;

// Create a task
router.post('/', (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: taskIdCounter++, title, description, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Get a single task by ID
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
});

// Update a task
router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });

  const { title, description, completed } = req.body;
  task.title = title ?? task.title;
  task.description = description ?? task.description;
  task.completed = completed ?? task.completed;

  res.json(task);
});

// Delete a task
router.delete('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  tasks.splice(index, 1);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
