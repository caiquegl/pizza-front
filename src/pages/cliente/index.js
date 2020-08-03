import React from 'react';

import Nav from '../../components/nav/index';
import ContainerCliente from '../../components/containerCliente/index';
import Footer from '../../components/footer/index'



export default function Home(){
    return(
        <div>
            <Nav />
            <div className="bgPedidos">
                <ContainerCliente />
            </div>
            <Footer />
        </div>
    )
}