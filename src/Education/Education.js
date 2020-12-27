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
            <div>
                <h1> {this.state.hello} </h1>
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