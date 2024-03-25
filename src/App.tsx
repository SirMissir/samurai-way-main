import React from 'react';
import './App.css';
import Header from "./Companent/Header/Header";
import Navbar from "./Companent/Navbar/Navbar";
import Profile from "./Companent/Profile/Profile";
import Dialogs from "./Companent/Dialogs/Dialogs";
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
    ERORR: '/error404',
} as const


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar paths={PATH}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    < Route path="/" element={<Navigate to={'/Profile'}/>}/>

                    < Route path={PATH.PAGE1} element={<Profile/>} />
                    < Route path={PATH.PAGE2} element={<Dialogs/>} />
                    {/*< Route path={PATH.PAGE3} element={<News/>} />*/}
                    {/*< Route path={PATH.PAGE4} element={<Music/>} />*/}
                    {/*< Route path={PATH.PAGE4} element={<Setting/>} />*/}

                    {/*< Route path={'/*'} element={<Error404/>} />*/}
                    {/*< Route path={'/adidas/*'} element={<Error404/>} />*/}
                </Routes>
            </div>


            {/*<Profile/>*/}
        </div>
    );
}


export default App;
