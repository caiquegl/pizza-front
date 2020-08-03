import React from 'react';

import './style.css';

import PedidosAndamento from '../util/pedidoEmAndamento/index';
import PedidoAgendado from '../util/pedidoAgendados/index';
import PedidoFinalizado from '../util/pedidosFinalizados/index';


export default function ContainerCliente(){
    let nomeSession = sessionStorage.getItem("nome");
    return(
        <div className="container containerCliente shadow">
            <h1>Bem vindo {nomeSession}</h1>
            <PedidosAndamento />
            <PedidoAgendado />
            <PedidoFinalizado />
        </div>
    )
}