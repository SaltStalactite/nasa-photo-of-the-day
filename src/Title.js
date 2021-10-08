import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
    font-family: 'Courier New', monosapce;

    padding: 2rem;

    :hover {
        color: lightblue;
        transition: all .4s ease-in-out;
    }

`

const Title = (props) => {

    const { nasaData } = props

    if (!nasaData.title) return <h2>Loading...</h2>

    return (
        <StyledTitle>
            <div>
                Photo of the Day:<br>
                </br>{nasaData.title}
            </div>
        </StyledTitle>
    )
}

export default Title