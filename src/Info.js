import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.p`

    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 1rem;
    padding-bottom: 2rem;

    font-family: Helvetica, Verdana, Arial, sans-serif;

    :hover {
        color: lightblue;
    }

`

const Info = (props) => {

    const { nasaData } = props

    return (
        <StyledInfo>Info: {nasaData.explanation}</StyledInfo>
    )
}

export default Info