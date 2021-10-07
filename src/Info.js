import React from 'react';

const Info = (props) => {

    const { nasaData } = props

    return (
        <p>Info: {nasaData.explanation}</p>
    )
}

export default Info