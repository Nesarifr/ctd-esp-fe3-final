import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const  Detail = () => {
  const [user, setUser] = useState([]);
  const param = useParams();

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
        </div>
      </div>
  
  );
};

export default Detail;