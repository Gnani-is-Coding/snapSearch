import React from 'react'
import './SearchResults.css'

function SearchResults({ imagesData}) {
    console.log(imagesData, "images")
  return (
    <div className='images-container'>
        {imagesData?.map((obj) => (
            <img src={obj.urls.regular} key ={obj.id} alt={obj.alt_description} className='image'/>
        ))}
    </div>
  )
}

export default SearchResults