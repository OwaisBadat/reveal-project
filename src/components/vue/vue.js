import React, {Component} from "react"
import vuecss from './vue.css'
import vue1 from "./vue1.png"
import vue2 from "./vue2.png"



class Vue extends React.Component {


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
            <div>
            {/* <div className="rela-block under-top-section">
              <div className="half-big-text under-top-big-text">Reveal the Vue</div>
              <div className="lines-thing" />
              <p className="under-top-small-text">The patent-pending VUE is a high-tech, 3D vision aid for people suffering from debilitating vision loss caused by retinal diseases such as age-related macular degeneration (AMD), diabetic retinopathy, and retinitis pigmentosa, as well as other vision disorders such as hemianopia, and glaucoma.  These diseases affect over 17 million people in the United States, and over ten times that amount worldwide. The VUE has the capability to give these people back some of their independence and improve their quality of life.  In addition, we are pursuing Medicare coverage to minimize the out-of-pocket costs for patients to purchase the VUE, but we have not been approved for this yet. </p>
            </div> */}
            <div className="rela-block about-us-section" id="aboutSection">
                <div className="product-one">
              <h1 className="half-big-text has-border"  style={whiteStyle}>Vue</h1>
              <div id="explore3">
                  <a className="has-lines black" style={whiteStyle} href="#ourTech">Learn More</a>
                </div>
              <p></p>
              <div>
                <img src={vue1} />
                <img src={vue2} />
              </div>
              </div>
            </div>
            </div>
        )
    }
}


export default Vue;