import React from 'react';
import Reactdom from 'react-dom';
import App from './component/App';
import {BrowserRouter} from 'react-router-dom'

Reactdom.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
document.getElementById('root')
);



