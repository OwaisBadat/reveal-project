import React, {Component} from "react"
import vuecss from './vue.css'

import $ from 'jquery'
import ScrollMagic from 'scrollmagic';

//images
import above from './AboveTilted.jpg'
import Front from './Front.jpg'
import Rear from './Rear.jpg'
import Side from './Side.jpg'
import Top from './Top.jpg'



class Vue extends React.Component {


    componentDidMount() {
      // $(function () { // wait for document ready
      //   // init
      //   var controller = new ScrollMagic.Controller({
      //     globalSceneOptions: {
      //       triggerHook: 'onLeave'
      //     }
      //   });
    
      //   // get all slides
      //   var slides = document.querySelectorAll("section.panel");
    
      //   // create scene for every slide
      //   for (var i=0; i<slides.length; i++) {
      //     new ScrollMagic.Scene({
      //         triggerElement: slides[i]
      //       })
      //       .setPin(slides[i])
      //       .addIndicators() // add indicators (requires plugin)
      //       .addTo(controller);
      //   }
      // });
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
            marginBottom: "0px"
          }
          const picSpacetop={
            marginTop: "2%"
          }
        return (
            <div>
            <div className="rela-block about-us-section" id="aboutSection">
            <div id="vueAnimation">
            <div id="vueAnimationTop" style={picSpace}>
            <img src={Front} style={picSpacetop}/>
              <div id="text">
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
                </div>
                <img src={Rear} style={picSpacetop}/>
                </div>
                <div id="vueAnimationBottom" style={picSpace}>
                  <img src={above} />
                  <img src={Side} />
                  <img src={Top} />
              </div>
              </div>
              </div>
            </div>

        )
    }
}


export default Vue;