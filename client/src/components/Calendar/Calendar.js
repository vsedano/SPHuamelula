import React, {Component} from 'react'
import './Calendar.css'

class Calendar extends Component {
    render(){
        const eventos = [
            {day:'6 de Enero', description: 'Se celebra a los 3 reyes magos'},
            {day:'8 de Enero', description: 'Santuario de Esquipulas I, en el barrio de la Santa Cruz'},
            {day:'15 de Enero', description: 'Santuario de Esquipulas II, en la Agencia de los Cocos.'},
            {day:'19 y 20 de Enero', description: 'Se celebra a San Sebastian de las Flores'},
            {day:'1 de Mayo', description: 'Día de la Santa Cruz, en el Cerro de la Arriera'},
            {day:'3 de Mayo', description: 'Se celebra a la Santa Cruz, La Pasión Verde, en el barrio de la Santa Cruz'},
            {day:'8 de Mayo', description: 'Día de la Santa Cruz en el Cerrito del Recibimiento'},
            {day:'20 de Mayo', description: 'Día de la Santa Cruz, Pasión Verde en el Cerrito de los Pajaritos'},
            {day:'1er martes de Junio', description:'Llega San Antonio al pueblo'},
            {day:'13 de Junio', description:'Se celebra a San Antonio'},
            {day:'23-30 de Junio', description:'Fiesta del Santo Patron San PEdro Apóstol'},
            {day:'Último martes de Septiembre', description:'Se traslada La Virgen del Rosario'},
            {day:'6-8 de Octubre', description:'Fiesta de la Virgen del Rosario'},
            {day:'15 de Diciembre', description:'Aparición de la estrella de 8 puntas'},
            {day:'26 de Diciembre', description:'Se celebra al Santo Niño de Atocha'},
        ]

        const addEvent = (event, index) => {
            console.log(event)
            return (
                <div className="container col-sm-3 col-md-6 col-lg-3">
                    <div className="event">
                        <div className="day">
                            <label>{event.day}</label>
                        </div>
                        <div>
                            <p>{event.description}</p>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="container">
                <div className="row calendar">
                    {eventos.map(addEvent)}
                </div>
            </div>
        )
    }
}

export default Calendar