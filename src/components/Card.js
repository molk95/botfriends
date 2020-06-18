import React from 'react'
import './Card.css'

export const Card = ({id,name,email}) => {
    return (
        <div className='card'>
            <img src={`https://robohash.org/ ${id}`} alt="RandomRobot" />
            <div className='contact' >
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
