import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Message =(props:any)=>{
    const [text, setText] = useState('');

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && event.shiftKey) {
            // Логика для отправки сообщения по нажатию Shift + Enter
        }
    };

    const handleSendClick = () => {
        // Логика для отправки сообщения по клику на кнопку "Send"
    };

    return (
        <div>
            <div>{value.text}</div>
            <div>
        <textarea
            id="hw1-textarea"
            className={s.textarea}
            title="Shift+Enter for send"
            placeholder="Type your message"
            value={text}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
        />
                <button onClick={handleSendClick}>Send</button>
            </div>
        </div>
    );
        // <div className={s.message}>{props.message}</div>
}

export default Message

