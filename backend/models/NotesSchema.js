import mongoose from 'mongoose'

const NotesSchema = new mongoose.Schema({
   title: {type: String, require: true},
   description: {type: String, require: true},
   date: {type: Date, default: Date.now },

})

const Note = mongoose.model('Note', NotesSchema)

export default Note