import React from 'react'
import styled from 'styled-components'

import BgImage from '../assets/images/recipe.png'



const CardWrapper = styled.article`
    position: relative;
    background-color: white;
    width: 300px;

    border-radius: 10px;

    margin: 20px auto;
    box-shadow: 0px 0px 30px 2px #000;

    .header {
        background-image: url(${BgImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: auto;
        height: 150px;
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

const Card = () => {
  return (
    <CardWrapper>
        <div class="header">
            {/* for the image  */}
        </div>
        <div class="body">
            <h3 class="recipeName">
                Chinese Noodles
            </h3>
            <p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, temporibus.</p>
        </div>
    </CardWrapper>
  )
}

export default Card