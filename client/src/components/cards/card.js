import React from 'react';
import './card.css';
import FormDialog from '../dialog/dialog'
import Axios from "axios";

export default function Sessao(props) {
    const [open, setOpen] = React.useState(false);
    //const [values] = useState();

    const handleClickSessao = () => {
        setOpen(true);
    }

    const handleClickVotoSim = () => {
      Axios.post("http://localhost:3001/votoSim", {
      }).then((response) => {
        console.log(response);
      });
    }

    const handleClickVotoNao = () => {
      Axios.post("http://localhost:3001/votoNao", {
      }).then((response) => {
        console.log(response);
      });
    }

    return (
      <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.name}
        descricao={props.descricao}
        estado={props.estado}
        listSessao={props.listSessao}
        setListSessao={props.setListSessao}
        id={props.id}
      />
      <div className="sessao--container">
        <h1 className="sessao--nome">{props.name}</h1>
        <p className="sessao--descricao">{props.descricao}</p>
        <p className="sessao--estado">Estado: {props.estado}</p>
        <button className="sessao--primeira" onClick={() => handleClickVotoSim()}>{props.primeira}</button>
        <button className="sessao--segunda" onClick={() => handleClickVotoNao()}>{props.segunda}</button>
        <br></br>
        <button className="sessao--edit" onClick={() => handleClickSessao()}>Editar</button>
      </div>
      </>
    )
};