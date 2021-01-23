import { render } from '@testing-library/react'
import React, {useState} from 'react'
import Flipcard from '../Flipcard/Flipcard'
import "./Education.css"
import articles from "../imgs/articles.png"
import events from "../imgs/events.png"
import information from "../imgs/information.png"
import videos from "../imgs/videos.png"


// Class component for practice :)
class Education extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hello: "Hello LUC"
        }
    }

    render(){
        return(
            <div className = "education">
                <h1> <i>Learn about Bitcoin & Blockchain</i> </h1>
                <h3>Articles</h3>
                <h3>Related Links</h3>
                <h3>Videos</h3>
                <p>animated cool dropdowns or something</p>
            </div>
        )
    }
}

export default Education



export function Dropdown(){
    const [display, setDisplay] = useState(null)
    const [articles, setArticles] = useState(false)
    const [videos, setVideos] = useState(false)
    const [links, setLinks] = useState(false)


    function showArticles(){
        setArticles(!articles)
        if(articles){
            setVideos(false)
            setLinks(false)
            setDisplay(<Articles />)
        }
        else{
            setDisplay(null)
        }
    }

    function showVideos(){
        setVideos(!videos)
        if(videos){
            setArticles(false)
            setLinks(false)
            setDisplay(<Videos />)
        }
        else{
            setDisplay(null)
        }
    }

    function showLinks(){
        setLinks(!links)
        if(links){
            setArticles(false)
            setVideos(false)
            setDisplay(<Links />)
        }
        else{
            setDisplay(null)
        }
    }
  

    return(
        <div>
         
            <div class="box-1">
                <div onClick ={showArticles} class="btn btn-one">
                    <span>Articles</span>
                </div>
            </div>

            <div class="box-1">
                <div onClick ={showVideos} class="btn btn-one">
                    <span>Videos</span>
                </div>
            </div>

            <div class="box-1">
                <div onClick ={showLinks} class="btn btn-one">
                    <span>Related Links</span> 
                </div>
            </div>

            <div>
                {display}
            </div>

        </div>
    )
}
   



function Articles(){
    return(
        <div className="articles">
            <h1>Articles</h1>
        </div>
    )
}



function Videos(){
    return(
        <div className="videos">
            <h1>Videos</h1>

            <iframe width="560" height="315" class="youtube-player" src="https://www.youtube.com/embed/SSo_EIwHSd4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" class="youtube-player" src="https://www.youtube.com/embed/L-Qhv8kLESY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
    )
}



function Links(){
    return(
        <div className="links">
            <h1>Related Links</h1>
        </div>
    )
}



export function EducationTwo(){


    return(
        <div className = "cards-position">

            <Flipcard name = "Articles" image = {articles} />
            <Flipcard name = "Videos" image = {videos} />
            <Flipcard name = "Related Link" image = {information} />
            <Flipcard name = "Event Information" image = {events} />

        </div>
    )
}


