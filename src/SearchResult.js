import React from 'react'
import './SearchResult.css'
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'

function SearchResult(props) {
    return (
        <div className="searchResult">
            <img src={props.src} alt=""/>
            <FavouriteBorderIcon className="searchResult_heart"/>
            <div className="searchResult_info">
                <div className="info_top">
                    <p>{props.location}</p>
                    <h3>{props.title}</h3>
                    <p>_____</p>
                    <p>{props.description}</p>
                </div>
                <div className="info_bottom">
                    <div className="stars">
                        <StarIcon className="staricon"/>
                        <p>
                            <strong>{props.star}</strong>
                        </p>
                    </div>
                    <div className="price">
                        <h2>{props.price}</h2>
                        <p>{props.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
