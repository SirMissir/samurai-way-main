import React from 'react';
import './App.css';
import Header from "./Companent/Header/Header";
import Navbar from "./Companent/Navbar/Navbar";
import Profile from "./Companent/Profile/Profile";
import Dialogs from "./Companent/Dialogs/Dialogs";
import Music from "./Companent/Music/Music";
import News from "./Companent/News/News";
import Setting from "./Companent/Setting/Setting";
import Error404 from "./Companent/Error/Error";
import {Navigate, Route, Routes} from "react-router-dom";






export type PathsType ={
    paths: {
        [key: string]: string;
    };
}

const PATH ={
    PAGE1: '/Profile',
    PAGE2: '/Dialogs',
    PAGE3: '/News',
    PAGE4: '/Music',
    PAGE5: '/Setting',
    ERORR: '/Error404',
} as const


function App(props) {
     /*let postsData =[
         {id:1, message:'Hi,how are you',countLike:20},
         {id:2, message:"It is my first post", countLike:30},

     ]*/

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar paths={PATH}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    < Route path="/" element={<Navigate to={'/Profile'}/>}/>

                    < Route path={PATH.PAGE1} element={<Profile postsData={props.postsData}/>} />
                    < Route path={PATH.PAGE2} element={<Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>} />
                    < Route path={PATH.PAGE3} element={<News/>} />
                    < Route path={PATH.PAGE4} element={<Music/>} />
                    < Route path={PATH.PAGE5} element={<Setting/>} />

                    {/*< Route path={'/*'} element={<Error404/>} />*/}
                    {/*< Route path={'/Profile/*'} element={<Error404/>} />*/}
                </Routes>
            </div>


            {/*<Profile/>*/}
        </div>
    );
}


export default App;
