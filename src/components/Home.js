import React from "react"
import {useNavigate, NavLink} from 'react-router-dom'
import Navbar from './Navbar';
import image1 from '../images/image5.jpg'
const Home = (props)=>{
    /* let navigate = useNavigate()
    setTimeout(()=>{navigate('/home2')},5000) */
    
   return(
        <div className="home-entire">
            <img src={image1}/>
            <Navbar />
        <div className="home">
          <div className="row">
                <div className="col-2">
                    <p className="red">2023</p>
                    <div className="social_media">
                        <div className="row">
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                        <div className="row">
                        <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="row">
                        <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <p className="red">Residentials</p>
                    <h1 className="display-4 home-h1">Cubes & Art Museum <br/> In Ethiopia</h1>
                    <NavLink to="/projects" className="see-projects">See Projects &gt;</NavLink>
                </div>
                <div className="col-2 home-numbers">
                    <div className="row home-num">
                        <h3 className="col display-5 g-0 fs">01 I</h3>
                        <h3 className="col display-6 g-0 sup">03</h3>
                    </div>
                    <div className="home-dot">
                        <div className="row"><i className="fa-solid fa-circle current"></i></div>
                        <div className="row"><i className="fa-solid fa-circle "></i></div>
                        <div className="row"><i className="fa-solid fa-circle current"></i></div>
                    </div>
                </div>
          </div>
        </div>
        </div>
    )
}

export default (Home)