// Dont forget npm install 'react-icons'
import React, {useState, useEffect} from 'react'
import {SponsorData} from './SponsorData'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa'
import './Sponsors.css'


function Sponsors(slides){
    const [current, setCurrent] = useState(0)
    const length = Object.keys(SponsorData).length
      

    const next = () => {
        setCurrent(current === length-1 ? 0 : current + 1);
    }

    const prev = () => {
        setCurrent(current === 0 ? length-1 : current - 1);
    }
    

    return (
        <div className="sponsors">

            <FaArrowAltCircleLeft className="left-arrow"  onClick = {prev} />
            <FaArrowAltCircleRight className="right-arrow" onClick = {next} />
            
            {SponsorData.map((slide, index) => {
                return (
                    <div className = {index === current ? 'slide active' : 'slide'} key = {index}>
                       {index === current && (

                           <div className = "sponsor-pos">  
                                <img src={slide.image} alt = 'Sponsor' className ="picture" />
                                <div className="sponsor-info">
                                    <h2 className = "sponsor-title">{slide.name}</h2>
                                    <p className = "sponsor-desc">{slide.information}</p>
                                </div>
                           </div>   
                       )}     
                    </div>
                    
                )
            })}
        </div>
    )
}


export default Sponsors

