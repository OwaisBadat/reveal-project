import React, {Component} from "react"
import './ourtech.css'
import $ from 'jquery'
import ScrollMagic from 'scrollmagic';
import * as Draggable from "gsap/umd/Draggable";
import * as TweenMax from "gsap/umd/TweenMax";
import { Power0 } from "gsap";

class OurTech extends React.Component {


    componentDidMount() {
      }
    
    render() {

      const foveanMarginStyle ={
        marginBottom: '5%'
      }
        return (
          <div className="rela-block team-section" id="ourTech">
          <h1 className="half-big-text has-border">Our Technology</h1>
          <div className="rela-block profile-view-container">
            <div className="profile-content">
              <h2 className="half-big-text">The Vue</h2>
              <p>
                <b>THE WHAT:</b> The VUE is a revolutionary electronic vision-aid device that optically helps those
                  with retinal diseases such as macular degeneration regain proper vision again. 
              <br/><br/>
                  <b>THE WHY:</b> 186 million individuals suffer from retinal diseases (macular degeneration, retinitis
                    pigmentosa, diabetic retinopathy, etc) with no current solution that aids to depth perception,
                    clarity, and lifestyle adaptation.
              <br/><br/>
                  <b>THE HOW:</b> The VUE allows individuals with retinal diseases to regain their independence by
                    customizable, voice-activated pre-sets for regular activities such as walking, reading, watching
                    television. Users are able to see again with pristine edge detection and resolution with
                    automated detection of near or distance vision.
                  </p>
            </div>
          </div>
          <div className="rela-block profile-view-container">
            <div className="profile-content">
              <h2 className="half-big-text">The Fovean</h2>
              {/* <h3 className="small-header">CEO</h3> */}
              <p style={foveanMarginStyle}>
                <b>THE WHAT:</b> The Fovean is a surgical electronic vision aid that dynamically switches between
                  total immersion, heads-up display, and augmented reality with simple voice commands. The
                  Foveon’s visual display is unmatched with respect to field-of-view, resolution, and vergence
                  control, presenting the wearer with images equal to real vision, as well as the ability to overlay
                  PET scans, CT scans, X-rays, etc in real time using AR. 
              <br/><br/>
                  <b>THE WHY:</b> Current surgical goggles, loupes, and technology are not ergonomically-suited for
                  long surgical procedures, and cannot be worn for long periods of time without the surgeon
                  experience nausea, dizziness, or dry eyes. Furthermore, there is a delay in image processing
                  between the goggle images and real-time. Current surgical methods do not provide high
                  resolution imaging in real-time nor voice commands to change settings in sterile fields.
              <br/><br/>
                  <b>THE HOW:</b> The patented Fovean technology allows surgeons to see using the highest
                  resolution available in current medical technology, to zoom-in and out using voice commands,
                  and overlay 3D images of scans in real-time over the patient (again, using voice activation). The
                  system has zero delays or latency due to the use of a patented polygon mirror providing highspeed
                  eye-tracking.
                  </p>
              {/* <div className="lines-thing black" /> */}
            </div>
          </div>
        </div>
        )}
}


export default OurTech;