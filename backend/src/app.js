import express from 'express'
import dotenv from 'dotenv'
import { connect_to_db } from './config/db.js'

dotenv.config()

const port = process.env.PORT
const app = express()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    connect_to_db()
})