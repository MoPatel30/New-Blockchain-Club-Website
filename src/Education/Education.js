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

    const eventInfo = ["Stay tuned  for more information regarding future events and meetings!"]
    const articleLinks = ["test", "test"]
    const relatedLinks = ["hello", "g"]
    const videoLinks = ["gab", "btra"]
    

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

    const eventInfo = ["Stay tuned  for more information regarding future events and meetings!"]
    
    const articleLinks = [
        <p><a href="https://blog.lopp.net/bitcoin-timestamp-security/"  id="article-link-style">Bitcoin Timestamp Security </a></p>,
        <p><a href="https://nakamoto.com/what-are-the-key-properties-of-bitcoin/" id="article-link-style"> What are the Key Properties of Bitcoin? </a></p>,
        <p><a href="https://blog.lopp.net/who-controls-bitcoin-core-/" id="article-link-style"> Who Controls Bitcoin Core? </a></p>
    ]

    const relatedLinks = ["More resources will be added here"]
    
    const videoLinks = [ 
        <iframe title = "btc video" id = "btc-video" src = "https://www.youtube.com/embed/SSo_EIwHSd4" style = {{ width: "200px", height: "100px", frameborder:"0", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture, allowfullscreen"}}></iframe>,
        <iframe title = "blockchain video" id = "blockchain-video" src = "https://www.youtube.com/embed/L-Qhv8kLESY" style = {{ width: "200px", height: "100px", frameborder:"0", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture, allowfullscreen"}}></iframe>
    ]


    return(
        <div className = "cards-position">

            <Flipcard name = "Articles" image = {articles} links = {articleLinks} />
            <Flipcard name = "Videos" image = {videos} links = {videoLinks} />
            <Flipcard name = "Related Links" image = {information} links = {relatedLinks} />
            <Flipcard name = "Event Information" image = {events} links = {eventInfo} />

        </div>
    )
}


