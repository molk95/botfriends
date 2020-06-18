import React from 'react'
import './Card.css'

export const Card = () => {
    return (
        <div className='card'>
            <img src='https://robohash.org/1' alt="RandomRobot" />
            <div className='contact' >
                <h2>Robot Name</h2>
                <p>robotname@exemple.com</p>
            </div>
        </div>
    )
}
