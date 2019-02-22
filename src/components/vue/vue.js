import React, {Component} from "react"
import vuecss from './vue.css'
import vue1 from "./vue1.png"
import vue2 from "./vue2.png"
import $ from 'jquery'
import ScrollMagic from 'scrollmagic';



class Vue extends React.Component {


    componentDidMount() {
      $(function () { // wait for document ready
        // init
        var controller = new ScrollMagic.Controller({
          globalSceneOptions: {
            triggerHook: 'onLeave'
          }
        });
    
        // get all slides
        var slides = document.querySelectorAll("div.about-us-section");
    
        // create scene for every slide
        for (var i=0; i<slides.length; i++) {
          new ScrollMagic.Scene({
              triggerElement: slides[i]
            })
            .setPin(slides[i])
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        }
      });
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
            <div className="rela-block about-us-section" id="aboutSection">
            <div id="vueAnimation">
                <div className="product-one" style={whiteStyle}>
                  <h1 className="half-big-text has-border">Vue</h1>
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


export default Vue;