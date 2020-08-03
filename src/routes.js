import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home/index';
import Pedido from './pages/pedido/index';
import Registrar from './pages/cadastro/index';
import Pagamento from './pages/pagamento/index';
import Finalizar from './pages/finalizar/index';
import Login from './pages/login/index';
import Adm from './pages/adm/index';
import Cliente from './pages/cliente/index';
import PedidoCliente from './pages/pedidoCliente/index';
import AtualizarP from './pages/atualizar/index';





export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/> 
                <Route path="/pedido" exact component={Pedido}/>
                <Route path="/pagamento" exact component={Pagamento}/>  
                <Route path="/cadastro" exact component={Registrar}/> 
                <Route path="/finalizar" exact component={Finalizar}/> 
                <Route path="/login" exact component={Login}/> 
                <Route path="/cliente" exact component={Cliente}/> 
                <Route path="/adm" exact component={Adm}/> 
                <Route path="/pedidoCliente" exact component={PedidoCliente}/> 
                <Route path="/atualizar" exact component={AtualizarP}/> 

            </Switch>
        </BrowserRouter>
    )
};