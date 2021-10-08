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

`

const Info = (props) => {

    const { nasaData } = props

    return (
        <StyledInfo>Info: {nasaData.explanation}</StyledInfo>
    )
}

export default Info