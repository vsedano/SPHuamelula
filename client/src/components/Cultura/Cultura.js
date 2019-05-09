import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Cultura.css'
import { FaStar } from "react-icons/fa"
import Calendar from '../Calendar/Calendar'
import imgC1 from '../../img/cultura/cultura1.jpg'
import imgC2 from '../../img/cultura/cultura2.jpg'
import imgC3 from '../../img/cultura/cultura3.jpg'
import imgC4 from '../../img/cultura/cultura4.jpg'
import imgC5 from '../../img/cultura/cultura5.jpg'

class Cultura extends Component {
    render() {
        var i = 0
        var txt = 'Principales Festividades...!'        
        var speed = 110
        const typeWriter = () => {
            if(i===0)
                document.getElementById("festividades").innerHTML = ""
            if (i < txt.length) {
                document.getElementById("festividades").innerHTML += txt.charAt(i)
                i++
                setTimeout(typeWriter, speed)
            }
        }
        setTimeout(typeWriter, 1000)

        return (
            <div className="container-fluid" id="cultura">
                <h3 className="header"><FaStar/>CULTURA</h3>
                <hr/>
                <img src={imgC1} className="imgMainC col-sm-3 col-md-6 col-lg-6" width="40%"></img>
                <br></br>
                <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <img src={imgC2} className="imgC" width="90%"></img>
                        <br></br>
                        <img src={imgC3} className="imgC" width="90%"></img>
                    </div>
                    <p className="desc col-sm-3 col-md-6 col-lg-6">
                        Para nuestro pueblo, el chontal siempre ha sido un aspecto representativo de los habitantes del mismo, sin embargo, en los últimos años, en un afán de actualizarnos y entrar en un mundo moderno, perdimos este pilar fundamental para nosotros, dejándolo de enseñar a los niños y sólo enfocándonos en el Español. <br></br>
                        Hoy en día, nos hemos dado cuenta que debemos resguardar este punto tan importante para nosotros, por lo que nos hemos dado a la tarea de enseñar y transmitir a los nuevos niños y jóvenes el idioma a través de las escuelas.<br></br>
                        Son muy pocas las personas que aún hablan y escriben el idioma, por lo que debemos de dar pasos agigantados para que las nuevas generaciones se lleven lo más que puedan del idioma, de nuestras tradiciones y de nuestra cultura, para que con esto, tengan un legado que puedan transmitir a las nuevas generaciones.
                    </p>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <img src={imgC4} className="imgC" width="90%"></img>
                        <br></br>
                        <img src={imgC5} className="imgC" width="90%"></img>
                    </div>
                </div>
                <h2 className="headerPlace" id="festividades"><i></i></h2>
                <Calendar/>
            </div>
        )
    }
}

export default Cultura