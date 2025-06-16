import { useState, useEffect } from 'react'
import api from '../lib/axios'
import Navbar from '../components/Navbar'
import RateLimitUI from '../components/RateLimitUI'
import NotFound from '../components/NotFound'
import Card from '../components/Card'

const Home = () => {
    const [is_rate_liited, set_is_rate_limited] = useState(false)
    const [notes, set_notes] = useState([])
    const [loading, set_loading] = useState(true)

    useEffect(() => {
        const fetch_notes = async () => {
            try {
                const res = await api.get('/notes')
                set_notes(res.data)
                set_is_rate_limited(false)
            } catch (error) {
                console.log("Error fetching notes")
                console.log(error.response)
                if (error.response?.status === 429) {
                set_is_rate_limited(true)
                } else {
                toast.error("Failed to load notes")
                }
            } finally {
                set_loading(false)
            }
        }

        fetch_notes();
    }, [])

    return (
        <div className="min-h-screen">
            <Navbar />
            {is_rate_liited && <RateLimitUI />}
            <div className="max-w-7xl mx-auto p-4 mt-6">
                {loading && <div className="text-center text-primary py-10">Loading notes...</div>}
                {notes.length === 0 && !is_rate_liited && <NotFound />}
                {notes.length > 0 && !is_rate_liited && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notes?.map((note) => (
                            <Card key={note._id} note={note} set_notes={set_notes} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home