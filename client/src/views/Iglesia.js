import React, { Component } from 'react'
import NavSecond from '../components/Nav/NavSecond'
import PlaceDetail from '../components/PlaceDetail/PlaceDetail';

class Iglesia extends Component {
    render() {
        return (
            < div className = "App" >
                <NavSecond />
                <PlaceDetail name={"Iglesia de San Pedro Apóstol"}/>
            </div>
        )
    }

}

export default Iglesia