import React, { useEffect , useState } from 'react';

import './style.css';

import Api from '../../api/servidor/index';

export default function PedidoCliente() {
    let infoPedidoSession = sessionStorage.getItem("infoPedido");
    let cpfSession = sessionStorage.getItem("cpf");

    const [info, setInfo] = useState([]);

    let data = {
        idPedido: infoPedidoSession,
        cpf: cpfSession
    }

    useEffect(() => {
        Api.post('infoPedidoUser', data).then(response => {
            setInfo(response.data);
        })


    }, [])

    return (
        <div className="container pedidoCliente shadow flex">
            {info.map(item => (
                <li>
                    <h2>Informações do pedido</h2>
                        

                    <section className="shadow">
                        <p>
                            Id do pedido:
                    </p>
                        <strong>
                            {item.idPedidos}
                    </strong>
                    
                    </section>
                    
                    
                    <section className="shadow">
                        <p>
                            Pizza:
                    </p>
                        <strong>
                        {item.pizza}
                    </strong>
                    </section>
                    <section className="shadow">
                        <p>
                            Massa da pizza:
                    </p>
                        <strong>
                        {item.massaDaPizza}
                    </strong>
                    </section>
                    <section className="shadow">
                        <p>
                            Tamanho da pizza:
                    </p>
                        <strong>
                        {item.tamanhoDaPizza}
                    </strong>
                    </section>
                    <section className="shadow">
                        <p>
                            Adicionais:
                    </p>
                        <strong>
                        {item.adicionais}
                    </strong>
                    </section>
                    <section className="shadow">
                        <p>
                            Observação:
                    </p>
                        <strong>
                        {item.obsPedido}
                    </strong>
                    </section>
                    <section className="shadow">
                        <p>
                            Status:
                    </p>
                        <strong>
                        {item.statusPedido}
                    </strong>
                    </section>
                    <h2>Entrega</h2>

                    <section className="shadow">
                        <p>Rua:</p>
                        <strong>{item.rua}</strong>
                    </section>
                    <section className="shadow">
                        <p>Numero:</p>
                        <strong>{item.numero}</strong>
                    </section>
                    <section className="shadow">
                        <p>Bairro:</p>
                        <strong>{item.bairro}</strong>
                    </section>
                    <section className="shadow">
                        <p>Complemento:</p>
                        <strong>{item.complemento}</strong>
                    </section>
                    <section className="shadow">
                        <p>Telefone:</p>
                        <strong>{item.telefone}</strong>
                    </section>

                </li>
            ))}


        </div>
    )
}