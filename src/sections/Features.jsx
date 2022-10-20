import React from 'react'
import styled from 'styled-components'
import Feature from '../components/Feature'
// import featuresData from '../components/FeatureData'

// importing images for the various features 
import testedImage from '../assets/images/okay2.png'
import instructionsImage from '../assets/images/instructions.png'
import ingredientsImage from '../assets/images/ingredients.png'
import videoImage from '../assets/images/video.png'
import utencilesImage from '../assets/images/utenciles.png'
import recipeImage from '../assets/images/recipe.png'


const FeatureSection  = styled.section`
    width: 100%;
    min-height: 100vh;

    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    

    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    
    grid-gap: 10px; */

    padding: 60px 30px;

    background-color: #61a734;

    .feature-dics{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .feature-title{
        color: #e3effb;
        font-size: 30px;
        text-transform: uppercase;
        text-align: center;
        
        margin: 20px 0px;
        
        max-width: 600px;
    }
    
    .feature-text{
        color: #e3effb;
        font-size: 20px;
        text-align: center;
        
        margin: 20px 0px;

        max-width: 600px;
    }
`

const Features = () => {

    
  return (
    <FeatureSection>
        <div className="feature-dics">
            <h2 className='feature-title'>Features</h2>
            <p className='feature-text'>A cross section of what our recipes are like. A trial will convince you! </p>
        </div>


        <Feature 
            image = {testedImage} 
            title = {'tested'}  
            text = {'tested and trusted food recipes that appeal to families and friends'}
        
        />

        <Feature 
            image = {instructionsImage}
            title = {'instructions'}
            text = {'directions for combining and processing (cooking) ingredients'}
        
        />
        
        <Feature 
            image={ingredientsImage} 
            title={'ingredients'}  
            text={'list of all ingredients with quantity required in order of use'}
        
        />

        <Feature 
            image={videoImage} 
            title={'video'}  
            text={'simple step by step video for better explanation'}
        
        />
        
        <Feature 
            image={utencilesImage} 
            title={'utenciles'}  
            text={'list of all utenciles and other material needed'}
        
        />

        <Feature 
            image={recipeImage} 
            title={'200 plus'}  
            text={'200 + recipes across several continents and countries'}
        
        />
        
        
    </FeatureSection>
  )
}

export default Features