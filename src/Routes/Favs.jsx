import React from "react";
import Card from '../Components/Card';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favs = localStorage.getItem('fav') || '[]';
  const favsArray = JSON.parse(favs);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favsArray.map((item) => (
          <Card key={item.id} children={item}/>
        ))}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
