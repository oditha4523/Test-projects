import React from 'react'
import './Hero.css'
import Hyperspeed from './ReactBits/Hyperspeed';
import SplitText from './ReactBits/SplitText';
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
          <p>Hello world this is a sample text</p>
          <div className="input">
            <input type="text" placeholder='Explore content...'/>
            <button class='glowing-btn'><span class='glowing-txt'>SE<span class='faulty-letter'>A</span>RCH</span></button>
          </div>

         </div>

        <div className="speed">
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => { },
              onSlowDown: () => { },
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: null,
                shoulderLines: 0xFFFFFF,
                brokenLines: 0xFFFFFF,
                leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                sticks: 0x03B3C3,
              }
            }}
          />
          </div>
        </div>
        <img className='socrates' src={assets.untitled2} alt="" />
    </div>
  
  )
}

export default Hero
