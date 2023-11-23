import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">

          <div className="flexColStart hero--left">
            <div className="hero-title">
              <h1>Lorem<br /> ipsum dolor  <br /> sit amet.</h1>
            </div>
            <div className="flexColStart hero-des">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur.</span>
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
            </div>
        
          </div>

          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src="/hero-image.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
