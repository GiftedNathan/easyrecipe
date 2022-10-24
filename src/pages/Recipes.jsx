import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../sections/Header'
import Card from '../components/Card'
import RecipeIndex from '../components/RecipeIndex'

const RecipesContainer = styled.div`
  width: 100%;
  background-color: #e3effb;
`

const RecipeHero = styled.section`
  
  width: 100%;
  /* min-height: 100vh; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 60px 30px;

  h1{
    font-size: 2.5em;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  p{
    text-align: center;
    margin-bottom: 40px;
  }

  form{
    max-width: 560px;
    min-width: 280px;
  }
  form input {
    width: 100%;
    height: 40px;
    padding-left: 15px;

    border: none;
    outline: none;
    border-radius: 20px;
  }
`

const LatestRecipes = styled.section`
  max-width: 1060px;
  margin: auto;
  padding: 60px 30px;

  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  justify-content: center; */
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  background-color: white;
`
// end of styles 



const Recipes = () => {

  const [recipesURL, setRecipesURL] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  const [recipes, setRecipes] = useState()
  const [show, setShow] = useState(false)

  useEffect(() =>{
    fetch(recipesURL)
      .then(response => response.json()
      .then(data => {
        console.log(data.meals)
        setRecipes(data.meals)
        setShow(true)

      }))
  }, [recipesURL])

  return (

    <RecipesContainer>
      <Header />
      <RecipeHero>
        <h1>search your favorite recipes</h1>
        <p>Remember, it takes a good recipe to prapare appealing delicacies.</p>

        <form action="" method="post">
          <input type="search" name="search-recipe" placeholder="Enter a recipe name " />
        </form>
      </RecipeHero>

      <LatestRecipes>
        {
          
          show ? 
          recipes.map(recipe => {
            return (
              <Card recipeName={recipe.strMeal} recipeInfo={recipe.strCategory} recipeImage={recipe.strMealThumb} /> 
            )

          })
          // <Card data={recipes} /> 
          : "Ops, requested recipe not available at the momment"
          
        }
        {/* <Card />
        <Card /> */}

      <RecipeIndex />
      </LatestRecipes>

      
    </RecipesContainer>
  )
}

export default Recipes