import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Componentes
import App from './App';
import CerrodelosPajaritos from './views/CerrodelosPajaritos'
import PlayaMorroAyuta from './views/PlayaMorroAyuta'
import PlayaGrande from './views/PlayaGrande'
import LagunadeMazcalco from './views/LagunadeMazcalco'
import RiodelosLagartos from './views/RiodelosLagartos'
import CerrodelaMujerEmbarazada from './views/CerrodelaMujerEmbarazada'
import Iglesia from './views/Iglesia'

const AppRoutes = () =>
    <Route>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/Cerro de los Pajaritos" component={CerrodelosPajaritos}/>
            <Route exact path="/Playa Morro Ayuta" component={PlayaMorroAyuta}/>
            <Route exact path="/Playa Grande" component={PlayaGrande}/>
            <Route exact path="/Laguna de Mazcalco" component={LagunadeMazcalco}/>
            <Route exact path="/Río de los Lagartos" component={RiodelosLagartos}/>
            <Route exact path="/Cerro de la Mujer Dormida Embarazada" component={CerrodelaMujerEmbarazada}/>
            <Route exact path="/Iglesia de San Pedro Apóstol" component={Iglesia}/>
        </Switch>
    </Route>

export default AppRoutes;