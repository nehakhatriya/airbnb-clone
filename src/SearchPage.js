import { Button } from '@material-ui/core'
import React,{Component} from 'react'
import SearchResult from './SearchResult'
import './SearchPage.css'
import axios from 'axios'

class SearchPage extends Component{

  state={
    places:[],
    place:{}
  }

componentDidMount=()=>{
  axios.get("http://localhost:8010/airbnb")
  .then(res=>{
    console.log(res.data)
    this.setState({places:res.data})
  })
  .catch(err=>{
    console.log(err)
  })
}

  render(){

    var searchplaces=this.state.places.map(element =>
        <SearchResult place={element}/>)
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
       {searchplaces}
        </div>
    )
  }
}

export default SearchPage
