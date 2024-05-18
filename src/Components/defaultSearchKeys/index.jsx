import React from 'react'
import './index.css'

function DefaultSearchKeys( {setFunc}) {
    
  return (
    <div className='default-main-container'>
        <div className='container'>
            <button className='btn' onClick={() => setFunc('Mountains')}>Mountains</button>
            <button className='btn' onClick={() => setFunc('Flowers')}>Flowers</button>
            <button className='btn' onClick={() => setFunc('Beaches')}>Beaches</button>
            <button className='btn' onClick={() => setFunc('Cities')}>Cities</button>

        </div>
    </div>
  )
}

export default DefaultSearchKeys