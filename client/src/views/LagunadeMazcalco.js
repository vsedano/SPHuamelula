import React, { Component } from 'react'
import NavSecond from '../components/Nav/NavSecond'
import PlaceDetail from '../components/PlaceDetail/PlaceDetail';

class LagunadeMazcalco extends Component {
    render() {
        return (
            < div className = "App" >
                <NavSecond />
                <PlaceDetail name={"Laguna de Mazcalco"}/>
            </div>
        )
    }

}

export default LagunadeMazcalco