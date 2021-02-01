import React from 'react'
import "./Contact.css"


function Contact() {
    return ( 
        <div className="contact-us">
            <div className = "contact-form">
                <div className="inputs">
                    <h1 id = "contact-name" style = {{color:  "white"}}><strong>Contact</strong></h1>
                    <input type = "text" class= "input" placeholder= "Name"></input>
                    <input type = "text" class= "input" placeholder = "Email"></input>
                    <input type = "text" class= "input" placeholder = "Subject"></input>
                </div>
                <div className = "message">
                    <textarea placeholder="How can we help?"></textarea>
                    <div className = "submit-btn" type = "submit">Send</div>
                </div>
            </div>
        </div>
    )
}

export default Contact
