import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connect_to_db from './config/db.js'
import notes_routes from './routes/notes_routes.js'
import rate_limiter from './middlewares/rate_limiter.js'

dotenv.config()

const port = process.env.PORT
const app = express()

if (process.env.NODE_ENV !== 'production') {
    app.use(cors({
        origin: 'http://localhost:5173'
    }))
}

app.use(express.json())
app.use(rate_limiter)
app.use('/api/notes', notes_routes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    connect_to_db()
})