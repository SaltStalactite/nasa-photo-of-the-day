import React from "react";

const Photo = (props) => {
    const { nasaData } = props
    return (
        <div>
            <h1>
                Photo of the Day:<br>
                </br>{nasaData.title}
            </h1>
            <img src={nasaData.url} alt="Stardust in Orion Nebula Molecular Cloud Complex M43" />
            <div>
                <p>Date: {nasaData.date}</p>
                <p>Copyright: {nasaData.copyright}</p>
            </div>
            <p>Info: {nasaData.explanation}</p>
        </div>

    )


}

export default Photo