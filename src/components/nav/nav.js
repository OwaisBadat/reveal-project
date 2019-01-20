import React, {Component} from "react"
import navcss from './nav.css'
import Reveal from './reveal.jpg'
import $ from 'jquery'
import smartglass from "./smartglasses.png"


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
        return (
            <div>
            <div className="nav-bar">
              <div className="nav-logo">Reveal the Vue</div>
              <div className="nav-links-container">
                <a className="nav-link active" href="#topSection" id="topLink">Home</a>
                <a className="nav-link" href="#aboutSection" id="aboutLink">Srugical Glasses</a>
                <a className="nav-link" href="#portfolioSection" id="portfolioLink">VR Headset</a>
                <a className="nav-link" href="#teamSection" id="teamLink">Team</a>
                <a className="nav-link" href="#contactSection" id="contactLink">Contact</a>
              </div>
            </div>
            <div className="rela-block top-section grad-back" id="topSection">
              <div className="abs-cent-text top-text">
                <h1 className="big-text">Reveal The Vue</h1>
                <div className="orbitron top-orb">\\\///</div>
                <p className="top-small-text">Here is a some filler text that I am using to make this look like a site.<br />Not much else going on here so you can move along.</p>
              </div>
            </div>
            <div className="rela-block under-top-section">
              <div className="half-big-text under-top-big-text">Reveal the Vue</div>
              <div className="lines-thing" />
              <p className="under-top-small-text">The patent-pending VUE is a high-tech, 3D vision aid for people suffering from debilitating vision loss caused by retinal diseases such as age-related macular degeneration (AMD), diabetic retinopathy, and retinitis pigmentosa, as well as other vision disorders such as hemianopia, and glaucoma.  These diseases affect over 17 million people in the United States, and over ten times that amount worldwide. The VUE has the capability to give these people back some of their independence and improve their quality of life.  In addition, we are pursuing Medicare coverage to minimize the out-of-pocket costs for patients to purchase the VUE, but we have not been approved for this yet. </p>
            </div>
            <div className="rela-block about-us-section" id="aboutSection">
                <div className="product-one">
              <h1 className="half-big-text has-border">Surgical Glasses</h1>
              <p></p>
              <div id="explore">
              <div className="has-lines black">Explore</div>
              </div>
              <div>
                <img src={smartglass} />
              </div>
              </div>
              <div className="rela-block about-us-quad-container">
                <div className="rela-block quad-row">
                  <div className="quad-half floated left">
                    <h2 className="small-header">Clean Code</h2>
                    <p>Ennui literally hella skateboard normcore leggings franzen bespoke etsy listicle single-origin coffee.</p>
                  </div>
                  <div className="quad-half floated left">
                    <h2 className="small-header">Retina Ready</h2>
                    <p>Kale chips typewriter echo park, meggings sartorial selfies butcher hammock irony.</p>
                  </div>
                </div>
                <div className="rela-block quad-row">
                  <div className="quad-half floated left">
                    <h2 className="small-header">Flexible</h2>
                    <p>Hoodie kickstarter cray man braid, lo-fi waistcoat retro master cleanse hella.</p>
                  </div>
                  <div className="quad-half floated left">
                    <h2 className="small-header">Trending Design</h2>
                    <p>Brooklyn schlitz tacos readymade, portland wolf man braid direct trade fingerstache next level lo-fi pickled.</p>
                  </div>
                </div>
              </div>   
            </div>
            <div className="rela-block portfolio-section" id="portfolioSection">
              <div className="rela-block portfolio-top grad-back">
                <h1 className="half-big-text has-border">VR Headset</h1>
                <div id="explore2">
              <div className="has-lines black">Explore</div>
              </div>
              </div>
              <div className="rela-block portfolio-collage">
                <div className="floated left collage-column">
                  <div className="floated left collage-image third one" />
                  <div className="floated left collage-image third two" />

                </div>
                <div className="floated left collage-column">
                  <div className="floated left collage-image two-thirds six" />
                </div>
              </div>
              <div className="rela-block portfolio-bottom">
                <div className="floated left quarter-div">
                  <div className="abs-cent-text">
                    <h1 className="big-text">Vision Correction</h1>
                    <p>one patient with 20/200 vision in one eye and worse than 20/400 with the other was able to read 20/80 using the VUE. (NOTE: 20/20 is considered normal vision, and that 20/200 is considered legally blind.)</p>
                  </div>
                </div>
                <div className="floated left quarter-div">
                  <div className="abs-cent-text">
                    <h1 className="big-text">Main Point 2</h1>
                    <p>Main Point text</p>
                  </div>
                </div>
                <div className="floated left quarter-div">
                  <div className="abs-cent-text">
                    <h1 className="big-text">Main Point 3</h1>
                    <p>Main Point text</p>
                  </div>
                </div>
                <div className="floated left quarter-div">
                  <div className="abs-cent-text">
                    <h1 className="big-text">Main Point 4</h1>
                    <p>Main Point text</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rela-block team-section" id="teamSection">
              <h1 className="half-big-text has-border">Team</h1>
              <p>Reveal was founded by Jerry Aguren and John Marino, with the guidance of Dr. Warren Cross  who was the catalyst inspiring Jerry to come up with the idea of the VUE.</p>
              <div className="orbitron black-orb">\\\///</div>
              <div className="rela-block profile-view-container">
                <div className="profile-content">
                  <h2 className="half-big-text">Jerry Aguren</h2>
                  <h3 className="small-header">CEO</h3>
                  <p> Jerry has more than thirty-years experience leading and developing new technologies across a broad range of industries. Prior to starting Reveal, Jerry served as Chief Technology Officer for Hewlett-Packard’s Storage Network Division and Chief Technologist of Optics for Hewlett-Packard’s Enterprise business divisions. Prior to Hewlett-Packard, Jerry was also one of the Founders of ATL, a tape library manufacturer that went IPO and was eventually sold for $300M..</p>
                  <div className="lines-thing black" />
                </div>
              </div>
            </div>
            
           
            <div className="rela-block testimonials-section">
              <div className="floated left test-left">
                <div className="abs-cent-text">
                  <h2 className="half-big-text has-border">Testimonials</h2>
                </div>
              </div>
              <div className="floated left test-right">
                <div className="abs-cent-text">
                  <p className="space">"Meggings cold-pressed bitters authentic, locavore butcher etsy gastropub semiotics. Banjo mixtape farm-to-table, whatever poutine master cleanse blog godard raw denim williamsburg vice pinterest forage fap. Master cleanse single-origin coffee
                    farm-to-table, flannel VHS viral XOXO bespoke banh mi tumblr umami. Banh mi brunch DIY, umami wayfarers waistcoat chia small batch brooklyn meggings food truck iPhone next level photo booth before they sold out."</p>
                  <h2 className="small-header">Benedict Cumberbatch</h2>
                  <p><em>Occupation stuff here</em></p>
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