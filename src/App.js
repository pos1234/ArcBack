import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './components/Home.js'
import Home2 from './components/Home2.js'
import Home3 from './components/Home3.js'
import Projects from './components/Projects.js'
import Services from './components/Services.js'
import News from './components/News.js'
import Clients from './components/Clients.js'
import Contact from './components/Contact.js'
import Navbar from './components/Navbar.js'
const App = ()=>{
    return(
        <BrowserRouter>
              {/* <Navbar /> */}
              <Routes>
                <Route exact path='/' element={<Home />}/>   
                <Route path='/home2' element={<Home2 />}/>   
                <Route path='/home3' element={<Home3 />}/>   
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/clients' element={<Clients/>}/>
                <Route path='/contact' element={<Contact/>}/>
              </Routes>
        </BrowserRouter>
    
    )
}
export default App
