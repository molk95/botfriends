import React from 'react'

export const FilterBots = ({searchChange,searchfield}) => {
    return (
        <div className='pa2' >
            <label for='filter' className="filterBots" >Search</label>
           <input id="filter" type="search" className='pa3 ba b--green bg-lightest-blue' placeholder='looking for friends..?'  onChange={searchChange} /> 
        </div>
    )
}
