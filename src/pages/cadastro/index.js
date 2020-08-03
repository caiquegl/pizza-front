import React from 'react';

import Nav from '../../components/nav/index';
import Footer from '../../components/footer/index';
import Formulario from '../../components/util/formCadastro/index.js';



export default function Cadastro(props){
    return(
        <div>
            <Nav />
            <div className="bgPedidos">
                <Formulario />    

            </div>
            <Footer />
            
        </div>
    )
}