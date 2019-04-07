import React, {Component} from "react"
import navcss from './nav.css'

import $ from 'jquery'



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
            $('#teamSection').addClass('active');
        } else if ($(window).scrollTop() >= $('#ourTech').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#ourTechLink').addClass('active');
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
      const linestyle={
        color: "white",
        fontSize: "30px",
        margin: "0"
      }
      const row={
        display: "-webkit-inline-box"
      }
      const bgStyle={
        backgroundColor: "black",
      }
        return (
            <div>

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