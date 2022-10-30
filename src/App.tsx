import React from 'react';
import './App.css';
import Header from "./Companent/Header";
import Navbar from "./Companent/Navbar";
import Profile from "./Companent/Profile";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>


        </div>
    );
}


export default App;
