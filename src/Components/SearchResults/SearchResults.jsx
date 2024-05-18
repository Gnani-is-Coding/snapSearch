import React from 'react'
import './SearchResults.css'
import Popup from 'reactjs-popup' 

const arrowStyle = { color: '#101725' };

function SearchResults({ imagesData}) {
    console.log(imagesData, "images")
  return (
    <div className='images-container'>
        {imagesData ?
        <div className='search-images-container'>
        ({imagesData.map((obj) => (
          <div>
                <Popup
                  trigger={open => (
                    //TODO use grids for images
                    <img src={obj.urls.regular} key ={obj.id} alt={obj.alt_description} className='image'/>
                  )}
                  position="top center"
                  on={['hover', 'focus']}
                  closeOnDocumentClick
                  {...{arrowStyle}}
                >
                  <div className='popup-tooltip-container'> 
                    {obj.description ? `${obj.description}` : 'No details available'}
                   </div>
                </Popup>
          </div>
        ))}) 
        </div>: 
        <div style={{height: '50vh', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h1 style={{color: '#b1b2b3'}}>Pls Search :) </h1>
        </div>
        }
    </div>
  )
}

export default SearchResults