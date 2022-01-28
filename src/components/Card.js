import React from 'react' 

export default function Card(props) {
    return(
        <div className='card'>
            <img src={props.image} className='card-image' />
            <div className='card-stats'>
                <img src='../images/pin_img.png' className='card-pin' />
                <span className='card-location'>{props.location}</span>
                {<span className='card-link'><a href='props.maps'>View on Google Maps</a></span>}
            </div>
            <h1 className='card-title'>{props.title}</h1>
            <p className='card-date'>{props.startDate} - {props.endDate}</p>
            <p className='card-description'>{props.description}</p>
        </div>
    )
}