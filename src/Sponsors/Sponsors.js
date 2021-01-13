// Dont forget npm install 'react-icons'
import React, {useState} from 'react'
import {SponsorData} from './SponsorData'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa'
import './Sponsors.css'
const Sponsors = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const next = () => {
    setCurrent(current === length-1 ? 0 : current + 1);
}

const prev = () =>{
    setCurrent(current === 0 ? length - 1 : current -1);
}




    
    
    return (
        <div className="sponsors">
            
            
            <FaArrowAltCircleLeft className="left-arrow"  onClick = {prev} />
            <FaArrowAltCircleRight className="right-arrow" onClick = {next} />
            {SponsorData.map((slide,index) => {
                return (
                    <div className = {index === current ? 'slide active' : 'slide'} key = {index}>
                       {index === current && (
                       <img src={slide.image} alt = 'Sponsor' className ="picture" />
                       )} 
                       {index === current && ( <div className="text">{slide.text} </div>)}
                      
                      
                    </div>
                    
                )

            })}
        </div>
    )
}

export default Sponsors

