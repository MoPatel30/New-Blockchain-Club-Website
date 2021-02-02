import React from 'react'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
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
                        
                        <h3>{props.name}</h3>

                        {
                            props.links.map((link) => (
                                <p>{link}</p>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flipcard
