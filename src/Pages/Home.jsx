import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data)
      setDentists(res.data)
    })
  },[])

  return (
    <main className="" >
      <div className='card-grid'>
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist}/>
        ))}
      </div>
    </main>
  )
}

export default Home