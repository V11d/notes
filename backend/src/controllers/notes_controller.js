import http_status from 'http-status'
import Note from '../models/note.js'

export const get_all_notes = async (_, res) => {
    try {
        const notes = await Note.find().sort({createdAt: -1})
        res.status(http_status.OK).json(notes)
    } catch (error) {
        console.error('Error fetching notes:', error)
        res.status(http_status.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
    }
}

export const get_note_by_id = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)
        if (!note) {
            return res.status(http_status.NOT_FOUND).json({ message: 'Note not found' })
        }
        res.status(http_status.OK).json(note)
    } catch (error) {
        console.error('Error fetching note:', error)
        res.status(http_status.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
    }
}

export const create_note = async (req, res) => {
    const {title, content} = req.body
    if (!title || !content) {
        return res.status(http_status.BAD_REQUEST).json({ message: 'Title and content are required' })
    }
    try {
        const new_note = new Note({title, content})
        await new_note.save()
        res.status(http_status.CREATED).json(new_note)
    } catch (error) {
        console.error('Error creating note:', error)
        res.status(http_status.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
    }
}

export const update_note = async (req, res) => {
    const {title, content} = req.body
    if (!title || !content) {
        return res.status(http_status.BAD_REQUEST).json({ message: 'Title and content are required' })
    }
    try {
        const updated_note = await Note.findByIdAndUpdate(
            req.params.id,
            {title, content},
            {new: true, runValidators: true}
        )
        if (!updated_note) {
            return res.status(http_status.NOT_FOUND).json({ message: 'Note not found' })
        }
        res.status(http_status.OK).json(updated_note)
    } catch (error) {
        console.error('Error updating note:', error)
        res.status(http_status.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
    }
}

export const delete_note = async (req, res) => {
    try {
        const deleted_note = await Note.findByIdAndDelete(req.params.id)
        if (!deleted_note) {
            return res.status(http_status.NOT_FOUND).json({ message: 'Note not found' })
        }
        res.status(http_status.OK).json({ message: 'Note deleted successfully' })
    } catch (error) {
        console.error('Error deleting note:', error)
        res.status(http_status.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
    }
}