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


  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  background-color: #e3effb;
`

const RecipeInfo = styled.article`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 440px;

  gap: 20px;
  padding: 15px 20px;

  h2{
    color: #ff5a00;
    line-height: 32px;
  }
  p{
    font-size: 16px;
  }
  
`
const RecipeImage = styled.article`
  width: 100%;
  height: 100%;

  img{
    width: 100%;
    height: 100%;
    
  }
`
const ManualSection = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 10px;
  
  padding: 60px 30px;

  background-color: #61a734;

  .ingredients{
    max-width: 560px;
    padding: 30px 20px;
    background-color: white;
  }
  .ingredients h3{
    line-height: 38px;
    color: #61a734;
  }
  .ingredients p{
    font-size: 17px;
    font-weight: 700;
  }
  
  p span {
    font-weight: 300;
    margin-left: 5px;
    position: relative;
  }
  /* p span::after{
    position: absolute;
    content: ':';
    left: -9px;
    top: 0px;

    font-size: 24px;
    font-weight: 700;

  } */

  .instruction{
    /* max-width: 560px; */
    padding: 30px 20px;
    background-color: white;
  }

  .instruction h3{
    line-height: 38px;
    color: #61a734;
  }
  .instruction p{
    line-height: 30px;
  }

`

const VidieoSection = styled.section`
  max-width: 1060px;
`


const Recipe = () => {
  
  const meaId = useParams().mealID

  const [recipeURL, setRecipeURL] = useState(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meaId}`)
  const [recipe, setRecipe] = useState([])

  const [fectedRecipe, setFectedRecipe] = useState(false)
  let videoID = ""
  
  useEffect(() =>{
    fetch(recipeURL)
      .then(response => response.json()
      .then(data => {
        // console.log(data.meals[0])
        setRecipe(data.meals[0])

        setFectedRecipe(true)

      }))
  }, [recipeURL])

  // if (setFectedRecipe == false) {
  //   return(
  //     <h2>
  //       Ooops, let me find your recipe...
  //     </h2>
  //   )
  // }

  // if(recipe){
  //   const recipeVideoURL = recipe.strYoutube
  //   const splitURL = recipeVideoURL.split("=")
  //   // const splitURL = recipe.strYoutube.split("=")
  //   // videoID = splitURL[splitURL.lenght - 1]
  //   videoID = splitURL[1]
  // }
  
  // const videoID = () =>{
  //   if (recipe.strYoutube == null ) return null
  //   let recipeVideoURL = recipe.strYoutube
  //   let splitURL = recipeVideoURL.split("=")
  //   ID = splitURL[1]
  //   console.log(ID)
  //   return (ID)
  // }
 let no = recipe.strYoutube 
  return (
    <RecipeWrapper>
      <Header />
      <RecipeHero>
        <RecipeImage>
          <img src={recipe.strMealThumb} alt="" />
        </RecipeImage>
        <RecipeInfo>
          <h2>{recipe.strMeal }</h2>
          <p>
            {recipe.strCategory + ' recipe by the ' 
            + recipe.strArea +'(s)'}. Few ingedients, easy to prepare.
            You will love it trust me.
            {/* {' <hhhh .>' +  no.split("=") ? no[0] : "nop" } */}
          </p>
        </RecipeInfo>
        

      </RecipeHero>

      <ManualSection>
        <div className="ingredients">
          <h3>Ingredients/Measure</h3>
          <p>{recipe.strIngredient1   } <span>{recipe.strMeasure1}</span></p>
          <p>{recipe.strIngredient2   } <span>{recipe.strMeasure2}</span></p>
          <p>{recipe.strIngredient3   } <span>{recipe.strMeasure3}</span></p>
          <p>{recipe.strIngredient4   } <span>{recipe.strMeasure4}</span></p>
          <p>{recipe.strIngredient5   } <span>{recipe.strMeasure5}</span></p>
          <p>{recipe.strIngredient6   } <span>{recipe.strMeasure6}</span></p>
          <p>{recipe.strIngredient7   } <span>{recipe.strMeasure7}</span></p>
          <p>{recipe.strIngredient8   } <span>{recipe.strMeasure8}</span></p>
          <p>{recipe.strIngredient9   } <span>{recipe.strMeasure9}</span></p>
          <p>{recipe.strIngredient10   } <span>{recipe.strMeasure10}</span></p>
          <p>{recipe.strIngredient11   } <span>{recipe.strMeasure11}</span></p>
          <p>{recipe.strIngredient12   } <span>{recipe.strMeasure12}</span></p>
          <p>{recipe.strIngredient13   } <span>{recipe.strMeasure13}</span></p>
          <p>{recipe.strIngredient14   } <span>{recipe.strMeasure14}</span></p>
          <p>{recipe.strIngredient15   } <span>{recipe.strMeasure15}</span></p>
          <p>{recipe.strIngredient16   } <span>{recipe.strMeasure16}</span></p>
          <p>{recipe.strIngredient17   } <span>{recipe.strMeasure17}</span></p>
          <p>{recipe.strIngredient18   } <span>{recipe.strMeasure18}</span></p>
          <p>{recipe.strIngredient19   } <span>{recipe.strMeasure19}</span></p>
          <p>{recipe.strIngredient20   } <span>{recipe.strMeasure20}</span></p>
        </div>

        <div className="instruction">
        <h3>Instructions</h3>
          <p>{recipe.strInstructions}</p>
        </div>
      </ManualSection>

      <VidieoSection> 
        <iframe src={`https://www.youtube.com/embed/${videoID}`}></iframe>

      </VidieoSection>
      
    </RecipeWrapper>
  )
}

export default Recipe