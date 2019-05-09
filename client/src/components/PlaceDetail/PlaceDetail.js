import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './PlaceDetail.css'

class PlaceDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            'Playa Grande': {
                description:"El acceso se encuentra en la carretera costera del pacifico Acapulco-Salinas Cruz. Para llegar al lugar que es mar abierto, se recorre 5km de terracería. \n Tal atractivo se clasifica como playa virgen, ya que aún no cuenta con la infraestructura suficiente para satisfacer la demanda. En la zona se cultiva coco, papaya, sandia, maíz, Jamaica, ajonjolí, entre otros que se distribuyen principalmente en Oaxaca, Puebla y Ciudad de México."
            },
            'Cerro de los Pajaritos': {
                description:"En este sitio es posible observar toda la cabecera municipal de San Pedro Huamelula y la naturaleza que lo rodea, lo cual lo hace un espacio idóneo para un mirador. \nEste lugar posee una pequeña capilla representativa de la Santa Cruz, así como la escultura de una Cruz"
            },
            'Playa Morro Ayuta': {
                description: "Se cuenta con cuatro accesos para llegar al lugar, desde la carretera Santiago Pinotepa Nacional-Salina Cruz son aproximadamente 5 km. \nLa playa está destinada para la pesca y también para el monitoreo, vigilancia y protección a la tortuga golfina, la cual llega anualmente para anidar en la misma y posteriormente hacer la liberación"
            },
            'Rio de los Lagartos': {
                description: "Tradicionalmente en este río de San Pedro Huamelula se liberaban a los lagartos utilizados en la ceremonia de la toma de posesión del presidente municipal, actualmente se pueden realizar actividades de nado, principalmente en temporada de verano y en temporada de lluvias el volumen del rio incrementa."
            },
            'Laguna de Mazcalco': {
                description: "Mazcalco significa 'en la casa del vendado'. \nEn este sitio se pueden realizar actividades eco-turísticas. Colinda con los municipios Santa María Ecatepec, San Domingo Tehuantepec y Santiago Astata."
            },
            'Cerro de la Mujer Dormida Embarazada': {
                description: "En la carretera hacia la cabecera municipal de San Pedro Huamelula se observa el cerro con la figura de una mujer acostada y embarazada. Que es caracterizada por una leyenda de cultura chontal. "
            },
            'Iglesia de San Pedro Apostol': {
                description: "Una iglesia que data de siglo XVII, su fachada hecha de tabique y fue construida por los dominicos. \n En la parte frontal, se encuentra una pequeña puerta que dirige hacia el techo, además de contar con otros caminos. "
            }
        }
    }
    render() {
        var i = 0
        var txt = `${this.props.name}...!`
        var speed = 110
        const typeWriter = () => {
            if(i===0)
                document.getElementById("headerPlace").innerHTML = ""
            if (i < txt.length) {
                document.getElementById("headerPlace").innerHTML += txt.charAt(i)
                i++
                setTimeout(typeWriter, speed)
            }
        }
        
        const addImage = (item, index) => { 
            let content = index === 0 ? (
                <div className="carousel-item active">
                    <img src={img(item)} width="700" height="360"/>
                </div>
            ) : (
                <div className="carousel-item">
                    <img src={img(item)} width="700" height="360"/>
                </div>
            )
            return content
        }

        const addVideo = (item, index) => { 
            return <ReactPlayer url={video(item)} id="index" className="col-sm-3 col-md-6 col-lg-6 videoPlace" controls/>
        }

        const getPath = (place, type) => {
            switch(place){
                case "Cerro de los Pajaritos":
                    return type==="image"? 
                        (require.context('../../img/Cerro de los Pajaritos', false, /\.(png|jpe?g|svg|jpg)$/)) :
                        (require.context('../../img/Cerro de los Pajaritos', false, /\.(mp4|mov)$/)) 
                    break
                case "Laguna de Mazcalco":
                    return type==="image"? 
                        (require.context('../../img/Laguna de Mazcalco', false, /\.(png|jpe?g|svg|jpg)$/)) :
                        (require.context('../../img/Laguna de Mazcalco', false, /\.(mp4|mov)$/)) 

                    break
                case "Playa Grande":
                    return type==="image"? 
                        (require.context('../../img/Playa Grande', false, /\.(png|jpe?g|svg|jpg)$/)) :
                        (require.context('../../img/Playa Grande', false, /\.(mp4|mov)$/))
                    break
                case "Playa Morro Ayuta":
                    return type=="image"? 
                        (require.context('../../img/Playa Morro Ayuta', false, /\.(png|jpe?g|svg|jpg)$/)) :
                        (require.context('../../img/Playa Morro Ayuta', false, /\.(mp4|mov)$/))
                    break
                case "Rio de los Lagartos":
                    return type=="image"? 
                        (require.context('../../img/Rio de los Lagartos', false, /\.(png|jpe?g|svg|jpg)$/)) :
                        (require.context('../../img/Rio de los Lagartos', false, /\.(mp4|mov)$/))
                    break
                case "Cerro de la Mujer Dormida Embarazada":
                    return type=="image"? 
                        (require.context('../../img/Cerro de la Mujer Dormida Embarazada', false, /\.(png|jpe?g|svg|jpg)$/)) :
                        (require.context('../../img/Cerro de la Mujer Dormida Embarazada', false, /\.(mp4|mov)$/))
                    break
                case "Iglesia de San Pedro Apostol":
                    return type=="image"? 
                        (require.context('../../img/Iglesia de San Pedro Apostol', false, /\.(png|jpe?g|svg|jpg)$/)) :
                        (require.context('../../img/Iglesia de San Pedro Apostol', false, /\.(mp4|mov)$/))
                    break
            }
        }

        const img = getPath(this.props.name, 'image')
        const video = getPath(this.props.name, 'video')
        setTimeout(typeWriter, 1000)

        return (
            <div className="container place">
                <h2 className="headerPlace" id="headerPlace"><i></i></h2>
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {img.keys().map(addImage)}
                    </div>
                    
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
                <p className="desc">{this.state[this.props.name].description}</p>
                <div className="container">
                    <div className="row">
                        {video.keys().map(addVideo)}
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaceDetail