import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ dentist }) => {

  const {setFavs} = useContextGlobal()
  const addFav = ()=>{
    setFavs((favs) => [...favs, dentist])
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
