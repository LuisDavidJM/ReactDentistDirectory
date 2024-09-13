import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ dentist }) => {

  const { state, dispatch } = useContextGlobal()
  const isFav = state.favs.find((fav) => fav.id == dentist.id)
  const addFav = ()=>{
    //setFavs((favs) => [...favs, dentist])
    dispatch({type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: dentist})
  }

  return (
    <div className="card">
        <h2>{dentist.name}</h2>
        <p>{dentist.username}</p>
        <Link to={"/dentist/" + dentist.id}>View Details</Link>
        <button onClick={addFav} className="favButton">{isFav ? "Remove fav" : "Add fav"}</button>
    </div>
  );
};

export default Card;
