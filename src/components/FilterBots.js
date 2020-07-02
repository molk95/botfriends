import React from 'react'

export const FilterBots = ({searchChange,searchfield}) => {
    return (
        <label for='filter' className='searchToolBox' >
           <input type="search" className='searchTool' placeholder='looking for robot friends..?'  onChange={searchChange} /> 
        </label>
    )
}
