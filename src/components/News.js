import React from "react"
import image1 from '../images/photo(1).png'
import image2 from '../images/photo(2).png'
import image3 from '../images/photo(3).png'
import image4 from '../images/unnamed.png';
import image5 from '../images/photo(5).png'
import image6 from '../images/photo.png'
import image7 from '../images/celebrate.jpg'
import image8 from '../images/render.jpg'
import image9 from '../images/global.jpg'
import image10 from '../images/study.jpg'
import image11 from '../images/women.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
const SingleNews = (props)=>{
    return(
        <div className="OneNews">
          <div className={props.className}>
            <img className="oneImage" src={props.source} alt="images"/>
          </div>
          <div className="OneContent">
            <div className="row tumbnails">
                <p className="col">{props.date}</p>
            </div>
            <div className="row">
                <h3 className="display-10">{props.NewsTitle}</h3>
            </div>
            <div className="row users">
                <div className="col">
                    <img className="circle" src={props.profile} alt="pictures"/>
                </div>
                <div className="col user">
                    <p>{props.UserName}</p>
                    <p>{props.second}</p>
                </div>
            </div>
          </div>
        </div>
    )
}

const News = ()=>{
    return(
        <div className="news-entire">
        <Navbar />
        <h2 className="display-5">Latest News</h2>
        <div className="element-row">
            <div className="element-column">
                <SingleNews
                 source={image7}
                 profile={image1}
                 date='JUNE 28, 2022'
                 NewsTitle='Arcback Celebrates Wins at the Indigo Awards 2022'
                 UserName="Samuel Yonannes"
                 second="2 hours ago"
                />
                <SingleNews source={image8}
                profile={image2}
                date='APRIL 8, 2022'
                 NewsTitle='Arcback is a Finalist for the Architizer One Rendering Challenge'
                 UserName="Mihret Zelalem"
                 second="2 weeks ago"
                  />
                
            </div>
            <div className="element-flex">
                <SingleNews className='no-image' 
                profile={image3}
                date='JULY 15, 2022'
                 NewsTitle='A new film studio is coming great moment for eager creators'
                 UserName="Tomas Girma"
                 second="1 hours ago"
                 />
                <SingleNews source={image11}
                profile={image5}
                date='MARCH 5, 2022'
                 NewsTitle='The Women We Admire To Watch In Architecture'
                 UserName="Tobesta Mulgeta"
                 second="1 month ago"
                />
            </div>
            <div>
                
                <SingleNews source={image9}
                profile={image6}
                date='JUNE 28, 2022'
                 NewsTitle='Single point of contact for global communication'
                 UserName="Mathiwos Ayele"
                 second="3 weeks ago"
                  />
                <SingleNews source={image10}
                profile={image4}
                date='JUNE 28, 2022'
                 NewsTitle='Studied and proven solutions'
                 UserName="Biruk Zewdu"
                 second="2 days ago"
                />
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default News