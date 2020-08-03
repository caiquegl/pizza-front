import React,  {useState} from 'react';
import {useHistory} from 'react-router-dom';


import './style.css';
import Nav from '../../components/nav/index';
import Footer from '../../components/footer/index'

import Api from '../../api/servidor/index';

export default function Login(){
    let history = useHistory();

    function historyHome(local){
        return history.push(local);
    }
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function logando(e){
        e.preventDefault();

        const data = {
	        email:email,
	        senha:senha,
        }

        try{
            let response = await Api.post("logando", data);
            let validacao = response.data.msg;

            if (validacao === "Email ou senha errados!") {
                alert("Email ou cpf ja cadastrado")
            } else{

                sessionStorage.setItem("idUsuario",response.data.idUsuario);
                sessionStorage.setItem("nome",response.data.nome);
                sessionStorage.setItem("email",response.data.email);
                sessionStorage.setItem("telefone",response.data.telefone);
                sessionStorage.setItem("cpf",response.data.cpf);
                sessionStorage.setItem("cep",response.data.cep);
                sessionStorage.setItem("bairro",response.data.bairro);
                sessionStorage.setItem("rua",response.data.rua);
                sessionStorage.setItem("numero",response.data.numero);
                sessionStorage.setItem("complemento",response.data.nome);
                sessionStorage.setItem("obsPedidos",response.data.obsPedido);




                let pagCliente = "cliente"
                  
                return historyHome(pagCliente);
            }

        }catch (err) {}
    }


    return(
        <div>
            <Nav />
            <div className="bgLogin shadow">
                <h2>
                    Login
                </h2>
                <form onSubmit={logando} >
                <div className="center">
                    <div className="formGroup">
                        <label>Digite seu email:</label>
                        <input 
                        type="email" 
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="formGroup">
                        <label>Digite sua senha:</label>
                        <input 
                        type="password" 
                        placeholder="Digite seu email"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                </div>
                <button className="botaoForm">Logar</button>
                </form>
            </div>
        
            <Footer />
        </div>
    )
}