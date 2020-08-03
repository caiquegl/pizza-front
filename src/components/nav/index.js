import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import './style.css';

import Logo from '../../assets/logo.png'
import IconPizza from '../../assets/icons/pizza.svg';
import Pedido from '../../assets/icons/book.svg';
import Sair from '../../assets/icons/sair.svg';


export default function NavBar(){
    let nomeSession = sessionStorage.getItem("nome");
    let pizzaSession = sessionStorage.getItem("pizza");

    let history = useHistory();
    
    function moveCadastro(){    
        return history.push("/cadastro");
    }
    function logault(){
        sessionStorage.clear();
        return history.push("/");

    }

    function pgPedido(){
        if(pizzaSession < 1){
            alert("Escolha uma pizza antes");
            history.push("/")
        }else{
            history.push("/pedido");
        }
    }

    let desativar = "";
    let logado = ""

    function verificar(){
        if (nomeSession < 1) {
            desativar = "";
            logado = "none"
        }
        else{
            desativar = "none";
            logado = "logado"
         }
    }

    window.onload = verificar();
    
    return(
        <div className="container estruturaNav">
            <Link to="/">
                <img src={Logo} className="logoNav" alt="icon"/>
            </Link>
            
            <div className="navBar">
                <div className="flex">
                <Link to="/">
                    <img src={IconPizza} className="iconsNav" alt="Pizza"/>
                    <p>Pizza</p>
                </Link>
                </div>
                <div className="flex unic">
                    <div onClick={pgPedido} className="flex unicNav">
                        <img src={Pedido} className="iconsNav" alt="Pizza"/>
                        <p>Pedido</p>
                    </div>
                </div>
                <div className="flex containerLogin" id={desativar}>
                    <Link to="/login" className="login">
                        <p>Login</p>
                    </Link>
                    <button className="cadastro" onClick={moveCadastro}>
                        Cadastro
                    </button>
                </div>
                <div className="flex p-none" id={logado}>
                <Link to="/cliente">
                    <p>Bem vindo <strong>{nomeSession}</strong></p>
                </Link>
                </div>
                <img src={Sair} className="sairIcon" alt="Pizza" id={logado} onClick={() => logault()}/>

            </div>
            
        </div>
    )
}