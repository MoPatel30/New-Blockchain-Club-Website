import React from 'react'
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
                <h1> Education </h1>
                <h3>Articles</h3>
                <h3>Related Links</h3>
                <h3>Videos</h3>
            </div>
        )
    }
}

export default Education

/*
function Education() {
    return (
        <div>
            
        </div>
    )
}

export default Education
*/