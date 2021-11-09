import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App centered column">
      <LoginCard />
    </div>
  );
}

function LoginCard() {
  //HOOCKS
  const [userName,setUserName]=useState("")
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  useEffect(()=>{
    if (userName.length > 3 && userName !=="username"){
      //console.log("username validado");
      setDisableButton(false);
    }else{
      //console.log("Username no paso las validaciones");
      setDisableButton(true);
    }
  },[userName,password])
  useEffect(() => {
    if (password.length > 3 && password !== "password") {
      //console.log("Password validado exitosamente");
      setDisableButton(false);
    } else {
      //console.log("Password no paso las validaciones");
      setDisableButton(true);
    }
  },[password,userName]);

  return (
    <div className="flex-container centered">
      <div className="card ">
        <div className="regla">Condiciones de registro:</div>
        <div className="regla">
          El username y password deben tener más de 3 letras.
        </div>
        <div className="regla">
          Los valores para ambos casos no deben ser "username" y "password"
          respectivamente.
        </div>
        <div className="inputContainer">
          <input
            autoComplete="off"
            placeholder="username"
            name="username"
            type="text"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <input 
          placeholder="password" 
          name="password" 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}          
          />
        </div>
        <button disabled className="btn" disabled={disableButton}>
          Crear cuenta
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
