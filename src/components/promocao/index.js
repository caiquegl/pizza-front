import React from 'react';

import './estyle.css';

import Promo from '../../assets/promo.png';
import Promo1 from '../../assets/promo1.png';


export default function Promocao(){
    return(
        <div className="fullPromo">
            <div className="container flex centerPromo">
                <img src={Promo}  className="promo1" alt="Promo1"/>
                <img src={Promo1}  className="promo2" alt="Promo2"/>

            </div>
        </div>
    )
}