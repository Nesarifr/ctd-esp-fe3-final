import React from "react";
import Card from '../Components/Card';

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
      </div>
    </>
  );
};

export default Favs;
