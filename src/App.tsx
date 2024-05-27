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
import  {RootStateType} from "./redux/store";
import {AppRootStoreType} from "./redux/redux-store";
import DialogsContainer from "./Companent/Dialogs/DialogsContainer";
import NewsContainer from "./Companent/News/NewsContainer";


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
    state:RootStateType,
    dispatch:(action:any)=>void,
    store: {
        getState: () => AppRootStoreType;
        dispatch: (action: any) => void;
        subscribe: (listener: () => void) => () => void;
    };
};


function App(props: IndexType) {
    debugger
    const state = props.store.getState();
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar paths={PATH}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    < Route path="/" element={<Navigate to={'/Profile'}/>}/>

                    < Route path={PATH.PAGE1} element={<Profile dispatch={props.dispatch}
                                                                profilePage={state.profilePage}

                    />}
                    />

                    < Route path={PATH.PAGE2} element={<DialogsContainer state={state.dialogsPage}
                                                                dispatch={props.dispatch}

                    />}
                    />

                    < Route path={PATH.PAGE3} element={<NewsContainer/>}/>
                    < Route path={PATH.PAGE4} element={<Music/>}/>
                    < Route path={PATH.PAGE5} element={<Setting/>}/>

                    < Route path={'/*'} element={<Error404/>} />
                    < Route path={'/Profile/*'} element={<Error404/>} />
                </Routes>
            </div>


            {/*<Profile/>*/}
        </div>
    );
}


export default App;
