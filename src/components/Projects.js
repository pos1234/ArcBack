import React from "react"
import image1 from '../images/newSpace.jpg'
import image2 from '../images/Health.jpg'
import image3 from '../images/gym.jpg'
import image4 from '../images/Apart.jpg'
import image5 from '../images/Library.jpg'
import image6 from '../images/School.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
const Project = (props)=>{
    return(
        <div className="col project">
            <img src={props.image} alt=""/>
            <div className="project-title">
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

const Projects = ()=>{
    return(
        <>
        <Navbar />
        <div className="projects-container">
            
            <div className="projects-title">
                <h3 className="display-5">Featured Works</h3>
                <p>We Support the various actors of Architecture, Construction, Urban Planning and Landscape in the 
                    development and communication of their projects.
                </p>
            </div>
        <div className="row projects">
          <Project 
            image={image1}
            title='Palmer Space'
            />
          <Project
           image={image2}
           title='Health Institute'
           />
          <Project
           image={image3}
           title='Port Gymnasium'
           />
        </div>
        <div className="row projects">
          <Project
           image={image4}
           title='Bole Apartment'
           />
          <Project
           image={image5}
           title='Eastwood Library'
           />
          <Project
           image={image6}
           title='Melan School'
           />
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Projects