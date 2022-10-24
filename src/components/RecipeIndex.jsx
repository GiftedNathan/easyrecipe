import React from 'react'
import styled from 'styled-components'

const RecipeIndexWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    padding: 60px 30px;
`
const Indext = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
    border: 1px solid gray;
    cursor: pointer;
`

const RecipeIndex = () => {

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    let num = 1
    return (
        <RecipeIndexWrapper>
            {
                alphabet.map(item => {
                    return(
                        <Indext key={num++}>
                            <h3>{item}</h3>
                        </Indext>
                    )
                })
            }
        </RecipeIndexWrapper>
    )
}

export default RecipeIndex