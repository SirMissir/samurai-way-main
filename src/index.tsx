import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import state, {addMessage, addPost, RootStateType, updateNewMessageText, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <HashRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
            />
        </HashRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);