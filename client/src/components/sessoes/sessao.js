import React from 'react';

export default function Sessao(props) {
    return <div className="sessao--container">
        <h1 className="sessao--nome">{props.name}</h1>
        <p className="sessao--descricao">{props.descricao}</p>
        <p className="sessao--primeira">{props.primeira}</p>
        <p className="sessao--segunda">{props.segunda}</p>
        <p className="sessao--estado">{props.estado}</p>
    
    </div>;
};