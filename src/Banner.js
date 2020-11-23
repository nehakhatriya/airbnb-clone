import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import Search from './Search'
import './Banner.css'
import {useHistory } from 'react-router-dom'
function Banner() {
    const history=useHistory();
    const [showSearch,setShowSearch] = useState(false)
    
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <h1><Search/></h1>}
                <Button onClick={()=>setShowSearch(!showSearch)} variant="outlined">{showSearch?"Hide":"Search Dates"}</Button>
            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
                <Button variant="outlined" onClick={()=>history.push('/search')}>
                Explore NearBy
                </Button>
            </div>
           
        </div>
    )
}

export default Banner
