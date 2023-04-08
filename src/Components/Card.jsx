import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

export const  Card = (cards) => {
  const [user, setUsers] = useState([]); 


  useEffect(()=>{
    cards.children ? setUsers(cards.children) : console.log("no hay cards");
  }, [ user, cards.children])

  const addFav = (userFav)=>{
    const users = localStorage.getItem('fav') || '[]';
    let usersArray = JSON.parse(users);
    usersArray.some(u => u.id === userFav.id) ? console.log("existe") : usersArray.push(user ); 
    localStorage.setItem('fav', JSON.stringify(usersArray))

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
        </Link>
          <p>Username : {user.username}</p> 
          <button onClick={()=>addFav(user)} className="favButton">Add fav</button>
      </div>
    )
};

export default Card;
