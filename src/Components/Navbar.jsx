import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/navbar.module.css';
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  //const { theme, toggleTheme } = useContext(ContextGlobal);

  return (
    //<nav className={theme === 'dark' ? styles.navbarDark : styles.navbarLight}>
    <nav>
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
      <button className={styles.button}>
        Change theme
      </button>
    </nav>
  )
}

export default Navbar