const express = require('express');
const { Task } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

router.get('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  res.json(task);
});

router.post('/', async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

router.put('/:id', async (req, res) => {
  await Task.update(req.body, { where: { id: req.params.id } });
  res.json({ success: true });
});

router.delete('/:id', async (req, res) => {
  await Task.destroy({ where: { id: req.params.id } });
  res.json({ success: true });
});

module.exports = router;
