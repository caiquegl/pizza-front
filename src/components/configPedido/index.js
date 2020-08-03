import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import Queijo from '../../assets/queijo.jpg'
import Bacon from '../../assets/bacon.jpg'
import Molho from '../../assets/molho.jpg'
import Lixeira from '../../assets/icons/lixeira.svg';


import Pizza from '../../assets/pizza1.png';

import'./style.css';

export default function ConfigPedido(props){
    const history = useHistory();
    let pizzaEscolhida = sessionStorage.getItem("pizza");


    const [massa , setMassa] = useState("");
    const [tamanho , setTamanho] = useState("");
    const [queijo, setQueijo] = useState("");
    const [bacon, setBacon] = useState("");
    const [molho, setMolho] = useState("");
    const [observacao, setObservacao] = useState("");


    function deleteAdicionais(){
        setQueijo("");
        setBacon("");
        setMolho("");
    }
    function deleteMassa(){
        setMassa("")
    }
    function deleteTamanho(){
        setTamanho("")
    }

    function finalizarConfig(){
        if(tamanho === "" || massa === "" || pizzaEscolhida === ""){
            alert("Voce precisa definir a massa e o tamanho!")
        }else{
        sessionStorage.setItem("massaDaPizza",massa);
        sessionStorage.setItem("adicionais",`${molho} ${bacon} ${queijo}`);
        sessionStorage.setItem("tamanhoDaPizza",tamanho);
        sessionStorage.setItem("observacaoDeEntrega",observacao);

        return history.push("/pagamento");
     }
    }

    function deletePizza(){
        sessionStorage.setItem("pizza","");
        return history.push("/");

    }


    


    return(
        <div>
            <div className="container flex spaceB">
                <div className="config shadow">
                    <h2>
                        Massa da pizza:
                    </h2>
                    <div className="flex">
                    <Form.Check
                        type="radio"
                        label="Massa Fina"
                        name="massa"
                        id="massaFina"
                        value={"Fina"}
                        onChange={(e) => setMassa(e.target.value)}
                    />
                    <Form.Check
                        type="radio"
                        label="Massa Grossa"
                        name="massa"
                        id="massaGrossa"
                        value={"Grossa"}
                        onChange={(e) => setMassa(e.target.value)}
                    />
                    </div>
                    <h2>
                        Tamanho da pizza:
                    </h2>
                    <div className="flex">
                    <Form.Check
                        type="radio"
                        label="Grande"
                        name="tamanho"
                        id="grande"
                        value={"Grande"}
                        onChange={(e) => setTamanho(e.target.value)}
                    />
                    <Form.Check
                        type="radio"
                        label="Média"
                        name="tamanho"
                        id="media"
                        value={"Média"}
                        onChange={(e) => setTamanho(e.target.value)}
                    /><Form.Check
                        type="radio"
                        label="Pequena"
                        name="tamanho"
                        id="pequena"
                        value="Pequena"
                        onChange={(e) => setTamanho(e.target.value)}
                    />
                    </div>
                    <h2>
                        Adicionais:
                    </h2>
                    <div className="adicionais flex borderTop"> 
                        <Form.Check
                            type="checkbox"
                            label="Queijo"
                            name="queijo"
                            id="Queijo"
                            value="Queijo"
                            onChange={(e) => setQueijo(e.target.value)}
        
                        />
                        <img src={Queijo} alt="icon"/>
                    </div>
                    <div className="adicionais flex">
                        <Form.Check
                            type="checkbox"
                            label="Bacon"
                            name="bacon"
                            id="Bacon"
                            value="Bacon"
                            onChange={(e) => setBacon(e.target.value)}
                        />
                        <img src={Bacon} alt="icon"/>
                    </div>
                    <div className="adicionais flex">
                        <Form.Check
                            type="checkbox"
                            label="Molho"
                            name="molho"
                            id="Molho"
                            value="Molho"
                            onChange={(e) => setMolho(e.target.value)}
                        />
                        <img src={Molho} alt="icon"/>
                    </div>
                    <h2> Observação:</h2>
                    <textarea 
                    placeholder="Adicione uma obeservação"
                    value={observacao}
                    onChange={e => setObservacao(e.target.value)}
                    />
                </div>

                <div className="seuPedido shadow">
                    <h2>Verifique seu pedido:</h2>
                    <div className="talao">
                        <div className="flex spaceB borderBottom">
                            <img src={Pizza} alt="icon"/>
                            <p>{pizzaEscolhida}</p>
                            <div className="flex spaceB">
                               
                                <img src={Lixeira} className="lixeira" alt="icon" onClick={deletePizza}/>
                            </div>
                        </div>
                        <div className="flex spaceB borderBottom">
                            <p>Massa da pizza:</p>
                            <div className="flex spaceB">
                                <p>
                                    <strong>{massa}</strong>
                                </p>
                                <img src={Lixeira} className="lixeira" alt="icon" onClick={deleteMassa}/>
                            </div>
                        </div>
                        <div className="flex spaceB borderBottom">
                            <p>Tamanho da pizza:</p>
                            <div className="flex spaceB">
                                <p>
                                    <strong>{tamanho}</strong>
                                </p>
                                <img src={Lixeira} className="lixeira" alt="icon" onClick={deleteTamanho}/>
                            </div>
                        </div>
                        <div className="flex spaceB borderBottom">
                            <p>
                                Adicionais:
                            </p>
                            <div className="flex spaceB">
                                <p>
                                    <strong>{`${queijo} ${bacon} ${molho}`}</strong>
                                </p>
                                <img src={Lixeira} className="lixeira" alt="icon" onClick={deleteAdicionais}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <button onClick={finalizarConfig} className="botaoPedido">Confirmar pedido</button>
        </div>
    )
}