import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [dentists, setDentists] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data)
      setDentists(res.data)
    })
  },[])

  return (
    <ContextGlobal.Provider value={{dentists}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)
