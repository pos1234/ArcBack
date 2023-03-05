import React from "react"
import image1 from '../images/photo(1).png'
import image2 from '../images/photo(2).png'
import image3 from '../images/photo(3).png'
import image4 from '../images/photo(4).png'
import image5 from '../images/photo(5).png'
import image6 from '../images/photo.png'
import image7 from '../images/unnamed.png'

import Navbar from './Navbar'
import Footer from './Footer'
const Test = (props)=>{
    return(
        <div className="col box" id={props.id}>
            <div className="image-container"><img className="circle" src={props.image} /></div>
            <h3 className="display-8">{props.client}</h3>
            <p>{props.content}</p>
        </div>
    )
}
const Testimonals = ()=>{
    return(
        <div className="client">
            <Navbar />
            <div className="boxes">
                <h2 className="dispaly-5">Client's Testimonal</h2>
                <div className="row">
                    <Test
                     id='first'
                     image={image1}
                     client='Mark Zvilius'
                     content='I needed as-built drawings of my home, and ArckBack Provided timely and professioinal service.'
                    />
                    <Test 
                    image={image2}
                     client='Nicole Reeves'
                     content='They very graciously took on my very difficult project after another contractor resigned.
                     I am beyond happy with the result.'
                    />
                    <Test 
                    image={image3}
                     client='Adam LeBlanc'
                     content='ArcBack did a fantastic job with our site plan and renderings and we could not be happier with the end result.'
                    />
                </div>
                <div className="row">
                    <Test 
                    image={image4}
                     client='Mason B'
                     content='These Guys are true proffessionals. From the initial meeting and drawings through punch out lists and actually getting the key i would 
                     recommened using the for any project.'
                    />
                    <Test 
                    image={image5}
                     client='Andrian Barrios'
                     content='The ArckBack team did an incredible job designing our home. They developed a set of documents that supported the architecture my wife
                     and I were looking for.'
                    />
                    <Test 
                    image={image6}
                     client='Dave Kelly'
                     content='ArcBack made our kitchen and bathrooms a reality! They offered innovative insights for the designs.'
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Testimonals