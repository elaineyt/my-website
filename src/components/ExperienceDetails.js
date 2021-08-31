import React from 'react'
import './Experience.css';

function ExperienceDetails(props) {
    return(
        <>
        <div className="experienceDetailContainer">
        <img
            className='experienceDetailPhoto'
            alt={props.institution}
            src={props.src}
        />
        <div className="experienceDetailText">
            <h1 className="institution">{props.institution}</h1>
            <h2 className="role">{props.role}</h2>
            <h3 className="locationAndDate">{props.location}&nbsp;&nbsp;{"/"}&nbsp;&nbsp;{props.dates}</h3>
            <p className="details">{props.details}</p>
            
        </div>
        </div>
     
        </>
    )
}

export default ExperienceDetails