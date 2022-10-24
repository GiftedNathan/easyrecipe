import React from 'react'
import styled from 'styled-components'
import Header from '../sections/Header'

const RecipesContainer = styled.div`
  width: 100%;
  background-color: goldenrod;
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

const Recipes = () => {


  return (
    <RecipesContainer>
      <Header />
      <RecipeHero>
        <h1>search your favorite recipes</h1>
        <p>Remember, it takes a good recipe to prapare appealing delicacies.</p>

        <form action="" method="post">
          <input type="search" name="search-recipe" id="" />
        </form>
      </RecipeHero>
      
    </RecipesContainer>
  )
}

export default Recipes