import React, {Component} from "react"
import navcss from './nav.css'
import Reveal from './reveal.jpg'
import $ from 'jquery'


class Nav extends React.Component {

    componentDidMount() {

        // Pinspiration
// https://www.pinterest.com/pin/271201208788842829/

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
        } else if ($(window).scrollTop() >= $('#priceSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#priceLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#servicesSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#servicesLink').addClass('active');
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
              <div className="nav-logo">PHOENIX</div>
              <div className="nav-links-container">
                <a className="nav-link active" href="#topSection" id="topLink">Home</a>
                <a className="nav-link" href="#aboutSection" id="aboutLink">About Us</a>
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
              <div className="half-big-text under-top-big-text">Phoenix</div>
              <div className="lines-thing" />
              <p className="under-top-small-text">Kitsch pinterest tacos bicycle rights, yuccie leggings tote bag readymade fixie gentrify freegan small batch put a bird on it. Street art pop-up gochujang, tumblr migas pour-over kombucha skateboard lo-fi umami hammock whatever. Tattooed distillery
                bushwick, mustache sustainable keytar tilde chillwave lumbersexual literally cliche lomo tousled.</p>
            </div>
            <div className="rela-block welcome-section">
              <div className="abs-cent-text welcome-text">
                <h1 className="big-text">Welcome</h1>
                <div className="orbitron black-orb">\\\///</div>
                <p>Direct trade 90's quinoa literally helvetica aesthetic, listicle ugh lo-fi blue bottle deep v vinyl asymmetrical gochujang marfa.</p>
                <div className="has-lines black">Explore</div>
              </div>
            </div>
            <div className="rela-block about-us-section" id="aboutSection">
              <h1 className="half-big-text has-border">About Us</h1>
              <p>Fixie keffiyeh chambray tattooed biodiesel locavore yuccie street art. Pour-over biodiesel cronut forage fap, occupy mixtape offal chillwave.</p>
              <div className="orbitron black-orb">\\\///</div>
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
              <div className="orbitron black-orb">\\\///</div>
              <div className="rela-block about-us-bottom-container">
                <div className="floated left bottom-left-side">
                  <h2 className="small-header">Retina Ready</h2>
                  <div className="lines-thing black" />
                  <p>Brooklyn migas gentrify, helvetica beard listicle yuccie 8-bit cardigan taxidermy knausgaard try-hard. 90's letterpress occupy franzen bushwick try-hard, tofu disrupt wayfarers echo park deep v. Man braid mustache gluten-free put a bird on it flexitarian.</p>
                </div>
                <div className="floated left bottom-right-side">
                  <p>Development</p>
                  <div className="rela-block progress-bar one" />
                  <p>Design</p>
                  <div className="rela-block progress-bar two" />
                  <p>Marketing</p>
                  <div className="rela-block progress-bar three" />
                  <p>Dedication</p>
                  <div className="rela-block progress-bar" />
                </div>
              </div>    
            </div>
            <div className="rela-block portfolio-section" id="portfolioSection">
              <div className="rela-block portfolio-top grad-back">
                <h1 className="half-big-text has-border">Portfolio</h1>
              </div>
              <div className="rela-block portfolio-second">
                <div className="has-lines white">Show All</div>
                <div className="has-lines white">Design</div>
                <div className="has-lines white">Graphics</div>
                <div className="has-lines white">Motion</div>
                <div className="has-lines white">Video</div>
              </div>
              <div className="rela-block portfolio-collage">
                <div className="floated left collage-column">
                  <div className="floated left collage-image third one" />
                  <div className="floated left collage-image third two" />
                  <div className="floated left collage-image third three" />
                </div>
                <div className="floated left collage-column">
                  <div className="floated left collage-image third four" />
                  <div className="floated left collage-image two-thirds five" />
                </div>
                <div className="floated left collage-column">
                  <div className="floated left collage-image two-thirds six" />
                  <div className="floated left collage-image third seven" />
                </div>
              </div>
              <div className="rela-block portfolio-bottom">
                <div className="floated left quarter-div">
                  <div className="abs-cent-text">
                    <h1 className="big-text">8679</h1>
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="floated left quarter-div">
                  <div className="abs-cent-text">
                    <h1 className="big-text">340 K+</h1>
                    <p>Facebook Likes</p>
                  </div>
                </div>
                <div className="floated left quarter-div">
                  <div className="abs-cent-text">
                    <h1 className="big-text">100</h1>
                    <p>Awards</p>
                  </div>
                </div>
                <div className="floated left quarter-div">
                  <div className="abs-cent-text">
                    <h1 className="big-text">3456</h1>
                    <p>Retweets</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rela-block team-section" id="teamSection">
              <h1 className="half-big-text has-border">Team</h1>
              <p>Wolf street art flannel microdosing, fixie viral small batch scenester PBR&amp;B brunch mlkshk asymmetrical. Everyday carry brooklyn green juice, typewriter squid pork belly lomo forage paleo. </p>
              <div className="orbitron black-orb">\\\///</div>
              <div className="rela-block profile-view-container">
                <div className="arrow left" />
                <div className="arrow right" />
                <div className="profile-image" />
                <div className="profile-content">
                  <h2 className="half-big-text">Corn Dog</h2>
                  <h3 className="small-header">Web Developer</h3>
                  <p>Wolf street art flannel microdosing, fixie viral small batch scenester PBR&amp;B brunch mlkshk asymmetrical. Everyday carry brooklyn green juice, typewriter squid pork belly lomo forage paleo.</p>
                  <div className="lines-thing black" />
                </div>
              </div>
            </div>
            <div className="rela-block clients-section">
              <div className="floated left client-part">
                <div className="abs-cent-text">
                  <h2 className="half-big-text has-border">Clients</h2>
                </div>
              </div>
              <div className="floated left client-part" />
              <div className="floated left client-part" />
              <div className="floated left client-part" />
            </div>
            <div className="rela-block services-section" id="servicesSection">
              <div className="rela-block service-row">
                <div className="floated left service-row-half grey-back">
                  <div className="abs-cent-text">
                    <h2 className="half-big-text has-border">Services</h2>
                  </div>
                </div>
                <div className="floated right service-row-half">
                  <div className="abs-cent-text">
                    <h2 className="small-header">Quality over Quantity</h2>
                    <div className="orbitron black-orb">\\\///</div>
                    <p>Brooklyn migas gentrify, helvetica beard listicle yuccie 8-bit cardigan taxidermy knausgaard try-hard.</p>
                  </div>
                </div>
              </div>
              <div className="rela-block service-row">
                <div className="floated right service-row-half black-back">
                  <div className="abs-cent-text wordpress" />
                </div>
                <div className="floated left service-row-half">
                  <div className="abs-cent-text">
                    <h2 className="small-header">Wordpress</h2>
                    <div className="orbitron black-orb">\\\///</div>
                    <p>Brooklyn migas gentrify, helvetica beard listicle yuccie 8-bit cardigan taxidermy knausgaard try-hard. 90's letterpress occupy franzen bushwick.</p>
                  </div>
                </div>
              </div>
              <div className="rela-block service-row">
                <div className="floated left service-row-half black-back">
                  <div className="abs-cent-text weird-one">&lt;/&gt;</div>
                </div>
                <div className="floated right service-row-half">
                  <div className="abs-cent-text">
                    <h2 className="small-header">Pixel Perfect</h2>
                    <div className="orbitron black-orb">\\\///</div>
                    <p>3 wolf moon retro pickled, flexitarian echo park shoreditch keffiyeh direct trade sustainable forage readymade vinyl. Venmo bicycle rights mumblecore, fixie typewriter quinoa street art letterpress vinyl XOXO iPhone</p>
                  </div>
                </div>
              </div>
              <div className="rela-block service-row">
                <div className="floated right service-row-half black-back">
                  <div className="abs-cent-text star" />
                </div>
                <div className="floated left service-row-half">
                  <div className="abs-cent-text">
                    <h2 className="small-header">Minimal</h2>
                    <div className="orbitron black-orb">\\\///</div>
                    <p>Chia microdosing pork belly, occupy bitters pickled ennui cred listicle kale chips portland slow-carb. Leggings VHS readymade, authentic yuccie beard migas XOXO helvetica marfa gentrify. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rela-block our-plans-section" id="priceSection">
              <h2 className="half-big-text has-border">Our Plans</h2>
              <p>Flexitarian craft beer narwhal umami, swag church-key single-origin coffee. Gochujang hoodie cold-pressed, health goth paleo yr fashion axe listicle gentrify blog pinterest jean shorts.</p>
              <div className="orbitron black-orb">\\\///</div>
              <div className="rela-block plans-container">
                <div className="plan">
                  <h2 className="rela-block half-big-text">Basic</h2>
                  <div className="orbitron black-orb">\\\///</div>
                  <p className="rela-block"><span style={{fontFamily: '"Montserrat"', fontSize: '30px', lineHeight: '40px'}}>40$</span>/year</p>
                  <div className="orbitron black-orb">\\\///</div>
                  <ul className="rela-block">
                    <li>Customer Support 24/7</li>
                    <li>Lifetime Updates</li>
                    <li>10GB Cloud Storage</li>
                    <li>10 Email boxes</li>
                    <li>-</li>
                  </ul>
                  <div className="has-lines black">Subscribe!</div>
                </div>
                <div className="plan">
                  <h2 className="rela-block half-big-text">Standard</h2>
                  <div className="orbitron black-orb">\\\///</div>
                  <p className="rela-block"><span style={{fontFamily: '"Montserrat"', fontSize: '30px', lineHeight: '40px'}}>60$</span>/year</p>
                  <div className="orbitron black-orb">\\\///</div>
                  <ul className="rela-block">
                    <li>Customer Support 24/7</li>
                    <li>Lifetime Updates</li>
                    <li>100GB Cloud Storage</li>
                    <li>20 Email boxes</li>
                    <li>-</li>
                  </ul>
                  <div className="has-lines black">Subscribe!</div>
                </div>
                <div className="plan">
                  <h2 className="rela-block half-big-text">Full</h2>
                  <div className="orbitron black-orb">\\\///</div>
                  <p className="rela-block"><span style={{fontFamily: '"Montserrat"', fontSize: '30px', lineHeight: '40px'}}>150$</span>/year</p>
                  <div className="orbitron black-orb">\\\///</div>
                  <ul className="rela-block">
                    <li>Customer Support 24/7</li>
                    <li>Lifetime Updates</li>
                    <li>10 TB Cloud Storage</li>
                    <li>100 Email boxes</li>
                    <li>Unlimited Traffic</li>
                  </ul>
                  <div className="has-lines black">Subscribe!</div>
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
              <p>Crucifix normcore synth, retro aesthetic plaid hashtag keffiyeh actually beard. Kombucha chillwave hoodie fap. Pug 3 wolf moon chia, keytar franzen cray cred slow-carb waistcoat viral farm-to-table sartorial lomo.</p>
              <div className="orbitron black-orb">\\\///</div>
              <div className="rela-block contact-form-container">
                <div className="contact-half contact-left">
                  <h2 className="small-header">Don't hesitate to contact us.</h2>
                  <p>Man braid leggings schlitz semiotics chambray 3 wolf moon blog fashion axe. Shabby chic paleo typewriter asymmetrical, forage chia affogato etsy. Cronut retro meh distillery.</p>
                  <div className="rela-block left-quad-container">
                    <div className="contact-quad">4435 Berkshire Circle<br />Knoxville<br />TN 27912</div>
                    <div className="contact-quad">879-890-9767<br />234-890-1213</div>
                    <div className="contact-quad">mail@mail.com<br />themes.fastwp.net</div>
                    <div className="contact-quad">M-F: 8 AM - 3 PM<br />Sa: 8AM - 12PM<br />Su: Closed</div>
                  </div>
                  <div className="social-button facebook-button" />
                  <div className="social-button twitter-button" />
                  <div className="social-button instagram-button" />
                </div>
                <div className="contact-half contact-right">
                  <input type="text" placeholder="ENTER YOU NAME" className="contact-input" />
                  <input type="text" placeholder="ENTER YOUR EMAIL" className="contact-input" />
                  <input type="text" placeholder="PHONE NUMBER" className="contact-input" />
                  <textarea cols={40} rows={5} placeholder="ENTER YOUR MESSAGE" className="contact-input big-input" defaultValue={""} />
                  <h2 className="small-header submit-button">Submit</h2>
                </div>
              </div>
            </div>
            <div className="rela-block footer-section">
              <h2 className="small-header top-link">Back to Top</h2>
              <div className="rela-block social-buttons-container">
                <div className="social-button facebook-button" />
                <div className="social-button twitter-button" />
                <div className="social-button instagram-button" />
                <div className="social-button behance-button" />
              </div>
              <p>Classic deluxe custom designer luxury prestige high-quality premium select gourmet pocket pencil sharpener.<br />Yours for the asking, no purchase necessary. It's our way of saying thank you.</p>
            </div>
          </div>

    
        )
    }
}


export default Nav;