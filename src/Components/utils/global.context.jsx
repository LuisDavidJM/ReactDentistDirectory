import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

const lsFavs = JSON.parse(localStorage.getItem('favs')) || [];

export const ContextProvider = ({ children }) => {
  const [favs, setFavs] = useState(lsFavs)
  const [dentists, setDentists] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data)
      setDentists(res.data)
    })
  },[])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs))
  }, [favs])

  return (
    <ContextGlobal.Provider value={{dentists, favs, setFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)
