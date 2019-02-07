import React, { Component } from "react";
import './styles.css'


export default class LazyLoad extends Component {
  render() {
      return(
        <div id="slider">
        <ul>
          <li>
            <div className="slider-container">
              <h4>Vue Candidate 1</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
          </li>
          <li>
            <div className="slider-container">
              <h4>Fovean Candidate 1</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
          </li>
          <li>
            <div className="slider-container">
              <h4>Pure CSS slider Content</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
          </li>
          <li>
            <div className="slider-container">
              <h4>Pure CSS slider Content</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
          </li>
        </ul>
      </div>

    )
  }
}