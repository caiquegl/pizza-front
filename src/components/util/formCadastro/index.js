import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './style.css';

import Api from '../../../api/servidor/index';
import ViaCep from '../../../api/viaCep/index';


export default function Formulario() {
    let history = useHistory();

    function historyHome(local){

        return history.push(local);
        
    }

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [complemento, setComplemento] = useState("");

    async function viaCep(){
        try{

        let response = await ViaCep.get(`${cep}/json`);

        setRua(response.data.logradouro);
        setBairro(response.data.bairro)


        }catch(e){}
    }


    async function cadastrar(e){
        e.preventDefault();

        const data = {
            nome: nome,
	        email:email,
	        senha:senha,
	        cpf:cpf,
	        telefone:telefone,
	        cep:cep,
	        rua:rua,
	        numero:numero,
            bairro:bairro,
            complemento: complemento,
        }

        try{
            let response = await Api.post("cadastro", data);
            let validacao = response.data.msg;

            if (validacao === "Cadastrado") {
                
                
                  let pagCliente = "/login"
                  
                  return historyHome(pagCliente);


            }
            if(validacao === "CPF ja cadastrado"){
                toast.error('Email ou CPF ja cadastrado', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }

        }catch (err) {}
    }



    return (
        <div className="container shadow registrar">
            <h2>Registrar</h2>
            <form onSubmit={cadastrar}>

                <div className="pai-regis">

                    <div className="left">
                        <div className="form-group">
                            <label>
                                Nome:
                            </label>
                            <br />
                            <input
                                type="text"
                                placeholder="Digite seu nome"
                                required
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                CPF:
                            </label>
                            <br />
                            <input
                                type="text"
                                placeholder="Digite seu CPF"
                                required
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Telefone:
                            </label>
                            <br />
                            <input
                                type="text"
                                placeholder="Digite seu telefone com DD"
                                required
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Email:
                            </label>
                            <br />
                            <input
                                type="email"
                                placeholder="Digite seu email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Senha:
                            </label>
                            <br />
                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                required
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                    </div>
                    <div className="rigth2">
                        <div className="form-group">
                            <label>
                                Cep:
                            </label>
                            <br />
                            <input
                                type="text"
                                placeholder="Digite seu Cep"
                                required
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                onCompositionEnd={viaCep()}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Rua:
                            </label>
                            <br />
                            <input
                                type="text"
                                placeholder="Digite seu Rua"
                                required
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Numero:
                            </label>
                            <br />
                            <input
                                type="text"
                                placeholder="Digite seu numero com DD"
                                required
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Bairro:
                            </label>
                            <br />
                            <input
                                type="text"
                                placeholder="Digite seu bairro"
                                required
                                value={bairro}
                                onChange={(e) => setBairro(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Complemento:
                            </label>
                            <br />
                            <input
                                type="texte"
                                placeholder="Digite seu Complemento"
                                required
                                value={complemento}
                                onChange={(e) => setComplemento(e.target.value)}
                            />
                        </div>
                    </div>
                    <button>Cadastrar</button>
                    <div className="rigth block">
                        <h2>
                            USAMOS SEU E-MAIL DE FORMA
                            100% SEGURA PARA:
                    </h2>
                        <ul className="block">
                            <li>
                                Identificar seu perfil
                        </li>
                            <li>
                                Notificar sobre novidades
                        </li>
                            <li>
                                Gerenciar seu histórico de pedidos
                        </li>
                            <li>
                                Acelerar o preenchimento de suas informações
                        </li>
                        </ul>
                    </div>

                </div>
            </form>

            <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />

        </div>
    )
}