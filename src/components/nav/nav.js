import React, {Component} from "react"
import navcss from './nav.css'
import Reveal from './reveal.jpg'
import $ from 'jquery'
import smartglass from "./smartglasses.png"
import vue1 from "./vue1.png"
import vue2 from "./vue2.png"
import fovean from "./fovean.png"
import LazyLoad from "../slider/slider.js";


class Nav extends React.Component {


    componentDidMount() {


$(document).ready(function(){
    
    // Page scrolling function for the nav-links
    $(".nav-link").click(function(){
        $('html,body').animate({ scrollTop: $(this.hash).offset().top-80 }, 1400);
        return false;
    });
    
    // Back to Top Link
    $(".top-link").click(function(){
        $('html,body').animate({ scrollTop: $("#topSection").offset().top }, 2000);
        return false;
    });
    
    // Function to change the nav-bar on scroll
    $(window).scroll(function(){
        ($(window).scrollTop() >= 110) ? (
            $('.nav-bar').addClass('scrolled')
        ) : (
            $('.nav-bar').removeClass('scrolled')
        );
    });
    
    // Setting the active nav-link based on the scroll position
    // There is a better way to do this but this way works so I'll fix it later
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $('#contactSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#contactLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#teamSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#teamLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#portfolioSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#portfolioLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#aboutSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#aboutLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#topSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#topLink').addClass('active');
        }
    });
    
    });
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
            <div className="nav-bar">
              <div className="nav-logo">Reveal the Vue</div>
              <div className="nav-links-container">
                <a className="nav-link active" href="#topSection" id="topLink">Home</a>
                <a className="nav-link" href="#aboutSection" id="aboutLink">Vue</a>
                <a className="nav-link" href="#portfolioSection" id="portfolioLink">Fovean</a>
                <a className="nav-link" href="#teamSection" id="teamLink">Testimonials</a>
                <a className="nav-link" href="#contactSection" id="contactLink">Contact</a>
              </div>
            </div>
            <div className="rela-block top-section grad-back" id="topSection">
              <div className="abs-cent-text top-text">
                <h1 className="big-text">Reveal</h1>
                <div className="orbitron top-orb">\\\///</div>
                <p className="top-small-text" style={whiteStyle}>Next-Generation Optics for Electronic Vision Aids</p>
                <a className="nav-link" style={whiteStyle} href="">Medical Treatment</a>
                <a className="nav-link" style={whiteStyle} href="#aboutSection">Surgery</a>
              </div>
            </div>
            {/* <div className="rela-block under-top-section">
              <div className="half-big-text under-top-big-text">Reveal the Vue</div>
              <div className="lines-thing" />
              <p className="under-top-small-text">The patent-pending VUE is a high-tech, 3D vision aid for people suffering from debilitating vision loss caused by retinal diseases such as age-related macular degeneration (AMD), diabetic retinopathy, and retinitis pigmentosa, as well as other vision disorders such as hemianopia, and glaucoma.  These diseases affect over 17 million people in the United States, and over ten times that amount worldwide. The VUE has the capability to give these people back some of their independence and improve their quality of life.  In addition, we are pursuing Medicare coverage to minimize the out-of-pocket costs for patients to purchase the VUE, but we have not been approved for this yet. </p>
            </div> */}
            <div className="rela-block about-us-section" id="aboutSection">
                <div className="product-one">
              <h1 className="half-big-text has-border">Vue</h1>
              <p></p>
              <div>
                <img src={vue1} />
                <img src={vue2} />
              </div>
              </div>
              <div className="rela-block about-us-quad-container">
                <div className="rela-block quad-row">
                  <div className="quad-half floated left">
                    <h2 className="small-header">THE WHAT</h2>
                    <p>The VUE is a revolutionary electronic vision-aid device that optically helps those with retinal diseases such as macular degeneration regain proper vision again. </p>
                  </div>
                  <div className="quad-half floated left">
                    <h2 className="small-header">THE WHY</h2>
                    <p>186 million individuals suffer from retinal diseases (macular degeneration, retinitis pigmentosa, diabetic retinopathy, etc) with no current solution that aids to depth perception, clarity, and lifestyle adaptation.</p>
                  </div>
                </div>
                <div className="rela-block quad-row">
                  <div className="">
                    <h2 className="small-header">THE HOW</h2>
                    <p>The VUE allows individuals with retinal diseases to regain their independence by customizable, voice-activated pre-sets for regular activities such as walking, reading, watching television. Users are able to see again with pristine edge detection and resolution with automated detection of near or distance vision. </p>
                  </div>
                </div>
                <div id="explore3">
                  <a className="has-lines black" style={blackStyle} href="#ourTecnology">Learn More</a>
                </div>
              </div>
              <div className="orbitron top-orb">\\\///</div>   
            </div>
            <div className="rela-block about-us-section" id="portfolioSection">
            <div className="product-one">
              <h1 className="half-big-text has-border">Fovean</h1>
              <p></p>
              <div>
                <img src={fovean} />
              </div>
              </div>
              <div className="rela-block about-us-quad-container">
                <div className="rela-block quad-row">
                  <div className="quad-half floated left">
                    <h2 className="small-header">THE WHAT</h2>
                    <p>The Fovean is a surgical electronic vision aid that dynamically switches between total immersion, heads-up display, and augmented reality with simple voice commands. The Foveon’s visual display is unmatched with respect to field-of-view, resolution, and vergence control, presenting the wearer with images equal to real vision, as well as the ability to overlay PET scans, CT scans, X-rays, etc in real time using AR.</p>
                  </div>
                  <div className="quad-half floated left">
                    <h2 className="small-header">THE WHY</h2>
                    <p>Current surgical goggles, loupes, and technology are not ergonomically-suited for long surgical procedures, and cannot be worn for long periods of time without the surgeon experience nausea, dizziness, or dry eyes. Furthermore, there is a delay in image processing between the goggle images and real-time. Current surgical methods do not provide high resolution imaging in real-time nor voice commands to change settings in sterile fields.</p>
                  </div>
                </div>
                <div className="rela-block quad-row">
                  <div className="">
                    <h2 className="small-header">THE HOW</h2>
                    <p>The patented Fovean technology allows surgeons to see using the highest resolution available in current medical technology, to zoom-in and out using voice commands, and overlay 3D images of scans in real-time over the patient (again, using voice activation). The system has zero delays or latency due to the use of a patented polygon mirror providing high-speed eye-tracking.</p>
                  </div>
                </div>
                <div id="explore3">
                  <a className="has-lines black" style={blackStyle} href="#ourTecnology">Learn More</a>
                </div>
              </div>   
            </div>
            <div className="rela-block team-section" id="ourTecnology">
              <h1 className="half-big-text has-border">Our Technology</h1>
              <p>Reveal was founded by Jerry Aguren and John Marino, with the guidance of Dr. Warren Cross  who was the catalyst inspiring Jerry to come up with the idea of the VUE.</p>
              <div className="orbitron black-orb">\\\///</div>
              <div className="rela-block profile-view-container">
                <div className="profile-content">
                  <h2 className="half-big-text">The Vue</h2>
                  {/* <h3 className="small-header">CEO</h3> */}
                  <p> </p>
                  {/* <div className="lines-thing black" /> */}
                </div>
              </div>
              <div className="rela-block profile-view-container">
                <div className="profile-content">
                  <h2 className="half-big-text">The Fovean</h2>
                  {/* <h3 className="small-header">CEO</h3> */}
                  <p>The proprietary Fovean is the most advanced vision system in the world. Its patented technology allows it to automatically align to each surgeons unique optical and physical requirements. DRI will design, develop, and produce the Foveon base technology system and the Application Specific Modules (ASMs) which add additional resources required to support different applications. 
                  <br/><br/>The Fovean system consists of three components: a Foveon display system, a pair of custom Foveon stereo cameras, and a Fovean display controller. These three components define the Foveon’s base technology . The Fovean display is approximately the size of ski goggles. Special micro projectors are positioned above each eye (see figure1) . Moving the projection system from the front of the eye to above the eye allows the Foveon to quickly switch ( using verbal commands) from total immersion, see - through, or augmented reality modes. 
                  <br/><br/>The Fovean display system has incorporated high speed eye tracking, where both eye positions are sent to the Fovean cameras. The Fovean cameras have been designed to track saccadic motion of the human eye with zero latency. The cameras are small enough to mount two in the display goggle.</p>
                  {/* <div className="lines-thing black" /> */}
                </div>
              </div>
            </div>
            

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
            <div className="rela-block contact-section" id="contactSection">
              <h2 className="half-big-text has-border">Contact</h2>
              <h2 className="small-header">Don't hesitate to contact us.</h2>
              <div className="rela-block contact-form-container">
                <div className="contact-half contact-left">
                  <p></p>
                  <div className="rela-block left-quad-container">
                    <div className="contact-quad">5555 W Loop S #150<br />Bellaire<br />TX 77401</div>
                    <div className="contact-quad">asma.mirza@revealthe vue.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rela-block footer-section">
              <h2 className="small-header top-link">Back to Top</h2>
              <div className="rela-block social-buttons-container">
                <div className="social-button facebook-button" />
                <div className="social-button twitter-button" />
                <div className="social-button instagram-button" />
              </div>
              <p></p>
            </div>
          </div>

    
        )
    }
}


export default Nav;