const express = require('express');

const router = express.Router();

const db = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
  db
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => res.status(500).json(error));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db
    .get(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => res.status(500).json(error));
});

router.get('/:id/actions', (req, res) => {
  const { id } = req.params;
  db
    .getProjectActions(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => res.status(500).json(error));
});

router.post('/', (req, res) => {
  const newProject = req.body;
  db
    .insert(newProject)
    .then(newProject => {
      res.status(200).json(newProject);
    })
    .catch(error => res.status(500).json(error));
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const newProject = req.body;
  db
    .update(id, newProject)
    .then(newProject => {
      res.status(200).json(newProject);
    })
    .catch(error => res.status(500).json(error));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db
    .remove(id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => res.status(500).json(error));
});

module.exports = router;
