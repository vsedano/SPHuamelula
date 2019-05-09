import React, { Component } from 'react'
import NavSecond from '../components/Nav/NavSecond'
import PlaceDetail from '../components/PlaceDetail/PlaceDetail';

class PlayaGrande extends Component {
    render() {
        return (
            < div className = "App" >
                <NavSecond />
                <PlaceDetail name={"Playa Grande"}/>
            </div>
        )
    }

}

export default PlayaGrande