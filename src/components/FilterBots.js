import React from 'react'

export const FilterBots = ({searchChange,searchfield}) => {
    return (
        <div className='searchToolBox' >
           <input className='searchTool' placeholder='looking for robot friends..?'  onChange={searchChange} /> 
        </div>
    )
}
