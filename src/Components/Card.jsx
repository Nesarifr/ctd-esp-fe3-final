import React from "react";
import { useContext, useState, useEffect } from "react";
import { ContextGlobal } from "./utils/Global.context";
import { Link } from 'react-router-dom'

const  Card = (cards) => {
  const contextData = useContext(ContextGlobal);
  const [listUsers, setListUsers] = useState([]); 

  useEffect(()=>{
    console.log("efect");
    cards.children ? setListUsers(cards.children) : setListUsers(contextData)
  }, [contextData, listUsers, cards.children])

  const addFav = (user)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const users = localStorage.getItem('fav') || '[]';
    let usersArray = JSON.parse(users);
    usersArray.some(u => u.id === user.id) ? console.log("existe") : usersArray.push(user ); 
    localStorage.setItem('fav', JSON.stringify(usersArray))
    // setListUsers(usersArray)
  }

  // const removeFav = (array, id)=>{
  //   const newArray = array.filter(item => item.id !== id)
  //   console.log(newArray);
  //   setListUsers(newArray)
  //   return newArray
  // }

  return (
    listUsers?.map((item) => (

      <div className="card" key={item.id}>
        <Link to={`/dentista/${item.id}`} >
          <span>{item.id}</span>
          <h3>{item.name}</h3>
          <p>{item.username}</p> 
          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <button onClick={()=>addFav(item)} className="favButton">Add fav</button>
        </Link>
      </div>
    )))
};

export default Card;
