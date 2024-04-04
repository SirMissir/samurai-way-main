import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";

let postsData =[
    {id:1, message:'Hi,how are you',countLike:20},
    {id:2, message:"It is my first post", countLike:30},

]
let dialogsData =[
    {id:1, name:"Dimych"},
    {id:2, name:"Andrey"},
    {id:3, name:"Sveta"},
    {id:4, name:"Lera"},
    {id:5, name:"Victor"}
]
let messagesData =[
    {id:1, name:"Hi"},
    {id:2, name:"How is your it-kamasutra"},
    {id:3, name:"OK"},
    {id:4, name:"How much your learning"},
    {id:5, name:"Victor"}
]

ReactDOM.render(
    <HashRouter>
        <App postsData={postsData}  messagesData={messagesData} dialogsData={dialogsData}/>
    </HashRouter>,
    document.getElementById('root')
);