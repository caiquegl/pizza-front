import React from 'react';

import './style.css';
import Nav from '../../components/nav/index';
import Footer from '../../components/footer/index'
import Processo from '../../components/processo/index';

import Finalizado from '../../assets/icons/finalizado.svg';


export default function Finalizar(){
    return(
        <div>
            <Nav />
            <div className="bgPedidos">
                <Processo p3="active"/>
                <div className="container bgFinalizado shadow">
                    <img src={Finalizado} alt="Finalizado" />
                    <h2>Parabéns seu pedido foi finalizado</h2>
                    <p>Te esperamos em breve com muita fome!!</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}