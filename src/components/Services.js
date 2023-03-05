import React from "react"
import image1 from '../images/image2.jpg'
import image2 from '../images/shell.jpg'
import image3 from '../images/stucco.jpeg'
import image4 from '../images/resident.jpg'
import image5 from '../images/finish.jpg'
import image6 from '../images/kit.jpg'

import Navbar from './Navbar'
import Footer from './Footer'
const Service = (props)=>{
    return(
        <div className="col service service-grid">
            {/* <div className=" col service-grid"> */}
                <div className="">
                    <img src={props.image} alt=""/>
                </div>
                <div className="service-title">
                    <h3>{props.title}</h3>
                    <p>{props.paragraph}</p>
                    <a className="btn btn-primary">learn more</a>
                </div>
            {/* </div> */}
        </div>
        
    )
}

const Services = ()=>{
    let par="hey"
    return(
        <>
        <Navbar />
        <div className="services-container">
            <div className="services-title">
                <h3 className="display-5">Our Services</h3>
                <p>ArcBack is a full service design-build <br/>
                company that is licensed and insured. We specialize <br/>
              in a variety of residentials, commercial, and consultative services</p>
            </div>
        <div className="row services">
          <Service
           image={image1}
           title='Design-Build'
           paragraph='Not only are we Artchitect, but our principal is also a licensed General Contractor and Plumber. We can take your projects from start to finish.'
           />
          <Service
           image={image2}
           title='Shell Construction'
           paragraph='From formwork to reinforcing steel to concrete installation, we can assist you with any shell construction project. Licensed and insured for any size structure.'
           />
          <Service
           image={image3}
           title='Stucco Services'
           paragraph='Full-service stucco services including: new construction stucco, renovation services, and crack repair stucco. All in-house with our professinal crews.'/>
        </div>
        <div className="row services">
          <Service
           image={image4}
           title='Residential New construction'
            paragraph={'If you are considering ground-up constrution for your residence, we are your one-stop-shop. We handle the heavy lifting as your expert so you can focus on creating your dream home.'}
            />
          <Service
           image={image5}
           title='Finish Work'
            paragraph='From paintin to tile to drywall, our skilled tradespersons can help you finish the job strong. Once you are roughed in, you can trust our pros to get the work done.'
            />
          <Service
           image={image6}
           title='Kitchen & Bath Renovations'
            paragraph='When it comes to the most frequented spaces in your home, we understad how to create the perfect kitchen or bath project for your family.'
            />
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Services