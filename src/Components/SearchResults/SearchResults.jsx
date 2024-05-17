import React from 'react'
import './SearchResults.css'
import Popup from 'reactjs-popup' 

const arrowStyle = { color: '#60626e' };

function SearchResults({ imagesData}) {
    console.log(imagesData, "images")
  return (
    <div className='images-container'>
        {imagesData ? 
        <div>
        ({imagesData.map((obj) => (
                <Popup
                  trigger={open => (
                    <img src={obj.urls.regular} key ={obj.id} alt={obj.alt_description} className='image'/>
                  )}
                  position="top center"
                  on={['hover', 'focus']}
                  closeOnDocumentClick
                  {...{arrowStyle}}
                >
                  <span className='popup-tooltip-container'> 
                    {obj.description ? `${obj.description}` : 'No details available'}
                   </span>
                </Popup>
        ))}) 
        </div>: 
        <div style={{height: '50vh', textAlign: 'center', display: 'flex', alignItems: 'center'}}>
            <h1 style={{color: '#b1b2b3'}}>Pls Search :) </h1>
        </div>
        }
    </div>
  )
}

export default SearchResults