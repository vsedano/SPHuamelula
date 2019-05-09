import React, { Component } from 'react'
import NavSecond from '../components/Nav/NavSecond'
import PlaceDetail from '../components/PlaceDetail/PlaceDetail';

class CerrodelosPajaritos extends Component {
    render() {
        return (
            < div className = "App" >
                <NavSecond />
                <PlaceDetail name={"Cerro de los Pajaritos"}/>
            </div>
        )
    }

}

export default CerrodelosPajaritos