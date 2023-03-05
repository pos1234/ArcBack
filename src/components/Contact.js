import React from "react"
import Navbar from './Navbar'
import Footer from './Footer'
const Contact = ()=>{
    return(
        <div>
            <Navbar />
            <div className="row contact">
                <div className="col headline" >
                    <button className="btn btn-primary"> Look At Google Maps <i > ----</i></button>
                    <h2 className="display-5">Contact Us</h2>
                </div>
                <div className="col forms">
                    <form>
                    <label for='name'>Name</label>
                    <input type='text' name='name'/>
                    <label for='emial'>E-mail</label>
                    <input type='text' name='email'/>
                    <label for='phone'>Phone</label>
                    <input type='text' name='phone'/>
                    <label for='message'>Message</label>
                    <input type='text' name='message'/>
                    <div className="row submits">
                        <div className="col"><i className="fa-solid fa-cloud-arrow-up"></i> <input type='file'/></div>
                        <div className="col"><button className="btn btn-primary" type="submit"> SEND MESSAGE  <i > --------</i></button></div>
                    </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact