import React, { useEffect, useState } from 'react'
import './Body.css'
import { FaSearch } from "react-icons/fa";
import SearchResults from '../SearchResults/SearchResults';

function Body() {
    const [searchResult, setSearchResult] = useState([])
    const [inputVal, setInput] = useState('')

    

    const apiCall = async () => {
        const endPoint = `https://api.unsplash.com/search/photos?page=1&query=${inputVal}`
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
        setSearchResult(data.results)
    }

    useEffect(() => {
        const timerId = setTimeout( () => {
            apiCall()
            
        console.log("api calling ...")
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [ inputVal ])

    console.log(searchResult)

  return (
    <div className='body-container'>
        <div className='search-input'>
            <div className='search-input-container'>
                <input type="search" className="input" placeholder='search photos' value={inputVal} onChange={(e) => setInput(e.target.value)}/>
                <button style={{'cursor': 'pointer'}} onClick={()=> apiCall()}> <FaSearch /> </button>
            </div>
        </div>

        <div style={{marginTop: '50px', padding : '20px' }}>
            <div className='results-h1-container'>
                <h1 className='search-results-h1'> Search results </h1>
                <div className='search-results-h1'>left right</div>
            </div>
            <SearchResults imagesData = {searchResult}/>
        </div>
    </div>
  )
}

export default Body