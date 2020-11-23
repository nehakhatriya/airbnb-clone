import { Button } from '@material-ui/core'
import React from 'react'
import SearchResult from './SearchResult'
import './SearchPage.css'

function SearchPage() {
    return (
        <div className="searchpage">
          <div className="searchpage_info">
           <p>62 stays . 26 august to 30 august . 2 guests</p>   
          <h1>Stays nearby</h1>
          <Button variant="outlined">Cancellation</Button>
          <Button variant="outlined">Type of place</Button>
          <Button variant="outlined">Price</Button>
          <Button variant="outlined">Rooms and beds</Button>
          <Button variant="outlined">More filters</Button>
          </div>   
        <SearchResult
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-ideas-rds-work-queens-road-08-1593114639.jpg"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian house"
        description="1 guest. 1 bedroom . 1 bed . 1 shared bathroom . kitchen . wifi . free parking"
        star="4.73"
        price="Rs 700/night"
        total="Rs 1700 total"/>
         <SearchResult
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-ideas-rds-work-queens-road-08-1593114639.jpg"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian house"
        description="1 guest. 1 bedroom . 1 bed . 1 shared bathroom . kitchen . wifi . free parking"
        star="4.73"
        price="Rs 700/night"
        total="Rs 1700 total"/>
         <SearchResult
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-ideas-rds-work-queens-road-08-1593114639.jpg"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian house"
        description="1 guest. 1 bedroom . 1 bed . 1 shared bathroom . kitchen . wifi . free parking"
        star="4.73"
        price="Rs 700/night"
        total="Rs 1700 total"/>
         <SearchResult
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-ideas-rds-work-queens-road-08-1593114639.jpg"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian house"
        description="1 guest. 1 bedroom . 1 bed . 1 shared bathroom . kitchen . wifi . free parking"
        star="4.73"
        price="Rs 700/night"
        total="Rs 1700 total"/>
        </div>
    )
}

export default SearchPage
