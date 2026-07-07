import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Component/Home'
import ChatLanding from './Component/ChatLanding'
import Chatpage from './Component/Chatpage'
import About from './Component/About'
import Report from './Component/Report'
import Safety from './Component/safety'
import Contact from './Component/Contact'
import PrivacyPolicy from './Component/privacypolicy'
import TermsOfUse from './Component/Termscondition'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chat' element={<ChatLanding />} />
      <Route path='/chatpage' element={<Chatpage />} />
      <Route path='/About' element={<About />} />
      <Route path='/Report' element={<Report />} />
      <Route path='/safety' element={<Safety />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/privacypolicy' element={<PrivacyPolicy />} />
      <Route path='/termscondition' element={<TermsOfUse />} />
    
      </Routes>
      </Router>
      
  )
}

export default App

