import React from 'react'
import styled from 'styled-components'

const RecipeIndexWrapper = styled.div`
    max-width: 1060px;

    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0 auto;
    padding: 60px 30px;
`
const Indext = styled.div`
    width: 30px; 
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;


    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
`

const RecipeIndex = ({alphabetIndex}) => {

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    let num = 1
    return (
        <RecipeIndexWrapper>
            {
                alphabet.map(item => {
                    return(
                        <Indext key={num++} onClick={()=>alphabetIndex(item)}>
                            <h3>{item}</h3>
                        </Indext>
                    )
                })
            }
        </RecipeIndexWrapper>
    )
}

export default RecipeIndex