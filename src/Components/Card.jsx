import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

export const  Card = (cards) => {
  const [user, setUsers] = useState([]); 


  useEffect(()=>{
    console.log("efect");
    cards.children ? setUsers(cards.children) : console.log("no hay cards");
  }, [ user, cards.children])

  const addFav = (userFav)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const users = localStorage.getItem('fav') || '[]';
    let usersArray = JSON.parse(userFav);
    usersArray.some(u => u.id === userFav.id) ? console.log("existe") : usersArray.push(user ); 
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
      <div className="card">
        <Link to={`/dentista/${user.id}`} >
          <span>{user.id}</span>
          <h3>{user.name}</h3>
          <p>Username : {user.username}</p> 
          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <button onClick={()=>addFav(user)} className="favButton">Add fav</button>
        </Link>
      </div>
    )
};

export default Card;
