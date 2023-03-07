import React from 'react'
import { BrowserRouter, Route, Routes, createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './components/Home'
import Projects from './components/Projects.js'
import Services from './components/Services.js'
import News from './components/News.js'
import Clients from './components/Clients.js'
import Contact from './components/Contact.js'
const App = ()=>{

    return (
    <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />}/>     
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/clients' element={<Clients/>}/>
                <Route path='/contact' element={<Contact/>}/>
              </Routes>
        </BrowserRouter> )/* (
        createBrowserRouter([
          {
            path:"/",
            element:<Home />
          }
        ])
    
    ) */
}
export default App
