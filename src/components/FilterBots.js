import React from 'react'

export const FilterBots = ({filterFriends,searchbox}) => {
    return (
        <div className='searchToolBox' >
           <input className='searchTool' placeholder='looking for robot friends..?'  onChange={filterFriends} /> 
        </div>
    )
}
