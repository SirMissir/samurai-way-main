
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

let rerenderEntireTree = (state: StoreType) => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App
                    // state={state}
                    // dispatch={store.dispatch.bind(store)}
                    // store={store}
                />
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});