import React from 'react'

export const FilterBots = ({filterbots,searchField}) => {
    return (
        <div className='searchToolBox' >
           <input className='searchTool' placeholder='looking for robot friends..?'  onChange={filterbots} /> 
        </div>
    )
}
