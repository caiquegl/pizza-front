import React from 'react';
import './style.css';

import Nav from '../../components/nav/index';
import Footer from '../../components/footer/index'
import Processo from '../../components/processo/index';
import Pagamento from '../../components/pagamento/index';

export default function Pedido(props){
    return(
        <div>
            <Nav />
            <div className="bgPedidos">
                <Processo p2="active"/>
                <Pagamento />
            </div>
            <Footer />
        </div>
    )
}