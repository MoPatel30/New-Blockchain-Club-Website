import React from 'react'
import "./Contact.css"


function Contact() {
    return (
        <div className = "contact">
            <h1>Contact Us</h1>
            <p style = {{fontWeight: "900"}}>Reach out to us with any questions or concerns using the form below!</p>
            
            <form>
                <input type = "text"></input>
                <input type = "text"></input>

                <input type = "text"></input>

                <textarea></textarea>

                <button type = "submit">Send</button>
            </form>


        </div>
    )
}

export default Contact
