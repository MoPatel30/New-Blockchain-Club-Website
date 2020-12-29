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
                <p>main part so must make this look good</p>
                <h1> <i>Learn about Bitcoin & Blockchain</i> </h1>
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