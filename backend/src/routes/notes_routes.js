import express from 'express'
import {get_all_notes, get_note_by_id, create_note, update_note, delete_note} from '../controllers/notes_controller.js'

const router = express.Router()

router.get('/', get_all_notes)

router.get('/:id', get_note_by_id)

router.post('/', create_note)

router.put('/:id', update_note)

router.delete('/:id', delete_note)

export default router