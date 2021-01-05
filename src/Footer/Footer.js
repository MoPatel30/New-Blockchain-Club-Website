import React from 'react'
import "./Footer.css"


function Footer() {
    return (
        <div className = "footer">
            <h1><i>This is a footer</i></h1>
            <p>Make a cool footer with some info idk</p>
            
            <div>
                <a href = "#" className = "footer-routes">Home</a>
                <a href = "#education" className = "footer-routes">Education</a>
                <a href = "#about" className = "footer-routes">About</a>
            </div>

        </div>
    )
}

export default Footer
