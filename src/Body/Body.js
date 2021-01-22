import React from 'react'
import "./Body.css"
import logo from "./logo.jpg"


function Body() {
    return (
        <div className = "body-part">
            <div>
                <h2 id = "welcome-tag" style = {{fontWeight: "900"}}><i>Welcome to Blockchain@LUC</i></h2>
                <p style = {{fontWeight: "900"}}>Our mission is to spread awareness of blockchain technology, its history, its continuing impact, and relevant projects. In maintaining this focus, we strive to educate members with a quality understanding of what this space offers, creating leaders who can use their knowledge to seamlessly adapt to the inevitable transition to a fully digitized world as the Information Age progresses.</p>
            </div>
            <img src = {logo} alt = "club logo" style = {{width: "600px", height: "400px"}} />
        </div>
    )
}

export default Body
