import React from 'react'
import "./Footer.css"
//import {IoLogoTwitter,IoLogoMedium} from "react-icons/io5";
import Contact from "../Contact/Contact"


function Footer() {
    return (
        <div className = "footer">
            
            
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
