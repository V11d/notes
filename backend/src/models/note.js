import mongoose from 'mongoose'

const notes_schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, {timestamps: true})

const Note = mongoose.model('Note', notes_schema)

export default Note