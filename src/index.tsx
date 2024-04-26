import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import store, {RootStateType, StoreStateType} from "./redux/state";




let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <HashRouter>
            <App
                store={store}
                // state={state}
                //  addPost={store.addPost}
                //  updateNewPostText={store.updateNewPostText}
                //  addMessage={store.addMessage}
                //  updateNewMessageText={store.updateNewMessageText}
            />
        </HashRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);