import React from 'react'
import styled from 'styled-components'
import Header from '../sections/Header'

const RecipesContainer = styled.div`
  width: 100%;
  background-color: goldenrod;
`

const Recipes = () => {


  return (
    <RecipesContainer>
      <Header />
      <h1>all recipes please</h1>
    </RecipesContainer>
  )
}

export default Recipes