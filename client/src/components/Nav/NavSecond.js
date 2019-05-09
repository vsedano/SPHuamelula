import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap';
import Axios from 'axios'
import { FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa"
import './Nav.css';
import logo from '../../img/logo oaxaca.png'
import logoSPH from '../../img/logosph.png'
import imgW from '../../img/weatherIcons/03d.png'

class NavSecond extends Component {
    constructor(){
        super()
        this.state = {
            weather:[]
        }
    }
    componentWillMount(){
        const url = "http://api.openweathermap.org/data/2.5/weather?lat=16.028651&lon=-95.668444&appid=fe38e6fe901795e41eec23574c52d83b&units=metric"
        Axios.get(url).then(res => {
            document.getElementById('temp').innerHTML = `${Math.ceil(res.data.main.temp)}&deg;`
            document.getElementById('iconWeather').src = require (`../../img/weatherIcons/${res.data.weather[0].icon}.png`)
        })
    }
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
                <div className="container">
                    <img id="sp_logo" src = { logo } width="8%"/>
                    <img id="sp_logo" src = { logoSPH } width="8%"/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Inicio
                                <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#cultura">Cultura</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#turismo">Lugares turistícos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#tips">Tips para viajar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#contacto">Contacto</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav nav-flex-icons">
                            <li className="nav-item">
                                <a href="https://www.facebook.com/San-Pedro-Huamelula-348439752322130/" className="nav-link" target="_blank">
                                    <FaFacebookF className="fa fa-facebook"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://twitter.com/SHuamelula" className="nav-link" target="_blank">
                                    <FaTwitter className="fa fa-twitter"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.instagram.com/municipio.sanpedrohuamelula/" className="nav-link" target="_blank">
                                    <FaInstagram className="fa fa-instagram"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <img id="iconWeather" src={imgW}></img>
                                <label id="temp">{this.state.weather.temp}</label>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavSecond