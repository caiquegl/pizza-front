import React, { useState, useEffect } from 'react';

import { CSVLink } from "react-csv";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './style.css';
import Api from '../../api/servidor/index';





export default function Adm() {
    let atualizarPedido = sessionStorage.getItem("atualizar");

    const [cards, setCards] = useState([]);

    
    const [pizza, setPizza] = useState("");
    const [massa, setMassa] = useState("");
    const [tamanho, setTamanho] = useState("");
    const [adicionais, setAdicionais] = useState("");
    const [pagamento, setPagamento] = useState("");
    const [obs, setObs] = useState("");
    const [status, setStatus] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [complemento, setComplemento] = useState("");
    const [dataEntrega, setDataEntrega] = useState("");









    useEffect(()=>{
        Api.post('pedidoId', {
            idPedidos: atualizarPedido
        }).then(response => {
            setCards(response.data);
            setPizza(response.data[0].pizza)
            setMassa(response.data[0].massaDaPizza)
            setTamanho(response.data[0].tamanhoDaPizza)
            setAdicionais(response.data[0].adicionais)
            setPagamento(response.data[0].pagamento)
            setObs(response.data[0].obsPedido)
            setDataEntrega(response.data[0].data)
            setStatus(response.data[0].statusPedido)
            setRua(response.data[0].rua)
            setNumero(response.data[0].numero)
            setBairro(response.data[0].bairro)
            setComplemento(response.data[0].complemento)
        })
    

      }, [])



      var time = new Date(),
        dia  = time.getDate().toString(),
        diaF = (dia.length === 1) ? '0'+dia : dia,
        mes  = (time.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length === 1) ? '0'+mes : mes,
        anoF = time.getFullYear();    
    time =  diaF+"/"+mesF+"/"+anoF;


      async function atu(){

        const data = {
            idPedidos:atualizarPedido,
            pizza: pizza,
	        tamanhoDaPizza:tamanho,
	        massaDaPizza:massa,
	        adicionais:adicionais,
	        data:dataEntrega,
            pagamento:pagamento,
            statusPedido:status,
            obsPedido:obs,
	        rua:rua,
	        numero:numero,
            bairro:bairro,
            complemento: complemento,
        };

        try{
            await Api.post("atualizarPedido", data);
            toast.success('Atualizado com sucesso', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            
        }catch (err) {}
      }

 


      const csvData = cards;


    return (
        <div className="container containerAdm  atualizarP shadow">

            <div className="flex">
                    <h2>Atualizar pedido</h2>
                    {cards.map(item => (

                        <li>
                            <p>Numero do pedido: <strong>{item.idPedidos}</strong></p>

                            <div className="flex">
                                <div className="form-group">
                                    <label className="block">
                                        Pizza de:
                                    </label>
                                    <input 
                                    type="text" 
                                    placeholder={item.pizza}
                                    value={pizza}
                                    onChange={(e) => setPizza(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="block">
                                        Tipo de massa:
                                    </label>
                                    <input 
                                    type="text" 
                                    placeholder={item.massaDaPizza}
                                    value={massa}
                                    onChange={(e) => setMassa(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="block">
                                        Tamanho da pizza:
                                    </label>
                                    <input 
                                    type="text" 
                                    placeholder={item.tamanhoDaPizza}
                                    value={tamanho}
                                    onChange={(e) => setTamanho(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="block">
                                        Adicionais:
                                    </label>
                                    <input 
                                    type="text" 
                                    placeholder={item.adicionais}
                                    value={adicionais}
                                    onChange={(e) => setAdicionais(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="block">
                                        Pagamento:
                                    </label>
                                    <input 
                                    type="text" 
                                    placeholder={item.pagamento}
                                    value={pagamento}
                                    onChange={(e) => setPagamento(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="block">
                                        Observação no pedido:
                                    </label>
                                    <input 
                                    type="text" 
                                    placeholder={item.obsPedido}
                                    value={obs}
                                    onChange={(e) => setObs(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="block">
                                        Data da entrega:
                                    </label>
                                    <input 
                                    type="text" 
                                    placeholder={item.data}
                                    value={dataEntrega}
                                    onChange={(e) => setDataEntrega(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="block">
                                       Status Pedido:
                                    </label>
                                    <select value={status} onChange={e => setStatus(e.target.value)}>
                                        <option value={item.statusPedido}>{item.statusPedido}</option>
                                        <option value="Preparando">Preparando</option>
                                        <option value="Cancelado">Cancelado</option>
                                        <option value="Em entrega">Em entrega</option>
                                        <option value="Entregue">Entregue</option>
                                        <option value="Agendado">Agendado</option>
                                    </select>
                                </div>
                            </div>
                            <h2>Endereço de entrega</h2>
                            <div className="flex">
                                <div className="form-group">
                                    <label className="block">
                                        Rua:
                                    </label>
                                    <input 
                                    type="text" 
                                    placeholder={item.rua}
                                    value={rua}
                                    onChange={(e) => setRua(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="block">
                                        Numero:
                                    </label>
                                    <input 
                                    type="text" 
                                    placeholder={item.numero}
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="block">
                                        Bairro:
                                    </label>
                                    <input 
                                    type="text" 
                                    placeholder={item.bairro}
                                    value={bairro}
                                    onChange={(e) => setBairro(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="block">
                                        Complemento:
                                    </label>
                                    <input 
                                    type="text" 
                                    placeholder={item.complemento}
                                    value={complemento}
                                    onChange={(e) => setComplemento(e.target.value)}
                                    />
                                </div>

                            </div>
                            
                        </li>
                        
                    ))}
              

            </div>



        <div className="flex spaceB">
        <button className="download">
            <CSVLink data={csvData} className="semEstilo">Exportar dados</CSVLink>;
        </button>
        <button onClick={() => atu()} className="download">
            Atualizar pedido
        </button>
        </div>
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