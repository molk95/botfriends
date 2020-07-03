import React from 'react'

export const FilterBots = ({searchChange,searchfield}) => {
    return (
        <label for='filter' className='pa2' >
           <input type="search" className='pa3 ba b--green bg-lightest-blue' placeholder='looking for robot friends..?'  onChange={searchChange} /> 
        </label>
    )
}
