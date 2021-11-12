import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.p`

    padding-left: 7rem;
    padding-right: 7rem;
    padding-top: 1rem;
    padding-bottom: 2rem;

    font-family: Helvetica, Verdana, Arial, sans-serif;

    :hover {
        color: lightblue;
        transition: all .4s ease-in-out;
    }
    @media (max-width: 600px) {
       font-size: .9rem;
       padding-left: 6rem;
       padding-right:6rem;
    }
    @media (max-width: 550px) {
        font-size: .9rem;
        padding-left: 3rem;
        padding-right:3rem;
     }
     @media (max-width: 550px) {
        font-size: .9rem;
        padding-left: 3rem;
        padding-right:3rem;
     }
     @media (max-width: 450px) {
        font-size: .6rem;
        padding-left: 2rem;
        padding-right:2rem;
     }

`

const Info = (props) => {

    const { nasaData } = props

    if (!nasaData.explanation) return <h4>Loading your photo's info</h4>

    return (
        <StyledInfo>Info: {nasaData.explanation}</StyledInfo>
    )
}

export default Info