import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context'
import styles from '../Styles/home.module.css';


const Contact = () => {
  const { state } = useContextGlobal()

  return (
    <div className={state.theme ? styles.homeDark : styles.homeLight}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact