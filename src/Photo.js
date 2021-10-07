import React from "react";

const Photo = (props) => {
    const { nasaData, change, date } = props


    return (
        <div>
            <img src={nasaData.url} alt="Nasa Astronomy Photograph of the Day, check info section for details" />
            <p>Date: {nasaData.date}</p>
            <form>
                <label>
                    Pick Date <input onChange={change} id="date-picker" type="date" name="pick-date" max={date} />
                </label>
            </form>
            <p>Copyright: {nasaData.copyright}</p>
        </div>

    )
}

export default Photo