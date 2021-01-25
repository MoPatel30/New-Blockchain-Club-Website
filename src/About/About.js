import React from 'react'
import "./About.css"


function About(props) {

    return (
        <div className = "profile">

            <h5>{props.name}</h5>
            <h5>{props.title}</h5>
            <p>{props.schooling}</p>
            <p>{props.description}</p>
            
        </div>
    )
}

export default About



export function AboutTwo(props){
    const filler = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    const adam = ["Adam Patel", "Founder & President", "3rd year Finance and Computer Science (minor) Student", filler]
    const jaser = ["Jaser Siddiqui", "Vice President", "3rd year Neuroscience and Psychology Student",  filler]
    const gerardo = ["Gerardo Garcia", "Treasurer", "4th year Finance and Accounting Student",  filler]
    const mopat = ["Mohammed Patel","Lead Website Developer", "2nd year Computer Science and Mathematics (minor) Student", filler]
    const mola = ["Mohammad Larya", "Secretary", "2nd year Computer Science and Mathematics (minor) Student", filler]
    const kevin = ["Kevin Guilluame", "Website Developer", "2nd year Computer Science and Mathematics (minor) Student", filler]
  
  
    return(
        <div>
            <h1>Executive Team</h1>
            <div class="container">
                <div class="card">
                    <h3>{adam[0]}</h3>
                    <h6>{adam[1]}</h6>
                    <p>{adam[2]}</p>
                    <div class="bar">
                    <div class="emptybar"></div>
                    <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle class="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                    </div>
                </div>

                <div class="card">
                    <h3>{jaser[0]}</h3>
                    <h6>{jaser[1]}</h6>
                    <p>{jaser[2]}</p>   
                    <div class="bar">
                    <div class="emptybar"></div>
                    <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle class="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                    </div>
                </div>

                <div class="card">
                    <h3>{gerardo[0]}</h3>
                    <h6>{gerardo[1]}</h6>
                    <p>{gerardo[2]}</p>
                    <div class="bar">
                    <div class="emptybar"></div>
                    <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle class="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                    </div>
                </div>

                <div class="card">
                    <h3 style = {{fontSize: "24px"}}>{mopat[0]}</h3>
                    <h6>{mopat[1]}</h6>
                    <p>{mopat[2]}</p>
                    <div class="bar">
                    <div class="emptybar"></div>
                    <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle class="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                    </div>
                </div>

                <div class="card">
                    <h3 style = {{fontSize: "24px"}}>{mola[0]}</h3>
                    <h6>{mola[1]}</h6>
                    
                    <div class="bar">
                    <div class="emptybar"></div>
                    <div class="filledbar"></div>
                    </div>
                    <p>{mola[2]}</p>
                    <div class="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle class="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                    </div>
                </div>

                <div class="card">
                    <h3>{kevin[0]}</h3>
                    <h6>{kevin[1]}</h6>
                    <p>{kevin[2]}</p>
                    <div class="bar">
                    <div class="emptybar"></div>
                    <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle class="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                    </div>
                </div>

            </div>             
        </div>
    )
}
