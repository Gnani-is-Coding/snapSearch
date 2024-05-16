import React, { useDeferredValue, useEffect, useState } from 'react'
import './Body.css'
import { FaSearch } from "react-icons/fa";

function Body() {
    const [searchResult, setSearchResult] = useState([])
    const [input, setInput] = useState('')

    const apiCall = async () => {
        const endPoint = 'https://api.unsplash.com/search/photos?page=1&query=office'
        const accessKey = process.env.REACT_APP_ACCESS_KEY  //Always use the SYNTAX like, REACT_APP_ fro storing env var, 
        //so that client side react can understand that its a env var 
    
        const options = {
            method: 'GET',
            headers: {
                'Content-type': "application/json",
                'Authorization': `Client-ID ${accessKey}`,
            }
        }
    
        const response = await fetch(endPoint, options)
        const data = await response.json()
    }

    useEffect(() => {
        apiCall()

    })

  return (
    <div className='body-container'>
        <div className='search-input'> 
            <div className='search-input-container'>
                <input type="search" className="input" placeholder='search photos' value={input} onClick={(e) => setInput(e.target.value)}/>
                <button style={{'cursor': 'pointer'}} onClick={()=> apiCall()}> <FaSearch /> </button>
            </div>
        </div>
    </div>
  )
}

export default Body