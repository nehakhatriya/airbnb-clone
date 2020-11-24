import React from 'react'
import './SearchResult.css'
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'
import { useHistory } from 'react-router';


function SearchResult(props) {
    const history=useHistory();
    return(
        <div className="searchResult" onClick={()=>history.push('/details/'+props.place.id)}>
            <img src={props.place.src} alt=""/>
            <FavouriteBorderIcon className="searchResult_heart"/>
            <div className="searchResult_info">
                <div className="info_top">
                    <p>{props.place.location}</p>
                    <h3>{props.place.title}</h3>
                    <p>_____</p>
                    <p>{props.place.description}</p>
                </div>
                <div className="info_bottom">
                    <div className="stars">
                        <StarIcon className="staricon"/>
                        <p>
                            <strong>{props.place.star}</strong>
                        </p>
                    </div>
                    <div className="price">
                        <h2><span>&#8377;</span>{props.place.price}/night</h2>
                        <p><span>&#8377;</span>{props.place.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
