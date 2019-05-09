import React, { Component } from 'react'
import NavSecond from '../components/Nav/NavSecond'
import PlaceDetail from '../components/PlaceDetail/PlaceDetail';

class RioLagartos extends Component {
    render() {
        return (
            < div className = "App" >
                <NavSecond />
                <PlaceDetail name={"Rio de los Lagartos"}/>
            </div>
        )
    }
}

export default RioLagartos