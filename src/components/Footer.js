import React from "react"
const Footer = ()=>{
    return(
        <div>
            <div className="row footer">
                <div className="col address">
                    <h3>Our Adress</h3>
                    <ul>
                        <li>123456 Moscow</li>
                        <li>Meskel Flower</li>
                        <li>Building 47 Office 202</li>
                    </ul>
                </div>
                <div className="col phones">
                    <h3>Our Contacts</h3>
                    <ul>
                        <li>hello@name.com</li>
                        <li>+251 912 345 678</li>
                    </ul>
                </div>
                <div className="col social">
                    <h3>Social Media</h3>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
                <div className="col portifolio">
                    <a rel="noreferrer" href="https://pos1234.github.io/Portifolio" target='_blank'>Paulos Gebeyehu</a>
                </div>
            </div>  
        </div>
    )
}

export default Footer