import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import store, { StoreStateType} from "./redux/state";




let rerenderEntireTree = (store:any) => {
    ReactDOM.render(
        <HashRouter>
            <App state={store.getState()}
                 addPost={store.addPost}
                 updateNewPostText={store.updateNewPostText}
                 addMessage={store.addMessage}
                 updateNewMessageText={store.updateNewMessageText}
            />
        </HashRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);