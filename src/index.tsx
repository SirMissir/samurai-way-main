import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store, { StoreType} from "./redux/redux-store";




let rerenderEntireTree = () => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
store.subscribe(() => rerenderEntireTree());