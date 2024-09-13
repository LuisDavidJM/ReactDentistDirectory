import styles from '../Styles/footer.module.css';
import { useContextGlobal } from './utils/global.context';

const Footer = () => {

  const { state } = useContextGlobal()

  return (
    <footer className={state.theme ? styles.footerDark : styles.footerLight}>
      <div className={styles.footerContent}>
        <p>Powered by Luis David Jimenez</p>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  )
}

export default Footer
