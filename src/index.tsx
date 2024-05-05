import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import store from "./redux/state";

let rerenderEntireTree = (state:any) => {
    ReactDOM.render(
        <HashRouter>
            <App
                store={store}
            />
        </HashRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);