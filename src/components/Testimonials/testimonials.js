import React, {Component} from "react"
import LazyLoad from "../slider/slider.js";
import "./testimonials.css"




class Testimonials extends React.Component {


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
            <div className="rela-block testimonials-section" id="teamSection">
            <div className="floated left test-left">
              <div className="abs-cent-text">
                <h2 className="half-big-text has-border">Testimonials</h2>
              </div>
            </div>
            <div className="floated left test-right">
              <div className="abs-cent-text">
              <LazyLoad />
              </div>
            </div>
          </div>

        )
    }
}


export default Testimonials;