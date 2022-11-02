import React, { useState, useEffect} from "react";
import './style/App.css';
import Axios from "axios";
import Sessao from "./pages/sessao/sessao";

function App() {
  const [values, setValues] = useState();
  const [listSessao, setListSessao] = useState();

  const handleChangeValues = (value) =>{
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  
  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      Usuario: values.Usuario,
      Login: values.Login,
      Senha: values.Senha

    }).then((response) => {
      console.log(response);
    });
  }

  useEffect(() =>{
    Axios.get("http://localhost:3001/getSessoes").then((response)=>{
      setListSessao(response.data);
    })
  },[]);

  return( 
    <div className="app--container">
      <div className="register--container">
        <h1>Cadastro</h1>
        <input type="text" name="Usuario" 
        placeholder="Usuário"
        className="register--input"
        onChange={handleChangeValues}
        />
        <input type="text" name="Login" 
        placeholder="Login"
        className="register--input"
        onChange={handleChangeValues}
        />
        <input type="password" name="Senha" 
        placeholder="Senha"
        className="register--input"
        onChange={handleChangeValues}
        />
        <button 
          className="register--button" 
          onClick={() => handleClickButton()}>
          Cadastrar
        </button>
      </div>
      {typeof listSessao !== "undefined" && 
        listSessao.map((value) => {
          return (
          <Sessao 
            key={value.id}
            listSessao={listSessao}
            setListSessao={setListSessao}
            id={value.ID}
            name={value.NOME}
            descricao={value.DESCRICAO}
            tipo={value.TIPO}
            primeira={value.PRIMEIRA_OPCAO}
            segunda={value.SEGUNDA_OPCAO}
            participacao={value.PARTICIPACAO}
            dt_ini={value.DATA_INICIAL}
            dt_fim={value.DATA_FINAL}
            controle={value.CONTROLE}
            qtd_max={value.QTD_MAX}
            qtd_pos={value.QTD_VOTOS_POS}
            qtd_neg={value.QTD_VOTOS_NEG}
            estado={value.ESTADO}
          ></Sessao>
          );
        })}
      
    </div>
  );
}

export default App;
