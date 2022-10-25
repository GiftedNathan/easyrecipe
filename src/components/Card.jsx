import React from 'react'
import styled from 'styled-components'

import recipeImage from '../assets/images/recipe.png'
import Recipes from '../pages/Recipes'



const CardWrapper = styled.article`
    position: relative;
    background-color: white;
    /* width: 240px; */

    border-radius: 10px;

    margin: 20px auto;
    box-shadow: 0px 0px 30px 2px #000;

    .header {
        width: 100%;
    }
    .header img{
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .body{
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        padding: 10px 15px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        background-color: white;
    }
    .recipeName {
        text-align: left;
        text-transform: uppercase;
        color: #61a734;
    }
    
    .info{
        font-size: 14px;
    }
   
`

const Card = ({recipeName, recipeInfo, recipeImage}) => {

  return (
    <CardWrapper>
        <div class="header">
            {/* for the image  */}
            <img src={recipeImage} alt={recipeInfo} />
        </div>
        <div className='body'>
            <h4 className='recipeName'>
                {recipeName}
            </h4>
            <p className='info'>{recipeInfo}</p>
        </div>
    </CardWrapper>
  )
}

Card.defaultProps = {
    recipeImage: null,
    recipeName: "default name",
    recipeInfo: "some dummy text  as information for the above named recipe",

}

export default Card