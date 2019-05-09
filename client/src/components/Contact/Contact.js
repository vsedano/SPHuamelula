import React, { Component } from 'react'
import {FaPhone, FaEnvelope, FaIdCard, FaPeriscope} from "react-icons/fa"
import './Contact.css'
import ipn from '../../img/ipn.png'

class Contact extends Component {
    render() {
        return ( 
            <div className="container footer" id="contacto">
                <h3 className="header"><FaIdCard/>CONTACTO</h3>
                <h6><i>H. Ayuntamiento Constitucional de San Pedro Huamelula</i></h6>
                <div className="row">
                    <div className="col-sm-3 col-md-6 col-lg-2">
                        <b>Teléfonos</b><br></br>
                        <FaPhone/> 995 5222084
                    </div>
                    <div className="col-sm-3 col-md-6 col-lg-4">
                        <b>Correo</b><br></br>
                        <a href="mailto:municipio.sanpedrohuamelula@gmail.com"><FaEnvelope/>municipio.sanpedrohuamelula@gmail.com</a>
                    </div>
                    <div className="col-sm-3 col-md-6 col-lg-3">
                        <b>Ubicación </b><br></br>
                        <a href="https://www.google.com/maps/place/San+Pedro+Huamelula,+Oax./@16.027498,-95.6737925,15.27z/data=!4m5!3m4!1s0x85bfa10cd9baec41:0x6f7c9fadad008fbf!8m2!3d16.0278032!4d-95.6676046"
                            target="_blank"><FaPeriscope/>San Pedro Huamelula, Oaxaca</a>
                    </div>
                    <div className="col-sm-3 col-md-6 col-lg-3">
                        <b>Creada por </b><br></br>
                        <img src={ipn} width="40px" height="40px"/> Instituto Politécnico Nacional
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact