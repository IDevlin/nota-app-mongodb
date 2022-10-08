import express from 'express';
import Note from '../models/NotesSchema.js';
import expressAsyncHandler from 'express-async-handler';

const notesRouter = express.Router();

//Add New Note
notesRouter.post(
  '/add',
  expressAsyncHandler(async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
      res.send({ message: 'Must have title and description' });
    } else {
      const newNote = new Note({
        title: req.body.title,
        description: req.body.description,
      });
      const note = await newNote.save();
      res.status(201).send({ message: 'New note created', note });
    }
  })
);
//Get Notes
notesRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const notes = await Note.find().sort({ date: 'desc' });
    res.send({ notes });
  })
);

//Edit Note
notesRouter.put(
  '/edit-note/:id',
  expressAsyncHandler(async (req, res) => {
    const { title, description } = req.body;
    const note = await Note.findByIdAndUpdate(req.params.id, {
      title,
      description,
    });
    res.send({ message: 'Note updated' });
  })
);

//Delete Note
notesRouter.delete(
  '/delete/:id',
  expressAsyncHandler(async(req, res) => {
   const note = await Note.findByIdAndDelete(req.params.id);
   res.send({ message: 'Note deleted'});
  })
);
export default notesRouter;
