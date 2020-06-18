import React from 'react'
import spinner from './spinner.gif'

 const Loading = () => {
    return (
        <div className='spinner'>
            <img
        src={spinner}
        style={{ width: '800px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
      <h2 className='loading'>Loading...</h2>
        </div>
    )
}
export default Loading;