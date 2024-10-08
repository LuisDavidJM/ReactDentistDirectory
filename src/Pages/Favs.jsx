import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import styles from "../Styles/home.module.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextGlobal();

  return (
    <main className={state.theme ? styles.homeDark : styles.homeLight}>
      <div className={styles.cardGrid}>
        {state.favs.map((dentist) => (
          <Card key={dentist.id} dentist={dentist}/>
        ))}
      </div>
    </main>
  );
};

export default Favs;
