import React from 'react'
import styled from 'styled-components'

import recipeImage from '../assets/images/recipe.png'
import Recipes from '../pages/Recipes'



const CardWrapper = styled.article`
    position: relative;
    background-color: white;
    width: 240px;

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
        padding: 20px 30px;
    }
    .recipeName {
        text-align: left;
        text-transform: uppercase;
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
        <div class="body">
            <h3 class="recipeName">
                {recipeName}
            </h3>
            <p class="info">{recipeInfo}</p>
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