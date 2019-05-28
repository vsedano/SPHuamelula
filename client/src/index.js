import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import AppRoutes from './routers';

ReactDOM.render(
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>,
    document.getElementById('root')
);
