import React from 'react';

import './estyle.css';

import Cards from '../util/Cards/index';

import PizzaHome from '../../assets/pizza1.png';
import Salaminho from '../../assets/pizza2.png';
import Pizza3 from '../../assets/pizza3.png';
import Pizza4 from '../../assets/pizza4.png';
import Pizza5 from '../../assets/pizza5.png';
import Pizza6 from '../../assets/pizza6.png';




export default function PizzasHomer(){
    return(
        <div className="container">
            <h2>Pizza</h2>
            <div className="estruturaPizzas">
                
                <Cards imgPizza={PizzaHome} nomePizza="Frango com catupiry" descriPizza="Frango desfiado com requeijão de qualidade!!"/>
                <Cards imgPizza={Salaminho} nomePizza="Salaminho" descriPizza="Muita Mussarela, tomate delicioso, azeitonas verde e salame!"/>
                <Cards imgPizza={Pizza4} nomePizza="4 queijo" descriPizza="Mussarela, gorgonzola, parmesão e catupiry"/>
                <Cards imgPizza={Pizza3} nomePizza="Calabresa" descriPizza="Calabresa, muita cebola e um pouco de mussarela"/>
                <Cards imgPizza={Pizza5} nomePizza="Atum" descriPizza="Atum, cebola e mussarela"/>
                <Cards imgPizza={Pizza6} nomePizza="Buffala" descriPizza="Molho de tomate caseiro com uma mussarela de buffala"/>

            </div>
        </div>
    )
}