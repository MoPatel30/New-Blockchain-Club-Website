import './App.css';
import React from 'react';
//import Bootstrap from "bootstrap"
//import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Body/Body"
import About, {AboutTwo} from "./About/About"
import Education, {Dropdown, EducationTwo} from "./Education/Education"
import Footer from "./Footer/Footer"
import Sponsors from './Sponsors/Sponsors';
import Track  from './Crypto/Track';
import Particles from 'react-particles-js'
import { SponsorData } from './Sponsors/SponsorData';
import Flipcard from "./Flipcard/Flipcard"




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


      <section id = "education">
        <EducationTwo />
      </section>


      <section id = "about">
        <div className = "about-pos">
          <AboutTwo />
          <div className="sponsors-pos">  
            <Sponsors slides={SponsorData} />
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
