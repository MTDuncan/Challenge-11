const express = require('express');
const router = express.Router();
const { getNotes, saveNote, deleteNote } = require('./dataManagement');

router.get('/api/notes', async (req, res) => {
  try {
    const notes = await getNotes();
    res.json(notes);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/api/notes', async (req, res) => {
  try {
    const note = req.body;
    const result = await saveNote(note);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete('/api/notes/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await deleteNote(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
