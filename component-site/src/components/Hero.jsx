import React from 'react'
import './Hero.css'
import BlurText from './ReactBits/BlurText';
import { assets } from '../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BackgroundLines } from "./ui/background-lines";

const Hero = () => {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  AOS.init();
  
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

         <img className='bg-img' src={assets.damascus} alt="" />
         <div className="gradient-overlay"></div>
         <div className="main-content">
          <BlurText
            text="Discover the Power of"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
            animationFrom={{ filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }}
            animationTo={[
              { filter: 'blur(5px)', opacity: 0.5, transform: 'translate3d(0,5px,0)' },
              { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' }
            ]}
          />
          <BlurText
            text="AI-Generated Art"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
            animationFrom={{ filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }}
            animationTo={[
              { filter: 'blur(5px)', opacity: 0.5, transform: 'translate3d(0,5px,0)' },
              { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' }
            ]}
          />
          
          <div className="input">
            <input type="text" placeholder='Explore content...'/>
            <button className='glowing-btn'><span className='glowing-txt'>SE<span className='faulty-letter'>A</span>RCH</span></button>
          </div>
         </div>

         <div className="grid">
          <div data-aos="zoom-in" data-aos-duration="1000" className="item1" style={{ gridArea: "item1" }}>
            <img  src={assets.item1} alt="" />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="item2" style={{ gridArea: "item2" }}>
            <img src={assets.item2} alt="" />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="item3" style={{ gridArea: "item3" }}>
            <img src={assets.item3} alt="" />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="item4" style={{ gridArea: "item4" }}>
            <img src={assets.item4} alt="" />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="item5" style={{ gridArea: "item5" }}>
            <img src={assets.item5} alt="" />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="item6" style={{ gridArea: "item6" }}>
          <img src={assets.item6} alt="" />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="item7" style={{ gridArea: "item7" }}>
            <img src={assets.item7} alt="" />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="item8" style={{ gridArea: "item8" }}>
            <img src={assets.item8} alt="" />
          </div>
         </div>
        </div>
{/* ========================== middle content=====================================*/}
      <div className="middle-content">
        <div className="gradient-overlay1">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4" svgOptions={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          stroke: 'white',
          strokeWidth: '1',
        }}>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Get
          </p>
        </BackgroundLines>
        </div>
        
        {/* =================================section content===================================== */}
        <div className="middle-section">
        <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-white !text-white font-bold text-3xl md:text-5xl text-center mt-8 relative z-20">Fuel Your Creativity <br />with Every Scroll</h1>
        </div>

      </div>

    </div>
  
  )
}

export default Hero
