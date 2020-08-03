import React from 'react';
import './estyle.css';

import Nav from '../../components/nav/index';
import Footer from '../../components/footer/index'
import Processo from '../../components/processo/index';
import ConfigPedido from '../../components/configPedido/index';

export default function Pedido(props){
    return(
        <div>
            <Nav />
            <div className="bgPedidos">
                <Processo p1="active"/>
                <ConfigPedido/>

            </div>
            <Footer />
        </div>
    )
}