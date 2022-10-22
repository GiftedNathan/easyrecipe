import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.article`
    min-width: 200px;
    max-width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    text-align: center;
    padding: 30px;

    border-radius: 10px;
    /* background-color: white; */
    position: relative;

    .feature-image{
        width: 70%;
        height: 150px;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 20px;
        border-radius: 50%;
        background-color: white;

        box-shadow: inset 5px 5px 20px ;

        z-index: 2;

    }
    
    img{
        width: 70%;
        border-radius: 50%;
        
    }
    h3{
        text-transform: capitalize;
        color: #ff5a00;
        margin: 20px 0px;
        z-index: 2;
    }
    p{
        font-size: 16px;
        line-height: 24px;
        
        z-index: 2;
    }

    &::after{
        position: absolute;
        content: '';

        bottom: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: white;

        border-radius: 15px;
        border-top-left-radius: 40%;
        border-top-right-radius: 40%;

        z-index: 1;

        box-shadow: 1px 1px 20px #3d3d3d, -1px -1px 20px #61a734;

    }
    
`




const Feature = ({image, title, text}) => {
  return (
    <Wrapper>
        <div className="feature-image"><img src={image} alt={title +' image'} /></div>
        
        <h3>{title}</h3>
        <p>{text}</p>
    </Wrapper>
  )
}

Feature.defaultProps = {
    image: null,
    title: 'defalt Title',
    text: 'Lorem ipsum dbitdignissimos asperiores, optio est ut quisquam eligendi quia. Vitae voluptatibus laboriosam, ducimus ab dignissimos fugiat sint voluptatum similique omnis.'
}

export default Feature