import React from 'react'
import "./Flipcard.css"



function Flipcard(props) {
    return (
        <div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1>{props.name}</h1>
                        <img src={props.image} alt="section image" style= {{marginTop: "25px", width:"150px", height:"150px"}} />
                    </div>
                    <div className="flip-card-back">
                        <a href = "#" style = {{cursor: "pointer"}}>Link</a>
                        <h1>Mo Patel</h1>
                        <p>Student </p>
                        <p>Full-time Umair hater</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flipcard
