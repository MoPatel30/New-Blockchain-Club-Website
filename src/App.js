import './App.css';
import React from 'react';
//import Bootstrap from "bootstrap"
//import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Body/Body"
import About from "./About/About"
import Education, {Dropdown} from "./Education/Education"
import Footer from "./Footer/Footer"
import Sponsors from './Sponsors/Sponsors';
import Track  from './Crypto/Track';
import Particles from 'react-particles-js'
import { SponsorData } from './Sponsors/SponsorData';




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
                          "value_area": 600
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
              <a className = "link" href="#"><strong>Home</strong></a>
            </li>
            <li>
              <a className = "link" href="#education"><strong>Education</strong></a>
              </li>
            <li>
              <a className = "link" href="#about"><strong>About</strong></a>
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
        <div className = "education-pos">
          <Dropdown />
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

        </div>
      </section>
    
      <div className="sponsors-pos">
            <div>Check Out Our Sponsors!!</div>
            <Sponsors slides={SponsorData}/>
          </div>


      <div className="footer-pos">
        <Footer />
      </div>


    </div>
  );
}

export default App;
