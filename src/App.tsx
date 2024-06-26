import React from 'react';
import './App.css';
import Header from "./Companent/Header/Header";
import Navbar from "./Companent/Navbar/Navbar";
import Profile from "./Companent/Profile/Profile";
import Music from "./Companent/Music/Music";
import Setting from "./Companent/Setting/Setting";
import Error404 from "./Companent/Error/Error";
import {Navigate, Route, Routes} from "react-router-dom";
import NewsContainer from "./Companent/News/NewsContainer";
import DialogsContainer from "./Companent/Dialogs/DialogsContainer";



export type PathsType = {
    paths: {
        [key: string]: string;
    };
};
const PATH = {
    PAGE1: '/Profile',
    PAGE2: '/Dialogs',
    PAGE3: '/News',
    PAGE4: '/Music',
    PAGE5: '/Setting',
    ERORR: '/Error404',
} as const

// @ts-ignore
function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar paths={PATH}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    < Route path="/" element={<Navigate to={'/Profile'}/>}/>
                    < Route path={PATH.PAGE1} element={<Profile />}/>
                    < Route path={PATH.PAGE2} element={<DialogsContainer />}/>
                    < Route path={PATH.PAGE3} element={<NewsContainer/>}/>
                    < Route path={PATH.PAGE4} element={<Music/>}/>
                    < Route path={PATH.PAGE5} element={<Setting/>}/>
                    < Route path={'/*'} element={<Error404/>} />
                    < Route path={'/Profile/*'} element={<Error404/>} />
                </Routes>
            </div>

        </div>
    );
}
export default App;
