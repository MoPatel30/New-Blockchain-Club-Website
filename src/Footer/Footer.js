import React from 'react'
import "./Footer.css"
import {IoLogoTwitter,IoLogoMedium} from "react-icons/io5";
import Contact from "../Contact/Contact"


function Footer() {
    return (
        <div className = "footer">
            <h1><i>Check Out our Socials!</i></h1>
            
            <div className="socials">
                <a href='#'><IoLogoTwitter/></a>
                <a href='#'><IoLogoMedium/></a>
            </div>
            
            <Contact />

            <div>
                <ul className = "link-style">
                    <li>
                        <a className = "link" href="#"><strong>Home</strong></a>
                    </li>
                    <li>
                        <a className = "link" href="#education"><strong>Education</strong></a>
                    </li>
                    <li>
                        <a className = "link" href="#about"><strong>About</strong></a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Footer
