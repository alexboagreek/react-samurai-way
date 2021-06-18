import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Barry
                </div>
                <div className={s.dialog}>
                    Jill
                </div>
                <div className={s.dialog}>
                    Nemesis
                </div>
                <div className={s.dialog}>
                    Vesscer
                </div>
            </div>
                <div className={s.messages}>
                    <div className={s.dialog}>Hello Moto</div>
                    <div className={s.dialog}>Hello Jill</div>
                    <div className={s.dialog}>Hello Barry</div>
                </div>
        </div>
    )
}
export default Dialogs;