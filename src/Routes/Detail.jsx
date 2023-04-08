import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const  Detail = () => {
  const [user, setUser] = useState([]);
  const param = useParams();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  // const userApi = useFetch(`https://jsonplaceholder.typicode.com/users/${param.id}`)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${param.id}`)
    .then((response)=> response.json())
    .then((dataApi)=> setUser(dataApi))
  }, [param.id])


  return (

      <div className="card-grid">
        <div className="card" key={user.id}>
        <h1>Detail Dentist {user.id}</h1>
          <h3>{user.name}</h3>
          <p>{user.email}</p> 
          <p>{user.phone}</p>
          <p>{user.website}</p> 
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        </div>
      </div>
  
  );
};

export default Detail;