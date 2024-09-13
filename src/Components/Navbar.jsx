import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/navbar.module.css';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={state.theme ? styles.navbarDark : styles.navbarLight}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/home">Home</Link>
        </li>
        <li className={styles.li}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={styles.li}>
          <Link to="/favs">Favorites</Link>
        </li>
      </ul>
      <button className={state.theme ? styles.buttonDark : styles.buttonLight} onClick={toggleTheme}>
      {state.theme ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  )
}

export default Navbar