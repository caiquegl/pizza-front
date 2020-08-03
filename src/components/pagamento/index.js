import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';


import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './style.css';

import Api from '../../api/servidor/index'; 
import ViaCep from '../../api/viaCep/index';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

export default function Pagamento(){
    let history = useHistory();



    let pizzaSession = sessionStorage.getItem("pizza");
    let tamanhoSession = sessionStorage.getItem("tamanhoDaPizza");
    let massaSession = sessionStorage.getItem("massaDaPizza");
    let adicionaisSession = sessionStorage.getItem("adicionais");
    let cpfSession = sessionStorage.getItem("cpf");
    let idUsuarioSession = sessionStorage.getItem("idUsuario");
    let telefoneSession = sessionStorage.getItem("telefone");
    let cepSession = sessionStorage.getItem("cep");
    let ruaSession = sessionStorage.getItem("rua");
    let numeroSession = sessionStorage.getItem("numero");
    let bairroSession = sessionStorage.getItem("bairro");
    let complementoSession = sessionStorage.getItem("complemento");
    let obsSession = sessionStorage.getItem("observacaoDeEntrega");


    const classes = useStyles();

    const [diaAgenda, setDiaAgenda] = useState("");
    const [hora, setHora] = useState("");
    const [enderecoCadastrado, setEnderecoCadastrado] = useState("Sim");
    const [pagamento, setPagamento] = useState("");
    const [newCep, setNewCep] = useState("");
    const [newRua, setNewRua] = useState("");
    const [newNumero, setNewNumero] = useState("");
    const [newBairro, setNewBairro] = useState("");
    const [newComplemento, setNewComplemento] = useState("");







    var time = new Date(),
        dia  = time.getDate().toString(),
        diaF = (dia.length === 1) ? '0'+dia : dia,
        mes  = (time.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length === 1) ? '0'+mes : mes,
        anoF = time.getFullYear();    
    time =  diaF+"/"+mesF+"/"+anoF;

    function historyHome(local){

        return history.push(local);
        
    }

    async function finalizarPedido(e){
        e.preventDefault();
        let data;
        if (enderecoCadastrado === 'Sim') {

            if(hora !== ''){
                time = `${diaAgenda} as ${hora}`
            }



            data = {
                pizza: pizzaSession,
                tamanhoDaPizza: tamanhoSession,
                massaDaPizza: massaSession,
                adicionais:adicionaisSession,
                CpfUsuario: cpfSession,
                idUser: idUsuarioSession,
                enderecoCadastrado: enderecoCadastrado,
                data: time,
                pagamento:pagamento,
                statusPedido:"preparando",
                telefone:telefoneSession,
                cep: cepSession,
                rua:ruaSession,
                numero:numeroSession,
                bairro:bairroSession,
                obsPedido:obsSession,
                complemento: complementoSession
            }

            try{
                await Api.post("pedindo", data);
                      
                let pagCliente = "finalizar";

                sessionStorage.setItem("massaDaPizza","");
                      sessionStorage.setItem("adicionais",``);
                      sessionStorage.setItem("tamanhoDaPizza","");
                      sessionStorage.setItem("observacaoDeEntrega","");
                      sessionStorage.setItem("pizza","");
                      
                      return historyHome(pagCliente);

                      
    
            }catch (err) {
                alert("Tente novamente");
            }
        }

        if (enderecoCadastrado === 'Não') {
            
            if(hora !== ''){
                time = `${diaAgenda} as ${hora}`
            }

            data = {
                pizza: pizzaSession,
                tamanhoDaPizza: tamanhoSession,
                massaDaPizza: massaSession,
                adicionais:adicionaisSession,
                CpfUsuario: cpfSession,
                idUser: idUsuarioSession,
                enderecoCadastrado: enderecoCadastrado,
                data: time,
                pagamento:pagamento,
                statusPedido:"preparando",
                telefone:telefoneSession,
                cep: newCep,
                rua:newRua,
                numero:newNumero,
                bairro:newBairro,
                complemento: newComplemento
            }

            try{

                await Api.post("pedindo", data);      
                let pagCliente = "finalizar"

                sessionStorage.setItem("massaDaPizza","");
                      sessionStorage.setItem("adicionais",``);
                      sessionStorage.setItem("tamanhoDaPizza","");
                      sessionStorage.setItem("observacaoDeEntrega","");
                      sessionStorage.setItem("pizza","");
                      
                      return historyHome(pagCliente);
                
    
            }catch (err) {
                alert("Tente novamente");
            }
        }

    }
    async function viaCep(){
        try{

        let response = await ViaCep.get(`${newCep}/json`);

        setNewRua(response.data.logradouro);
        setNewBairro(response.data.bairro)


        }catch(e){}
    }
        
    


    return(

        
        <div className="container flex shadow paiPagamento">
            <div className="left">
                <h2>
                    Endereço:
                </h2>
                <Form.Check
                        type="radio"
                        label="Utilizar endereço cadastrado"
                        name="pedidoEndereco"
                        id="cadastrado"
                        value="Sim"
                        onChange={e => setEnderecoCadastrado(e.target.value)}
                        
                    />
                    <Form.Check
                        type="radio"
                        label="Utilizar outro endereço"
                        name="pedidoEndereco"
                        id="novoEnd"
                        value="Nao"
                        onChange={e => setEnderecoCadastrado(e.target.value)}
                    />

                    <h2>Agendar pedido:</h2>

                    <TextField
                        id="date"
                        label="Marque o dia da entrega"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        value={diaAgenda}
                        onChange={e => setDiaAgenda(e.target.value)}

                    />
                    <TextField
                        id="time"
                        label="Horario da entrega"
                        type="time"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                        value={hora}
                        onChange={e => setHora(e.target.value)}
                    />

                    <h2>Forma de pagamento:</h2>
                    <Form.Check
                        type="radio"
                        label="Dinheiro"
                        name="pagamento"
                        id="dinheiro"
                        value="Dinheiro"
                        onChange={e => setPagamento(e.target.value)}
                    />
                    <Form.Check
                        type="radio"
                        label="Cartão"
                        name="pagamento"
                        id="cartao"
                        value="Cartão"
                        onChange={e => setPagamento(e.target.value)}
                    />
                    
            </div>
            <div className="rigth2" id={enderecoCadastrado}>
                        <div className="form-group">
                            <label>
                                Cep:
                            </label>
                            <br />
                            <input
                                type="text"
                                placeholder="Digite seu Cep"
                                value={newCep}
                                onChange={e => setNewCep(e.target.value)}
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
                                value={newRua}
                                onChange={e => setNewRua(e.target.value)}
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
                                value={newNumero}
                                onChange={e => setNewNumero(e.target.value)}
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
                                value={newBairro}
                                onChange={e => setNewBairro(e.target.value)}
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
                                value={newComplemento}
                                onChange={e => setNewComplemento(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className="buttonFinalizar" onClick={e => finalizarPedido(e)}>Finalizar pedido</button>
        </div>
    )
}