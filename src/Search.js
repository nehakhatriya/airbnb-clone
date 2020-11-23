import React, { useState } from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import PeopleIcon from '@material-ui/icons/People'
import {DateRangePicker} from 'react-date-range'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'

function Search() {
    const history=useHistory();
    const [startDate,setStartDate]=useState(new Date())
    const [endDate,setEndDate]=useState(new Date())

    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:"selection"
    }

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    return (
        <div className="search"> 
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
            <h6>Number of guests
            <PeopleIcon/>
            </h6>
            <input min={0} defaultValue={2} type="number"/>
            <Button variant="outlined" onClick={()=>history.push('/search')}>Airbnb</Button>
        </div>
    )
}

export default Search
