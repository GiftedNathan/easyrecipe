import React from 'react'
import styled from 'styled-components'

const LatestRecipesSection = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    




`
const LatestRecipesWrapper = styled.div`
    
`

const LatestRecipes = () => {
  return (
    <LatestRecipesSection>
        LatestRecipes

        <div className="feature-dics">
            <h2 className='feature-title'>Features</h2>
            <p className='feature-text'>A cross section of what our recipes are like. A trial will convince you! </p>
        </div>
        <LatestRecipesWrapper>
            card
            card
            card
        </LatestRecipesWrapper>

    </LatestRecipesSection>
  )
}

export default LatestRecipes