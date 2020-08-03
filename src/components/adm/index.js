import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { CSVLink } from "react-csv";


import Sum from '../../assets/icons/sum.svg';
import './style.css';
import Api from '../../api/servidor/index';





export default function Adm() {
    const history = useHistory()

    const [cards, setCards] = useState([]);
    const [cpf, setCpf] = useState("");

    useEffect(()=>{
        Api.post('todosPedidos').then(response => {
            setCards(response.data);
        })
    

      }, [])

      var time = new Date(),
        dia  = time.getDate().toString(),
        diaF = (dia.length === 1) ? '0'+dia : dia,
        mes  = (time.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length === 1) ? '0'+mes : mes,
        anoF = time.getFullYear();    
    time =  diaF+"/"+mesF+"/"+anoF;


    async function pedidosHoje() {
        let data = {
            data: time,
        }
        await Api.post("pedidosHoje", data).then(response => {
            setCards(response.data);
        })
    }

    async function pedidosAgendado() {
        let data = {
            agendados: "agendado",
        }
        await Api.post("agendados", data).then(response => {
            setCards(response.data);
        })
    }
    async function pedidosEntregue() {
        let data = {
            agendados: "entregue",
        }
        await Api.post("agendados", data).then(response => {
            setCards(response.data);
        })
    }

    async function porCpf() {
        let data = {
            CpfUsuario: cpf,
        }
        await Api.post("pedidoPorCPF", data).then(response => {
            setCards(response.data);
        })
    }

    function atualizar(id) {
        sessionStorage.setItem("atualizar", id);
        history.push("atualizar")
    }




    const csvData = cards;


    return (
        <div className="container containerAdm shadow">

            <div className="flex spaceB">
                <button onClick={() => pedidosHoje()}>
                    Pedidos de hoje
                </button>
                <button onClick={() => pedidosAgendado()}>
                    Pedidos de agendado
                </button>
                <button onClick={() => pedidosEntregue()}>
                    Pedidos entregue
                </button>
                <div className="form-group">
                    <label>
                        Pesquisar por CPF:
                    </label>
                    <br />
                    <input
                        type="text"
                        placeholder="Digite o CPF"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                    />
                    <br></br>
                    <button className="pes" onClick={() => porCpf()}>Pesquisar</button>
                </div>
            </div>
            <div className="flex">
                
                    {cards.map(item => (

                        
                            <div className="cardAdm shadow">
                                <p>
                                    Pedido numero:
                    </p>
                                <h2>
                                    {item.idPedidos}
                                </h2>
                                <p>
                                    Status:
                    </p>
                                <h2>
                                {item.statusPedido}
                    </h2>
                                <img src={Sum} alt="sum" variant="primary" onClick={() => atualizar(item.idPedidos)}/>
                            </div>



    

                        
                    ))}
              

            </div>




        <button className="download">
            <CSVLink data={csvData} className="semEstilo">Exportar todos pedidos</CSVLink>;
        </button>
            
        </div>
    )
}