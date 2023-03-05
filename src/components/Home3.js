import React from "react"
import {useNavigate} from 'react-router-dom'

const Home = (props)=>{
    let navigate = useNavigate()
    setTimeout(()=>{navigate('/')},5000)
    return(
        <div className="home">
          <div className="row">
                <div className="col-2">
                    <p className="red">2019</p>
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
                    <h1 className="display-4 home-h1">Villa on <br/> Lake</h1>
                    <p className="see-projects">See Projects &gt;</p>
                </div>
                <div className="col-2 home-numbers">
                    <div className="row home-num">
                        <h3 className="col display-5 g-0 fs">03 I</h3>
                        <h3 className="col display-6 g-0 sup">03</h3>
                    </div>
                    <div className="home-dot">
                        <div className="row"><i className="fa-solid fa-circle"></i></div>
                        <div className="row"><i className="fa-solid fa-circle"></i></div>
                        <div className="row"><i className="fa-solid fa-circle current"></i></div>
                    </div>
                </div>
          </div>
        </div>
    )
}

export default Home