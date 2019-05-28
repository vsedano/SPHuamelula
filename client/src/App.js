import React, { Component } from 'react'
import './App.css';
import Nav from './components/Nav/Nav'
import MainVideo from './components/MainVideo/MainVideo'
import Cultura from './components/Cultura/Cultura'
import Places from './components/Places/Places'
import Contact from './components/Contact/Contact'
import Tips from './components/Tips/Tips'

class App extends Component {
    render() {
        return ( 
            < div className = "App" >
                <Nav/>
                <MainVideo />
                <Cultura />
                <Places/>
                <Tips/>
                <Contact/>
            </div>
        );
    }
}

export default App;