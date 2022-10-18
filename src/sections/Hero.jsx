import React from 'react'
import styled from 'styled-components'

import chefLady from '../assets/images/chef-man.png'


// font-family: 'Fuzzy Bubbles', cursive;

const HeroSection = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
  align-items: center;
  column-gap: 0px;
  row-gap: 10px;


  padding: 60px 30px;

  background-color: #e3effb;

  .left{
    max-width: 440px;
    
  }
  .left h1{
    width: fit-content;
    font-family: 'Inspiration', cursive;
    font-size: 4rem;
    letter-spacing: 5px;
    color: #ff5a00;
    position: relative;
  }
  .left h1::after{
    position: absolute;
    content: 'fresh food';
    top: 0px;
    right: -40px;

    font-family: Poppins, Helvetica, sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #61a734;
    
  }
  .left p{
    margin: 20px 0px;
    font-size: 20px;
    line-height: 30px;
  }

  .right{
    max-width: 540px;
  }

  .right img{
    width: 100%;
  }

  
`

const Hero = () => {
  return (
    <HeroSection>
      <article className="left">
        <h1>easyRecipe</h1>
        <p>
          How your food is prepared has a major impact 
          on your mental and emotional health as well as your growth.
        </p>
      </article>
      <article className="right">
        <img src={chefLady} alt="chef man" />
      </article>
    </HeroSection>
  )
}

export default Hero