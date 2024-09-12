import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentists } = useContextGlobal()

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