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
/* import './assets/fonts/css/all.min.css' */

/* import App from './App'
 */import { BrowserRouter } from 'react-router-dom';
/* ReactDOM.render(<App />,document.getElementById('root'))
 */const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([
    {
        path: "/",
        element: <h2>hey i think it works</h2>
    },
    {
        path: "/Projects",
        element: <Projects />
    },
    {
        path: "/Services",
        element: <Services />
    },
    {
        path: "/News",
        element: <News />
    },
    {
        path: "/Clients",
        element: <Clients />
    },
    {
        path: "/Contact",
        element: <Contact />
    },
])
root.render(<BrowserRouter basename='/ArcBack'><RouterProvider router={router}/></BrowserRouter>);
