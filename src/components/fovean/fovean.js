import React, {Component} from "react"
import foveancss from './fovean.css'
import fovean from './fovean.png'



class Fovean extends React.Component {

    componentDidMount() {
     
        
      }
    
    render() {
        const blackStyle ={
            color: "black"
          }
        const whiteStyle ={
            color: "white"
          }
        return (
            <div className="rela-block about-us-section" id="portfolioSection">
            <div className="product-one">
              <h1 className="half-big-text has-border" style={whiteStyle}>Fovean</h1>
              <div id="explore3">
              <a className="has-lines black" style={whiteStyle} href="#ourTech">Learn More</a>
            </div>
              <p></p>
              <div>
                <img src={fovean} />
              </div>
              </div>
            </div>
        )
    }
}


export default Fovean;