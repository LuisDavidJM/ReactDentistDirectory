import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import styles from "../Styles/card.module.css"


const Card = ({ dentist }) => {

  const { state, dispatch } = useContextGlobal()
  const isFav = state.favs.find((fav) => fav.id == dentist.id)
  const addFav = ()=>{
    dispatch({type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: dentist})
  }

  return (
    <div className={state.theme ? styles.cardDark : styles.cardLight}>
        <h2>{dentist.name}</h2>
        <p>{dentist.username}</p>
        <img src="/images/doctor.jpg" alt="Dentist" />
        <Link to={"/dentist/" + dentist.id} className={state.theme ? styles.cardLinkDark : styles.cardLinkLight}>View Details</Link>
        <button onClick={addFav} className={state.theme ? styles.favButtonDark : styles.favButtonLight}>{isFav ? "Remove fav" : "Add fav"}</button>
    </div>
  );
};

export default Card;
