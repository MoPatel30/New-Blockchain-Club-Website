import './App.css';
import React from 'react';
//import Bootstrap from "bootstrap"
//import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Body/Body"
import About from "./About/About"
import Education from "./Education/Education"
import Footer from "./Footer/Footer"
import Sponsors from './Sponsors/Sponsors';
import Track  from './Crypto/Track';
import Particles from 'react-particles-js'




function App() {
  const filler = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  const adam = ["Adam Patel", "Founder & President", "3rd year Finance and Computer Science (minor) Student", filler]
  const jaser = ["Jaser Siddiqui", "Vice President", "3rd year Neuroscience and Psychology Student",  filler]
  const gerardo = ["Gerardo Garcia", "Treasurer", "4th year Finance and Accounting Student",  filler]
  const mopat = ["Mohammed Patel","Lead Website Developer", "2nd year Computer Science and Mathematics (minor) Student", filler]
  const mola = ["Mohammad Larya", "Secretary", "2nd year Computer Science and Mathematics (minor) Student", filler]
  const kevin = ["Kevin Guilluame", "Website Developer", "2nd year Computer Science and Mathematics (minor) Student", filler]

  return (
    <div className="App">
      <div>
      <Particles height = "100"
    params={{
	    "particles": {
	        "number": {
	            "value": 80,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        
	        "move": {
	            "speed": 5,
              
          }
        }}} className = "particles" />
	        
      <nav className = "navbar navbar-expand-lg navbar-light bg-light fixed-top">
       
        <h1 style = {{color: "black"}}><i>Blockchain@LUC</i></h1>
       
        <div class="container">
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href = "#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href = "#education">Education</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href = "#about">About</a>
                </li>
              </ul>
            </div>
          </div>

      </nav>

      <div className = "crypto-pos">
        <Track />
      </div>
      </div>

      <div className = "message-style">
        <Body />
      </div>

      <section id = "education">
        <div className = "education-pos">
          <Education />
        </div>
      </section>


      <section id = "about">

        <div className = "about-pos">
          <About name = {adam[0]} title = {adam[1]} schooling = {adam[2]} description = {adam[3]} />
          <About name = {jaser[0]} title = {jaser[1]} schooling = {jaser[2]} description = {jaser[3]} />
          <About name = {gerardo[0]} title = {gerardo[1]} schooling = {gerardo[2]} description = {gerardo[3]} />
          <About name = {mopat[0]} title = {mopat[1]} schooling = {mopat[2]} description = {mopat[3]} />
          <About name = {mola[0]} title = {mola[1]} schooling = {mola[2]} description = {mola[3]} />
          <About name = {kevin[0]} title = {kevin[1]} schooling = {kevin[2]} description = {kevin[3]} />
          
          <div className="sponsors-pos">
            <Sponsors />
          </div>

        </div>
      </section>


    


      <div className="footer-pos">
        <Footer />
      </div>


    </div>
  );
}

export default App;
