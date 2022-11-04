import { useState } from 'react'
import './App.scss'

import { Route, Routes } from 'react-router-dom'
import Dashboard from './views/Dashboard/Dashboard'
import Inbox from './views/Inbox/Inbox'
import Calender from './views/Calender/Calender'
import Artist from './views/Artist/Artist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/artist" element={<Artist />} />
      </Routes>
     
    </div>
  )
}

export default App
