import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detail, setDetail] = useState({})
  const { id } = useParams();
  
  const url = "https://jsonplaceholder.typicode.com/users/" + id

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data)
      setDetail(res.data)
    })
  },[])

  return (
    <>
      <h1>{detail.name}</h1>
      <h2>{detail.email}</h2>
      <h3>{detail.phone}</h3>
      <h3>{detail.website}</h3>
    </>
  )
}

export default Detail