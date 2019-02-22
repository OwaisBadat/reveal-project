import React, {Component} from "react"
import foveancss from './fovean.css'
import fovean2 from './fovean2.png'
import PageBreak from "../pagebreak/pagebreak";
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';



class Fovean extends React.Component {

    componentDidMount() {
      }
    
    render() {
      const blackStyle ={
        color: "black"
      }
    const whiteStyle ={
        color: "white",
      }
    const spacingStyle ={
        marginTop: "10px",
        marginBottom: "10px",
      }
      const seeWorld ={
        marginTop: "15px",
        marginBottom: "20px",
        fontSize: "40px",
      }
        return (
          <div>
            <div className="rela-block about-us-section" id="portfolioSection">
            <div id="foveanAnimation">
                <div className="product-one" style={whiteStyle}>
                  <h1 className="half-big-text has-border">Fovean</h1>
                  </div>
                <div style={whiteStyle}>
                  <h1 className="" style={seeWorld}>Innovating Surgical Precision</h1>
                  <h3 className="" style={spacingStyle}>High speed eye-tracking.</h3>
                  <h3 className="" style={spacingStyle}>Overlay medical scans on patient during surgery.</h3>
                  <h3 className="" style={spacingStyle}>Resolution higher than 4K. No delays in real-time images.</h3>
                </div>
              <div id="explore3">
               <a className="has-lines black" style={whiteStyle} href="#ourTech">Learn More</a>
                </div>
              <div>
                <img src={fovean2} />
                </div>
                </div>
              </div>
            </div>
        )
    }
}


export default Fovean;