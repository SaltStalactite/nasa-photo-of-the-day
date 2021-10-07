import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
    font-family: 'Courier New', monosapce;

    padding: 2rem;



`

const Title = (props) => {

    const { nasaData } = props

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