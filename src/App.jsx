import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Component/Home'
import ChatLanding from './Component/ChatLanding'
import Chatpage from './Component/Chatpage'
import About from './Component/About'
import Report from './Component/Report'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chat' element={<ChatLanding />} />
      <Route path='/chatpage'element={<Chatpage/>}/>
      <Route path='/About' element={<About />} />
      <Route path='/Report'element={<Report />} />
      
    
      </Routes>
      </Router>
      
  )
}

export default App

