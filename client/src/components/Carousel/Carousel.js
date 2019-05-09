import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

class CarouselMain extends Component {
    render() {
        var i = 0;
        var txt = 'Ven a conocer San Pedro Huamelula, Oaxaca';
        var speed = 60;
        const typeWriter = () => {
            if (i < txt.length) {
                document.getElementById("headerSPH").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        const img = (require.context('../../img/main', false, /\.(png|jpe?g|svg)$/));
        const addImage = (item, index) => { 
            let content = index === 0 ? (
                <div className="carousel-item active">
                    <img src={img(item)} width="1100" height="560"/>
                    <div class="carousel-caption">
                        <h1 id="headerSPH" className="headerSPH"></h1>
                        <p>Un lugar..........</p>
                    </div>
                </div>
            ) : (
                <div className="carousel-item">
                    <img src={img(item)} width="1100" height="560"/>
                </div>
            )
            return content
        }
        setTimeout(typeWriter, 1000);

        return (
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
        )
    }
}

export default CarouselMain