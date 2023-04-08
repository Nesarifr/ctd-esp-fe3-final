import React from "react";
import style from "./Form.module.css";
import { useState } from "react";

const Form = (props) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNombre = (e) => {
    setErrorMessage("");
    setNombre(e.target.value)};

  const handleEmail = (e) => {
    setErrorMessage("");
      setEmail(e.target.value)
  };

function validar(nombre, email){
    if(nombre === "" || email === ""){
        setErrorMessage("El nombre y el email son obligatorios");
        return
    }
    const nombreerrorMessage = nombre.replace(/^\s+|\s+$/gm,'');
    if(nombreerrorMessage.length < 3){
      setErrorMessage("El nombre debe tener al menos 3 caracteres");
      return
    }
    return
}

function handleDatos(e){
    e.preventDefault();
    validar(nombre, email);
}

  return (
    <div className="flex">
      <form onSubmit={handleDatos} >  
        <div style={style.formulario}>
          <div className={style.input}>
              <label htmlFor="nombre">Nombre  </label>  
              <input type="text" id="nombre" value={nombre} onChange={handleNombre} />
          </div>
          <div className={style.input}>
              <label htmlFor="email">Email  </label>
              <input type="email" id="email" value={email} onChange={handleEmail}/>
          </div>
          <div className={style.input}>
              <button type="submit">ENVIAR</button>
          </div>
          <div className={style.input}>
              {errorMessage ? <p>{errorMessage}</p> : null}
              
          </div>
        </div>
      </form>  
    </div>
  );
};

export default Form;
