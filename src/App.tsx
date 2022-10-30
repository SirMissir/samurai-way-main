import React from 'react';
import './App.css';


function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0' alt="Logo"/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src='https://images.pexels.com/photos/127160/pexels-photo-127160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="Banner"/>
                </div>
                <div>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTHxHKq92yNEVYlgiRzFFKoG-h0_kYI9ouhtE3oGoh0OFlMf75alT_YvYzQOR1qVXB1s0&usqp=CAU' alt="Avatar img"/>
                </div>
                <div>
                    ava+description
                </div>
                <div>
                    My post
                    <div>
                        New Post
                    </div>
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 2
                        </div>
                        <div>
                            Post 3
                        </div>

                    </div>
                </div>


            </div>


        </div>
    );
}


export default App;
