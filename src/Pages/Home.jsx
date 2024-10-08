import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
import styles from '../Styles/home.module.css';

const Home = () => {
  const { state } = useContextGlobal()

  return (
    <main className={state.theme ? styles.homeDark : styles.homeLight} >
      <div className={styles.cardGrid}>
        {state.dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist}/>
        ))}
      </div>
    </main>
  )
}

export default Home