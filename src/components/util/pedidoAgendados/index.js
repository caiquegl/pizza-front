import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './style.css';
import Sum from '../../../assets/icons/sum.svg';
import Api from '../../../api/servidor/index';




export default function PedidoAgendado() {
    const history = useHistory()
    let cpfSession = sessionStorage.getItem("cpf");

    const [pizzasPreparando, setPizzasPreparando] = useState([]);

    function handleOpen(id) {
        sessionStorage.setItem("infoPedido", id);
        history.push("/pedidoCliente")
    }


    const data = {
        atualizacao: "agendado",
        CpfUsuario: cpfSession,
    }
    useEffect(() => {
        Api.post('search', data).then(response => {
            setPizzasPreparando(response.data);
        })


    }, [])

    return (
        <div>

            <h5>Pedidos Agendado:</h5>
            <div className="flex pedidosAndamento">
                {pizzasPreparando.map(item => (

                    <li className="flex spaceB">

                        <div>
                            <p>Pedido numero:</p>
                            <strong>{item.idPedidos}</strong>
                        </div>


                        <div>
                            <p>Endereço de entrega:</p>
                            <strong>{item.rua}</strong>
                        </div>
                        <div>
                            <p>Status:</p>
                            <strong>{item.statusPedido}</strong>
                        </div>
                        <img src={Sum} alt="sum" onClick={() => handleOpen(item.idPedidos)} />
                    </li>
                ))}
            </div>

        </div>
    )
}