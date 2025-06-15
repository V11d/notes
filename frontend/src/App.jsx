import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Note from './pages/Note'
import Create from './pages/Create'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<Create />} />
                <Route path='/note/:id' element={<Note />} />
            </Routes>
        </div>
    )
}

export default App