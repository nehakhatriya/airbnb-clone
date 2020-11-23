import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Header() {
    const history=useHistory();
    return (
        <div className="header">
                <img onClick={()=>history.push('/')} src="https://www.paralympic.org/sites/default/files/styles/large_original/public/2019-11/Airbnb_Horizontal_RGB_2019.jp_.jpg?itok=1ScO_YoR" alt=""/>
               
            <div className="header_center">
                <input type="text"/>
                <SearchIcon/>
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <ExpandMoreIcon/>
                <LanguageIcon/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
