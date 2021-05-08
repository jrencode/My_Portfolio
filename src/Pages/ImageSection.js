import React from 'react'
import about from '../img/about.png';

export default function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img" alt="">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>I am <span>Lorem Ipsum</span></h4>
        <p>
          Web designer and developer from Philippines.
          I create custom websites  to help business do
          better online.
        </p>
        <div className="about-details">
          <div className="details">
            <small>Full Name:</small>
            <p>Lorem Ipsum</p>
            <small>Location:</small>
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
    </div>
  )
}
