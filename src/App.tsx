import { useState } from 'react'
import './App.scss'

import { Route, Routes } from 'react-router-dom'
import HomePage from './views/Dashboard/Dashboard'
import Inbox from './views/Inbox/Inbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
     
    </div>
  )
}

export default App
