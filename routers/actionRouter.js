const express = require('express');

const router = express.Router();

const db = require('../data/helpers/actionModel');

router.get('/', (req, res) => {
  db
    .get()
    .then(actions => {
      res.status(200).json({ actions });
    })
    .catch(error => res.status(500).json({ error }));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db
    .get(id)
    .then(action => {
      res.status(200).json({ action });
    })
    .catch(error => res.status(500).json({ error }));
});

router.post('/', (req, res) => {
  const updatedAction = req.body;
  db
    .insert(updatedAction)
    .then(action => {
      res.status(200).json({ action });
    })
    .catch(error => res.status(500).json({ error }));
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedAction = req.body;
  db
    .update(id, updatedAction)
    .then(updatedAction => {
      res.status(200).json({ updatedAction });
    })
    .catch(error => res.status(500).json({ error }));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db
    .remove(id)
    .then(response => {
      res.status(200).json({ response });
    })
    .catch(error => res.status(500).json({ error }));
});

module.exports = router;
