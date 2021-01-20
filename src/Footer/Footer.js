import React from 'react'
import "./Footer.css"
import {IoLogoTwitter,IoLogoMedium} from "react-icons/io5";

function Footer() {
    return (
        <div className = "footer">
            <h1><i>Check Out our Socials!</i></h1>
            
            <div className="socials">
                <a href='#'><IoLogoTwitter/></a>
                <a href='#'><IoLogoMedium/></a>
            </div>
            
            <div>
                <a href = "#" className = "footer-routes">Home</a>
                <a href = "#education" className = "footer-routes">Education</a>
                <a href = "#about" className = "footer-routes">About</a>
            </div>

        </div>
    )
}

export default Footer
