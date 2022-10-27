import React, {useState} from "react"
import './App.css';
import Axios from "axios";

function App() {
  const [values, setValues] = useState();

  const handleChangeValues = (value) =>{
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  //erros aqui
  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      usuario: values.Usuario,
      login: values.Login,
      senha: values.Senha,

    }).then((response) => {
      console.log(response);
    });
  }

  return( 
    <div className="app--container">
      <div className="register--container">
        <h1>Cadastro</h1>
        <input type="text" name="usuario" 
        placeholder="Usuário"
        className="register--input"
        onChange={handleChangeValues}
        />
        <input type="text" name="login" 
        placeholder="Login"
        className="register--input"
        onChange={handleChangeValues}
        />
        <input type="password" name="senha" 
        placeholder="Senha"
        className="register--input"
        onChange={handleChangeValues}
        />
        <button className="register--button" onClick={() => handleClickButton()}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
