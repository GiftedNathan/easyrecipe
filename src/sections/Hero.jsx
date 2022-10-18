import React from 'react'
import styled from 'styled-components'

import chefLady from '../assets/images/chef-man.png'


// font-family: 'Fuzzy Bubbles', cursive;

const HeroSection = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  padding: 30px 160px;
  /* background-color: #61a734; */

  background-color: #e3effb;

  .left{
    /* flex: 1; */
    max-width: 340px;
    border: 1px solid gray;
    
  }
  .left h1{
    width: fit-content;
    font-family: 'Inspiration', cursive;
    font-size: 62px;
    text-transform: capitalize;
    letter-spacing: 5px;
    color: #ff5a00;
    position: relative;
  }
  .left h1::after{
    position: absolute;
    content: 'fresh food';
    top: 0px;
    right: -50px;

    font-family: poppins;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #61a734;
    
  }

  .right{
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex: 1; */
    width: 50%;
  }

  .right img{
    width: 400px;
    border: 1px solid gray;
  }

  
`

const Hero = () => {
  return (
    <HeroSection>
      <div className="left">
        <h1>easy recipe</h1>
        <p>
          how your food is prepared have a major impact 
          on your mental and emotional health as well as your growth.
        </p>
      </div>
      <div className="right">
        <img src={chefLady} alt="" />
      </div>
    </HeroSection>
  )
}

export default Hero