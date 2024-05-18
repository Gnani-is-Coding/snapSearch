import React, { useEffect, useState } from 'react'
import './Body.css'
import { FaSearch } from "react-icons/fa";
import SearchResults from '../SearchResults/SearchResults';
import DefaultSearchKeys from '../defaultSearchKeys';
import { infinity } from 'ldrs';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

infinity.register()

const pageNums = [
    {id: '1', pageNum: 1},{id: '2', pageNum: 2},{id: '3', pageNum: 3},{id: '4', pageNum: 4},{id: '5', pageNum: 5},{id: '6', pageNum: 6},
    {id: '7', pageNum: 7},{id: '8', pageNum: 8}, {id: '9', pageNum: 9},{id: '10', pageNum: 10}
]


function Body() {
    const [searchResult, setSearchResult] = useState([])
    const [inputVal, setInput] = useState('')
    const [loading, setLoading] = useState(true)
    const [pageNum, setPageNum] = useState(1)

    

    const apiCall = async () => {
        setLoading(true)
        const endPoint = `https://api.unsplash.com/search/photos?page=${pageNum}&per_page=12&query=${inputVal}`
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
        }, 900)

        return () => {
            clearTimeout(timerId)
        }
    }, [inputVal,pageNum])

    console.log(pageNum)

  return (
    <div className='body-container'>
        <div className='search-input'>
            <div className='search-input-container'>
                <input type="search" className="input" placeholder='search photos' value={inputVal} onChange={(e) => setInput(e.target.value)}/>
                <button style={{'cursor': 'pointer'}} onClick={()=> apiCall()}> <FaSearch /> </button>
            </div>
        </div>

        <DefaultSearchKeys setFunc = {setInput} />

        <div style={{marginTop: '10px', padding : '20px' }}>
            <div className='results-h1-container'>
                <h1 className='search-results-h1'> Search results </h1>

                <div className='pages-style'>
                   <div className='page-nums-container' style={{marginRight: '5px'}} onClick={() => setPageNum((prevNUm) =>
                    (prevNUm - 1 < 1 ? 10 : prevNUm - 1 ) )}><FaArrowLeft/></div>
                    {pageNums.map((obj,index) => (
                        <div className= { pageNum === obj.pageNum ? 'active-page-nums-container':'page-nums-container'} onClick={() => setPageNum(obj.pageNum)}>
                        <div className='' key={obj.id}>{obj.pageNum}</div>
                        </div>
                    )) }
                    <div className='page-nums-container' style={{marginLeft: '5px'}} onClick={() => setPageNum((prevNUm) => (prevNUm + 1 > 10 ? 1 : prevNUm + 1))}><FaArrowRight/></div>
                </div>
            </div>

            <div>
                {loading ? 
                <div className="loading-container">
                    <l-infinity
                    size="55"
                    stroke="4"
                    stroke-length="0.15"
                    bg-opacity="0.1"
                    speed="1.3" 
                    color="white" 
                    ></l-infinity>
                    </div> :
                <SearchResults imagesData = {searchResult}/> }
            </div>
        </div>
    </div>
  )
}

export default Body