import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home'
import Projects from './components/Projects.js'
import Services from './components/Services.js'
import News from './components/News.js'
import Clients from './components/Clients.js'
import Contact from './components/Contact.js'
import './index.css'
/* import './assets/fonts/css/all.min.css' 
 */
import App from './App'
import { BrowserRouter } from 'react-router-dom';
/* ReactDOM.render(<App />,document.getElementById('root'))
 */const container = document.getElementById('root');
const root = createRoot(container);
/* const router = createBrowserRouter([
    {
        path: "ArcBack/",
        element: <Home />
    },
    {
        path: "ArcBack/Projects",
        element: <Projects />
    },
    {
        path: "ArcBack/Services",
        element: <Services />
    },
    {
        path: "/ArcBack/News",
        element: <News />
    },
    {
        path: "/ArcBack/Clients",
        element: <Clients />
    },
    {
        path: "/ArcBack/Contact",
        element: <Contact />
    },
]) */
root.render(<App />);
