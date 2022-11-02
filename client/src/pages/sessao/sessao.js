import React, { useState} from 'react';
import '../../style/sessao.style.css';
import Axios from "axios";

export default function Sessao(props) {
    const [values, setValues] = useState();

    const votoSim = () => {
        Axios.update("http://localhost:3001/sim", {
            QTD_VOTOS_POS: values.QTD_VOTOS_POS
    
        }).then((response) => {
          console.log(response);
        });
      }
      const votoNao = () => {
        Axios.update("http://localhost:3001/nao", {
            QTD_VOTOS_NEG: values.QTD_VOTOS_NEG
    
        }).then((response) => {
          console.log(response);
        });
      }
    return <div className="sessao--container">
        <h1 className="sessao--nome">{props.name}</h1>
        <p className="sessao--descricao">{props.descricao}</p>
        <button className="sessao--primeira" onClick={() => votoSim()}>{props.primeira}</button>
        <button className="sessao--segunda" onClick={() => votoNao()}>{props.segunda}</button>
        <p className="sessao--estado">Estado: {props.estado}</p>
    
    </div>;
};