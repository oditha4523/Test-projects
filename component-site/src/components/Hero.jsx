import React from 'react'
import './Hero.css'
import TiltedCard from './ReactBits/cards';
import BlurText from './ReactBits/BlurText';
import { assets } from '../assets/assets';

const Hero = () => {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  
  return (

    <div className="container">
        
        <div className="header">
          <nav>
              <a href="#">HOME</a>
              <a href="#">CODING</a>
              <a href="#">GUITAR</a>
              <div id="indicator"></div>
            </nav>
        </div>
        
        <div className="main">

         <div className="main-content">
          <BlurText
            text="Create beautiful art with "
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />
          <BlurText
            text="Artificial Intelligent"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />
          
          <div className="input">
            <input type="text" placeholder='Explore content...'/>
            <button class='glowing-btn'><span class='glowing-txt'>SE<span class='faulty-letter'>A</span>RCH</span></button>
          </div>
         </div>

         <div className="grid">
          <div className="item1" style={{ gridArea: "item1" }}>
            <img  src={assets.item1} alt="" />
          </div>
          <div className="item2" style={{ gridArea: "item2" }}>
            <img src={assets.item2} alt="" />
          </div>
          <div className="item3" style={{ gridArea: "item3" }}>
            <img src={assets.item3} alt="" />
          </div>
          <div className="item4" style={{ gridArea: "item4" }}>
            <img src={assets.item4} alt="" />
          </div>
          <div className="item5" style={{ gridArea: "item5" }}>
            <img src={assets.item5} alt="" />
          </div>
          <div className="item6" style={{ gridArea: "item6" }}>
          <img src={assets.item6} alt="" />
          </div>
          <div className="item7" style={{ gridArea: "item7" }}>
            <img src={assets.item7} alt="" />
          </div>
          <div className="item8" style={{ gridArea: "item8" }}>
            <img src={assets.item8} alt="" />
          </div>
         </div>
        </div>

    </div>
  
  )
}

export default Hero
