import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
  gap: 10px;
`

const RecipeInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 440px;
  
`
const RecipeImage = styled.article`
  max-width: 400px;
`


const Recipe = () => {
  
  const meaId = useParams().mealID

  const [recipeURL, setRecipeURL] = useState(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meaId}`)
  const [recipe, setRecipe] = useState([])

  const [fectedRecipe, setFectedRecipe] = useState(false)

  
  useEffect(() =>{
    fetch(recipeURL)
      .then(response => response.json())
      .then(data => {
        // console.log(data.meals)
        setRecipe(data.meals)
        console.log(recipe)
        setFectedRecipe(true)

      })
  }, [recipeURL])

  return (
    <RecipeWrapper>
      <Header />
      <RecipeHero>
        <RecipeInfo>
          <h1>no :{meaId } </h1>
          <h2>{setFectedRecipe ? recipe.strMeal : "noo" }</h2>
          <p>another dumy text to descripe the recipe</p>
        </RecipeInfo>
        <RecipeImage>
          <img src={dummyImage} alt="" />
        </RecipeImage>

      </RecipeHero>
      Recipe single
    </RecipeWrapper>
  )
}

export default Recipe