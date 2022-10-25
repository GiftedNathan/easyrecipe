import { useParams } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import Header from '../sections/Header'

import dummyImage from '../assets/images/recipe.png'


const RecipeWrapper = styled.div`
  width: 100%;

`
const RecipeHero = styled.section`
  width: 100%;
  padding: 60px 30px;

  display: grid;
  grid-template-columns: repeat(auto-fil, minmax(280px, 1fr));
  justify-items: center;
  gap: 20px;
`

const RecipeInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`
const RecipeImage = styled.article`
  
`


const Recipe = () => {
  return (
    <RecipeWrapper>
      <Header />
      <RecipeHero>
        <RecipeInfo>
          <h2>a domu name for recipe</h2>
          <p>another dumy text to descripe the recipe</p>
        </RecipeInfo>
        <RecipeImage>
          <img src="" alt="" />
        </RecipeImage>

      </RecipeHero>
      Recipe single
    </RecipeWrapper>
  )
}

export default Recipe