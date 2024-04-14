import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import state from "./redux/state";

ReactDOM.render(
    <HashRouter>
        <App state={state}/>
    </HashRouter>,
    document.getElementById('root')
);