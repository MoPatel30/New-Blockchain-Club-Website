import React from 'react'
import "./About.css"


function About(props) {

    return (
        <div className = "profile">

            <h5>{props.name}</h5>
            <h5>{props.title}</h5>
            <p>{props.schooling}</p>
            <p>{props.description}</p>
            
        </div>
    )
}

export default About
