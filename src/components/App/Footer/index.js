import React from 'react';


import s from './style.module.css';

export const Footer = ({todo, done}) => {
    return (
        <div className={s.wrap}>
            <div className={s.text}>
                <span> Task to do  : {todo}  </span>
                <span> Done : {done}</span>
            </div>
        </div>
    );
};

