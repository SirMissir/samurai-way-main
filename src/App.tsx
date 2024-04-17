import React from 'react';
import './App.css';
import Header from "./Companent/Header/Header";
import Navbar from "./Companent/Navbar/Navbar";
import Profile from "./Companent/Profile/Profile";
import Dialogs from "./Companent/Dialogs/Dialogs";
import Music from "./Companent/Music/Music";
import News from "./Companent/News/News";
import Setting from "./Companent/Setting/Setting";
// import Error404 from "./Companent/Error/Error";
import {Navigate, Route, Routes} from "react-router-dom";
import {RootStateType} from "./redux/state";

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

type IndexType = {
    state: RootStateType;
    addPost: (postMessage: string) => void;
    updateNewPostText: (newText: string) => void;
};

function App(props: IndexType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar paths={PATH}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    < Route path="/" element={<Navigate to={'/Profile'}/>}/>

                    < Route path={PATH.PAGE1} element={<Profile profilePage={props.state.profilePage}
                                                                addPost={props.addPost}
                                                                updateNewPostText={props.updateNewPostText}
                        />}
                    />

                    < Route path={PATH.PAGE2} element={<Dialogs state={props.state.dialogsPage}/>}/>

                    < Route path={PATH.PAGE3} element={<News/>}/>
                    < Route path={PATH.PAGE4} element={<Music/>}/>
                    < Route path={PATH.PAGE5} element={<Setting/>}/>

                    {/*< Route path={'/*'} element={<Error404/>} />*/}
                    {/*< Route path={'/Profile/*'} element={<Error404/>} />*/}
                </Routes>
            </div>


            {/*<Profile/>*/}
        </div>
    );
}


export default App;
