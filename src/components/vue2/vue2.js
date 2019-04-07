import React, {Component} from "react"
import vuecss from './vue.css'
import vue1 from "./vue1.png"
import vue2 from "./vue2.png"
import $ from 'jquery'
import ScrollMagic from 'scrollmagic';



class Vue2 extends React.Component {


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
          const picSpace={
            marginBottom: "30px"
          }
        return (
            <div>
            <div id="aboutSection">
            <div id="vueAnimation">
                <div className="" style={whiteStyle}>
                  <h1 className="">Vue</h1>
                </div>
                <div style={whiteStyle}>
                  <h1 className="" style={seeWorld}>See the World. Again.</h1>
                  <h3 className="" style={spacingStyle}>Move around while wearing the VUE.</h3>
                  <h3 className="" style={spacingStyle}>Edge detection. Vergence control.</h3>
                  <h3 className="" style={spacingStyle}>High resolution. Voice automation.</h3>
                </div>
              <div id="explore3">
                  <a className="has-lines black" style={whiteStyle} href="#ourTech">Learn More</a>
                </div>
              <div style={picSpace}>
                <img src={vue1} />
                <img src={vue2} />
              </div>
              </div>
              </div>
            </div>

        )
    }
}


export default Vue2;