import React from 'react'

const Title = (props) => {

    const { nasaData } = props

    return (
        <h1>
            Photo of the Day:<br>
            </br>{nasaData.title}
        </h1>
    )
}

export default Title