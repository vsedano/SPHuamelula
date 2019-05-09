import React, {Component} from 'react'
import { FaMagic, FaPenFancy } from "react-icons/fa"
import './Tips.css'

class Tips extends Component {
    render() {
        const tipsES = [
            {name:"Planea tu viaje con anticipación"},
            {name:"Recuerda trazar tu ruta y alternativas para llegar al lugar"},
            {name:"Crea un itinerario de tu día para que logres ver todos los atractivos que te ofrece el lugar"},
            {name:"Tener un lugar fijo en donde te quedarás durante tus vacaciones"},
            {name:"Considera el dinero que deseas gastar en tus vacaciones"},
            {name:"Lleva ropa cómoda y adecuada para el lugar  que se visite"},
            {name:"Es importante llevar sandalias o zapatos cómodos, no olvides llevar tus zapatos acuáticos"},
            {name:"Usa bloqueador solar para evitar quemaduras graves"},
            {name:"Siempre carga con tu repelente de insectos o mosquitos"},
            {name:"Lleva cámara fotográfica para capturar momentos inolvidables"},
            {name:"Utiliza gorra o sombrero para protegerse del sol"},
            {name:"Recuerda recoger tu basura para mantener las áreas limpias"},
            {name:"Respeta los monumentos y costumbres del lugar que visites"},
            {name:"Compra artesanías que vendan en el lugar que visites"},
            {name:"Apoya la economía local del lugar que visites"},
            {name:"Prueba la gastronomía local del lugar aprovechando los puestos que se encuentran en las calles, avenidas o parques"},
            {name:"Investiga antes de visitar un lugar nuevo"},
            {name:"Pregunta datos o lugares interesantes que puedas conocer con  los habitantes del lugar"},
            {name:"Recuerda llevar electrónicamente o fotocopias de tus documentos oficiales con foto por si te pierden y puedas tener un respaldo"}
        ]

        const tipsEN = [
            {name:"Plan your trip in advance"},
            {name:"Remember to map your route and an alternative route to your destination"},
            {name:"Create an itinerary so that you will be able to see all the attractions that the destination offers"},
            {name:"Have a fixed place where you will stay during your vacation"},
            {name:"Consider the amount of money you want to spend on your vacation and bring cash in the local currency with you because ATMs are not common place"},
            {name:"Wear comfortable and suitable clothing for the place you are visiting"},
            {name:"It is important to have sandals and comfortable shoes, do not forget to bring shoes suitable for water"},
            {name:"Apply ample sunscreen and carry it with you to reapply to prevent severe sun burns"},
            {name:"Always bring insect repellent"},
            {name:"Bring a camera to capture unforgettable moments"},
            {name:"Use a cap or hat to protect yourself from the sun"},
            {name:"Remember to collect your trash and to keep all areas clean"},
            {name:"Respect the monuments and customs of the place you visit"},
            {name:"Buy handicrafts in the place you visit"},
            {name:"Support the local economy of the place you visit"},
            {name:"Try the local gastronomy of your destination take advantage of the food stands that are in the streets, avenues and parks"},
            {name:"Do research before you visit a new place"},
            {name:"Ask for information about interesting places where you can meet with the locals"},
            {name:"Remember to take a scanned electronic or photocopy of your official documents so you have a backup in case they are lost"}
        ]

        const putText = (text) => {
            return <p><FaPenFancy/>{text.name}</p>
        }

        return (
            <div className="container-fluid" id="tips">
                <h3 className="header"><FaMagic/>TIPS PARA QUE TU VIAJE SEA INOLVIDABLE</h3>
                <hr/>
                <div className="row">
                    <div className="container col-sm-6 col-md-6 col-lg-6">
                        <div className="tips">
                            {tipsES.map(putText)}
                        </div>            
                    </div>
                    <div className="container col-sm-6 col-md-6 col-lg-6">
                        <div className="tips">
                            {tipsEN.map(putText)}
                        </div>            
                    </div>                    
                </div>
            </div>
        )
    }
}

export default Tips