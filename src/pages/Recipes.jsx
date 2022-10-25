import React, { useEffect, useState } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
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

  .form{
    max-width: 560px;
    min-width: 280px;
  }
  .form input {
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

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  justify-content: center;
  row-gap: 40px;
  column-gap: 40px;

  /* display: flex;
  flex-wrap: wrap; */
  /* gap: 10px; */

  background-color: white;
`
// end of styles 



const Recipes = () => {

  const [recipesURL, setRecipesURL] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  const [recipes, setRecipes] = useState()
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() =>{
    fetch(recipesURL)
      .then(response => response.json()
      .then(data => {
        console.log(data.meals)
        setRecipes(data.meals)
        setShow(true)

      }))
  }, [recipesURL])

  const setAlphabetIndex = (alpha) =>{
    setRecipesURL(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
  }

  const searchRecipe = (event) =>{
    if (event.key == 'Enter') {
      setRecipesURL(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      
    }

  }

  
  const navigate = useNavigate();
  const routeChange = (id) => {
    const path = generatePath(PATH_DASHBOARD.general.ViewActivity, { id });
    navigate(path);
  };

  const ingredients = []
  const measure = []
  return (

    <RecipesContainer>
      <Header />
      <RecipeHero>
        <h1>search your favorite recipes</h1>
        <p>Remember, it takes a good recipe to prapare appealing delicacies.</p>

        <div className='form'>
          <input type="search" placeholder="Enter a recipe name " onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe} />
        </div>
      </RecipeHero>

      <LatestRecipes>
        {
          
          show ? 
          recipes.map(recipe => {
            return (
              <Card 
                recipeName={recipe.strMeal} 
                recipeInfo={recipe.strCategory + ' recipe by the ' + recipe.strArea +'(s)'} 
                recipeImage={recipe.strMealThumb} 
                key={recipe.idMeal} 
                onClick={()=>routeChange(`${recipe.idMeal}`)} 

                // navigate(`/${recipe.idMeal}`)
              
              /> 
            )

          })
          // <Card data={recipes} /> 
          : "Ops, requested recipe not available at the momment"
          
        }
        {/* <Card />
        <Card /> */}


      </LatestRecipes>

      <RecipeIndex alphabetIndex={(alpha)=>setAlphabetIndex(alpha)}/>
      
    </RecipesContainer>
  )
}

export default Recipes