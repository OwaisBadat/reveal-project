import React from "react"
import LazyLoad from "../slider/slider.js";
import "./testimonials.css";
import hover from 'hover.css';




class Testimonials extends React.Component {


    componentDidMount() {
      }
    
    render() {
      const smallQ ={
        paddingTop: "5%"
      }
      const bigQ ={
        paddingTop: "3.5%"
      }
        return (
            <div className="rela-block testimonials-section " id="teamSection">
            <div className="testimonials">
                <div>
                <div class="block">

                  <h2>Testimonials</h2>
                  <h5>What people are saying about Reveal</h5>

                </div>

                </div>

                <blockquote class="block" style={smallQ}>
                  <p>"The Fovean will disrupt the entire surgical market and revolutionize surgical techniques by eons in a few short years."</p>

                  <footer>
                    <cite><span>—Dr. S. Khan, M.D., Surgeon </span></cite>
                  </footer>
                </blockquote>

                <blockquote class="block" style={smallQ}>

                  <p>"I really believe this is a miracle. It’s a wonderful thing that we can see and be independent again."</p>

                  <footer>
                    <cite><span>—Rosalia Vasquez<br/> Diabetic retinopathy patient, on The VUE </span></cite>
                  </footer>

                </blockquote>

                <blockquote class="block" style={bigQ}>

                  <p>"The VUE is a major medical advancement for vision care, comparable to the development of Lasik surgery, microvascular retinal surgery, and lens implants in terms of potential impact.”</p>

                  <footer>
                    <cite><span>—Warren D. Cross, M.D.<br/>
                    Founder of The Laser Vision Center and Cross Eye Centers</span></cite>
                  </footer>

                </blockquote>

              </div>
          </div>

        )
    }
}


export default Testimonials;