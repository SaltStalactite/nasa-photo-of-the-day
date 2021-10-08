import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledPhoto = styled.div`

    img {
        border-radius: 20px;
        transform: scale(2); //-> start of animation
        opacity: 0; //-> start of animation
        animation: ${kf} 0.3s ease-in-out forwards;
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

    @media (max-width: 1100px) {
        img {
            width: 40rem
        }
    }

    @media (max-width: 710px) {
        img {
            width: 25rem
        }
        font-size: .9rem;
    }
    @media (max-width: 470px) {
        img {
            width: 20rem
        } 
        font-size: .6rem;
    }
    @media (max-width: 384px) {
        img {
            width: 18rem
        } 
    }
        
`

const Photo = (props) => {
    const { nasaData, change, date } = props

    if (!nasaData.url) return <h3>Loading your photo</h3>
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