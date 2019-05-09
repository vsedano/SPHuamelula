import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Places.css'
import { FaMapMarkedAlt, FaEye } from "react-icons/fa"

class Places extends Component {
    render() {
        const img = (require.context('../../img/places', false, /\.(png|jpe?g|svg)$/));
        const addImage = (item, index) => { 
            let link = `${item.replace("./","").replace(".jpg", "")}`
            return (
                <div className="container col-sm-3 col-md-4 col-lg-3">
                    <div className="divP">
                        <img src={img(item)} alt={item} className="imgPlace" width="100%" height="100%"/>
                        <a className="namePlace" href={link}><FaEye />&nbsp;&nbsp;Conoce más...</a>
                    </div>
                </div>
            )
        }
        return (
            <div className="container-fluid" id="turismo">
                <h3 className="header"><FaMapMarkedAlt/>LUGARES TURISTÍCOS</h3>
                <hr/>
                <h6><i>No dejes de visitar estos lugares majestuosos</i></h6>
                <div className="row">
                    {img.keys().map(addImage)}
                </div>
            </div>
        )
    }
}

export default Places