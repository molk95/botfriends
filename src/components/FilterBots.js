import React from 'react'

 const FilterBots = ({searchChange,searchfield}) => {
    return (
        <div className='filterbox' >
           <input id="filter" type="search" className='searchtool' placeholder='looking for friends..?'  onChange={searchChange} /> 
        </div>
    )
}
export default FilterBots;