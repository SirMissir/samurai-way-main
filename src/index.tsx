import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import state, {addPost} from "./redux/state";

addPost('SamuraiJS.Com')

ReactDOM.render(
    <HashRouter>
        <App state={state} addPost={addPost}/>
    </HashRouter>,
    document.getElementById('root')
);