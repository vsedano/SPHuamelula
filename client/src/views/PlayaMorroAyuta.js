import React, { Component } from 'react'
import NavSecond from '../components/Nav/NavSecond'
import PlaceDetail from '../components/PlaceDetail/PlaceDetail';

class PlayaMorroAyuta extends Component {
    render() {
        return(
            < div className = "App" >
                <NavSecond />
                <PlaceDetail name={"Playa Morro Ayuta"}/>
            </div>
        )
    }

}

export default PlayaMorroAyuta