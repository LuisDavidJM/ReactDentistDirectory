import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import styles from "../Styles/home.module.css"
import { useContextGlobal } from '../Components/utils/global.context'

const Detail = () => {
  const { state } = useContextGlobal()
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
    <main className={state.theme ? styles.homeDark : styles.homeLight}>
      <h1>{detail.name}</h1>
      <img style={{width: '300px'}} src="/images/doctor.jpg" alt="Dentist" />
      <h2>{detail.email}</h2>
      <h3>{detail.phone}</h3>
      <h3>{detail.website}</h3>
    </main>
  )
}

export default Detail