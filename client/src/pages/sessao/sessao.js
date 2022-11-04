import React, { useState} from 'react';
import '../../style/sessao.style.css';
import Axios from "axios";

export default function Sessao(props) {
    const [values] = useState();
    //parei aqui
    const votoSim = () => {
        Axios.post("http://localhost:3001/sim", {
          ESCOLHA: values.ESCOLHA,
          ESTADO: values.ESTADO,
          ID_POLITICO: values.ID_POLITICO,
          ID_SESSAO: values.ID_SESSAO,
          ID: values.ID
    
        }).then((response) => {
          console.log(response);
        });
      }
      const votoNao = () => {
        Axios.post("http://localhost:3001/nao", {
            ESCOLHA: values.ESCOLHA,
            ESTADO: values.ESTADO,
            ID_POLITICO: values.ID_POLITICO,
            ID_SESSAO: values.ID_SESSAO,
            ID: values.ID
    
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