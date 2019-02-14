import React, {Component} from "react"
import homecss from './home.css'
import navcss from '../nav/nav.css'


class Home extends React.Component {

    componentDidMount() {
     
        
      }
    
    render() {
      const blackStyle ={
        color: "black"
      }
      const whiteStyle ={
        color: "white"
      }
      const linestyle={
        color: "white",
        fontSize: "30px",
        margin: "0"
      }
      const row={
        display: "-webkit-inline-box"
      }
        return (
          <div>
          <div className="nav-bar">
            <div className="nav-logo">Reveal</div>
            <div className="nav-links-container">
              <a className="nav-link active" href="#topSection" id="topLink">Home</a>
              <a className="nav-link" href="#aboutSection" id="aboutLink">Vue</a>
              <a className="nav-link" href="#portfolioSection" id="portfolioLink">Fovean</a>
              <a className="nav-link" href="#ourTech" id="ourTechLink">Tech</a>
              <a className="nav-link" href="#teamSection" id="teamLink">Testimonials</a>
              <a className="nav-link" href="#contactSection" id="contactLink">Contact</a>
            </div>
          </div>
          <div className="rela-block top-section grad-back" id="topSection">
            <div className="abs-cent-text top-text">
              <h1 className="big-text">Reveal</h1>
              <div className="orbitron top-orb">\\\///</div>
              <p className="top-small-text" style={whiteStyle}>Next-Generation Optics for Electronic Vision Aids</p>
              <div style={row}>
              <a className="nav-link bottom-small-text" style={whiteStyle} href="#aboutSection">Medical Treatment</a>
              <p style={linestyle}>|</p>
              <a className="nav-link bottom-small-text" style={whiteStyle} href="#portfolioSection">Surgery</a>
              </div>
            </div>
          </div>
          </div>
        )
    }
}


export default Home;