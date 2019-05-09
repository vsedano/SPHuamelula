import React, { Component } from 'react'
import NavSecond from '../components/Nav/NavSecond'
import PlaceDetail from '../components/PlaceDetail/PlaceDetail';

class CerrodelaMujerEmbarazada extends Component {
    render() {
        return (
            < div className = "App" >
                <NavSecond />
                <PlaceDetail name={"Cerro de la Mujer Dormida Embarazada"}/>
            </div>
        )
    }

}

export default CerrodelaMujerEmbarazada