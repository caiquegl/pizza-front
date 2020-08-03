import React from 'react';

import './estyle.css';

import Check from '../../assets/icons/check.svg';
export default function Processo(props){
    return(

        <div className="container">
            <div className="flex processo">
                <h5 className={props.p1}>
                    1
                </h5>
                <span className="tubo">

                </span>
                <h5 className={props.p2}>
                    2
                </h5>
                <span className="tubo">

                </span>
                <h5 className={props.p3}>
                    <img src={Check} alt="icon"/>
                </h5>
            </div>
        </div>
    )
}
