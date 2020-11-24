import React, { Component } from 'react'
import './PlaceDetails.css'
import axios from 'axios'
import StarIcon from '@material-ui/icons/Star'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

class PlaceDetails extends Component {

    state = {
        place: {}
    }
    componentDidMount = () => {
        console.log(this.props)
        axios.get("http://localhost:8010/airbnb/" + this.props.match.params.id)
            .then(res => {
                console.log(res.data)
                this.setState({ place: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="placeDetails">
                <h3>{this.state.place.title}</h3>
                <div className="stars">
                    <StarIcon className="staricon" />
                    <p>
                        <strong>{this.state.place.star} </strong>
                    </p>
                    <h3><u>{this.state.place.location}</u></h3>
                </div>
                <img src={this.state.place.src} alt="" />
                <div className="hostname">
                    <p><strong>{this.state.place.type} hosted by {this.state.place.host} </strong>
                    </p>
                </div>
                <hr></hr>
                <div className="properties">
                    <div className="props">
                        <HomeOutlinedIcon/>
                        <div className="prop_info">
                            <p><h4>Entire home</h4>
                               You’ll have the cottage to yourself.</p>
                        </div>
                    </div>
                    <div className="props">
                        <MeetingRoomOutlinedIcon />
                        <div className="prop_info">
                            <p><h4>Self check-in</h4>
                               You can check in with the doorman.</p>
                        </div>
                    </div>
                    <div className="props">
                        <CalendarTodayOutlinedIcon />
                        <dic className="prop_info">
                            <p><h4>Cancellation policy</h4>
                               Add your trip dates to get the cancellation details for this stay.</p>
                        </dic>
                    </div>
                </div>
                <hr></hr>
                <div className="description">
                    <p>
                        {this.state.place.description}
                    </p>
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default PlaceDetails
