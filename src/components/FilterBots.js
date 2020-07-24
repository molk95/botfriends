import React from 'react'

 const FilterBots = ({searchChange,searchfield}) => {
    return (
        <div >
            <label for='filter' className="filterBots" >Search</label>
           <input id="filter" type="search" className='pa1 ba b--green bg-lightest-blue' placeholder='looking for friends..?'  onChange={searchChange} /> 
        </div>
    )
}
export default FilterBots;