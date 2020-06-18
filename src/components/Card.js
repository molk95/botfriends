import React from 'react'


export const Card = ({id,name,email}) => {
    return (
        <div className='card grow'>
            <img src={`https://robohash.org/ ${id}`} alt="RandomRobot" />
            <div className='contact' >
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
