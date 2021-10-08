import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.div`

    img {
        border-radius: 20px;
    }

    p {
        padding: .8rem;
        :hover {
            color: lightblue;
            transition: all .4s ease-in-out;
        }
    }

    label {
        :hover{
            color: lightblue;
            transition: all .4s ease-in-out;
        }
    }

    font-family: 'Courier New', monospace;
`

const Photo = (props) => {
    const { nasaData, change, date } = props


    return (
        <StyledPhoto>
            <img src={nasaData.url} alt="Nasa Astronomy Photograph of the Day, check info section for details" />
            <p>Date: {nasaData.date}</p>
            <form>
                <label>
                    Pick Date <input onChange={change} id="date-picker" type="date" name="pick-date" max={date} />
                </label>
            </form>
            <p>Copyright: {nasaData.copyright}</p>
        </StyledPhoto>

    )
}

export default Photo