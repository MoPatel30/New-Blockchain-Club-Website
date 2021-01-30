import './App.css';
import React from 'react';
//import Bootstrap from "bootstrap"
//import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Body/Body"
import {AboutTwo} from "./About/About"
import {EducationTwo} from "./Education/Education"
import Footer from "./Footer/Footer"
import Sponsors from './Sponsors/Sponsors';
import Track  from './Crypto/Track';
import Particles from 'react-particles-js'
import { SponsorData } from './Sponsors/SponsorData';




function App() {  

  return (
    <div className="App">
      <div id = "home-div">

        <div id = "particles">
          <Particles height = "100"
            params={{
              "particles": {
                  "number": {
                      "value": 100,
                      "density": {
                          "enable": true,
                          "value_area": 900
                      }
                  },
                  
                  "move": {
                      "speed": 2,
                      
                  }
            }}} className = "particles" />
          </div>
               

        <header>
          <h1><em>Blockchain@LUC</em></h1>
          <ul className = "link-style">
            <li>
              <a className = "link" href="#" style = {{color: "white"}}><strong>Home</strong></a>
            </li>
            <li>
              <a className = "link" href="#education" style = {{color: "white"}}><strong>Education</strong></a>
              </li>
            <li>
              <a className = "link" href="#about" style = {{color: "white"}}><strong>About</strong></a>
            </li>
          </ul>
        </header>

        <div className = "crypto-pos">
          <Track />
        </div>

        <div className = "message-style">
          <Body />
        </div>

      </div>


      <div id = "education">
        <div className="education-pos">
          <EducationTwo />          
        </div>
      </div>


      <div id = "about">
        
          <div className="about-pos">
            <AboutTwo />
          </div>
        
        <div className="sponsors-pos">
          <Sponsors slides={SponsorData} />
        </div>      
      </div>
    

      <div className="footer-pos">
        <Footer />
      </div>


    </div>
  );
}

export default App;
