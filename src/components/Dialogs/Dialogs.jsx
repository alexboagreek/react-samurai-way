import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};
const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
};

const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Barry' },
        { id: 2, name: 'Jill' },
        { id: 3, name: 'Kris' },
        { id: 4, name: 'John' },
        { id: 5, name: 'Rebecca' }
    ]
    let dialogsElements = dialogs
        .map( d =>  <DialogItem name={d.name} id={d.id}/> );

    //     [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
    // ];
    let messages = [
        { id: 1, message: 'Hello, Moto' },
        { id: 2, message: 'React is POWER!' },
        { id: 3, message: 'PHP is Power!!' },
        { id: 4, message: 'JS is Power!!' },
        { id: 5, message: 'TS is not Power!' }
    ]
    let messagesElements = messages
        .map( m => <Message message = {m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*<DialogItem name="Kris" id="3"/>*/}
                {/*<DialogItem name="John" id="4"/>*/}
                {/*<DialogItem name="Rebecca" id="5"/>*/}
            </div>
                <div className={s.messages}>
                    <Message message={messages[0].message}/>
                    <Message message={messages[1].message}/>
                    {/*<Message message="Hello Barry"/>*/}
                </div>
        </div>
    )
}
export default Dialogs;