import React, { useEffect, useState } from 'react'
import './Body.css'
import { FaSearch } from "react-icons/fa";
import SearchResults from '../SearchResults/SearchResults';
import { Audio } from 'react-loader-spinner';
import DefaultSearchKeys from '../defaultSearchKeys';

function Body() {
    const [searchResult, setSearchResult] = useState([])
    const [inputVal, setInput] = useState('')
    const [loading, setLoading] = useState(true)

    

    const apiCall = async () => {
        setLoading(true)
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
        setLoading(false)
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

        <DefaultSearchKeys setFunc = {setInput} />

        <div style={{marginTop: '50px', padding : '20px' }}>
            <div className='results-h1-container'>
                {/* #TODO Add pagination for search results */}
                <h1 className='search-results-h1'> Search results </h1>
            </div>

            <div>
                {loading ? 
                <div className="loading-container">
                <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="green"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                        /> 
                </div> :
                <SearchResults imagesData = {searchResult}/> }
            </div>
        </div>
    </div>
  )
}

export default Body