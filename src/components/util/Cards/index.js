import React from 'react';
import {useHistory} from 'react-router-dom';


import './estyle.css';

export default function Cards(props){
    let cpfSession = sessionStorage.getItem("cpf");

    const history = useHistory();

    function escPizza(nome){
        if(!cpfSession ){
            alert("Faça o login antes de pedir uma pizza!!!");
            history.push("/login")
        }else{
        sessionStorage.setItem("pizza", nome);
        history.push("/pedido")
        }
    }

    console.log(cpfSession);




    return(
        <div className="card shadow">
            <img src={props.imgPizza} alt="Pizza"/>
            <h2>
                {props.nomePizza}
            </h2>
            <p>
                {props.descriPizza}
            </p>
            <div>
            </div>
            <div className="flex d-50">
                <div>
                    R$ 0,00
                </div>
                <button className="addCard" onClick={e => escPizza("frango")} >
                    Add Card
                </button>
            </div>
        </div>
    )
}