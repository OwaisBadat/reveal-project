import React, { Component } from "react";
import './styles.css'


export default class LazyLoad extends Component {
  render() {
      return(
        <div id="slider">
        <ul>
          <li>
          <div class="notepaper">
  <figure class="quote">
    <blockquote class="curly-quotes" cite="https://www.youtube.com/watch?v=qYLrc9hy0t0">
      The same wind blows on us all.
      The difference in arrival is not
      the blowing of the wind,
      but the set of the sail.
    </blockquote>
    <figcaption class="quote-by">— Jim Rohn</figcaption>
  </figure>
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