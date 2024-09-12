import React from "react";
import { Link } from "react-router-dom";


const Card = ({ dentist }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <h2>{dentist.name}</h2>
        <p>{dentist.username}</p>
        <Link to={"/dentist/" + dentist.id}>View Details</Link>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
