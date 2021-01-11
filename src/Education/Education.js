import { render } from '@testing-library/react'
import React, {useState} from 'react'
import "./Education.css"


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
            setDisplay("articles")
        }

    }

    function showVideos(){
        setVideos(!videos)
        if(videos){
            setDisplay("videos")
        }

    }

    function showLinks(){
        setLinks(!links)
        if(links){
            setDisplay("links")
        }

    }
  

    return(
        <div>
            <h1>Education</h1>
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
   
