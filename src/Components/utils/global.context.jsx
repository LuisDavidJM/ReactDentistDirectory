import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../../reducers/reducer";

const lsFavs = JSON.parse(localStorage.getItem('favs')) || [];

export const initialState = {theme: true, favs: lsFavs, dentists: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data)
      dispatch({type: "GET_DENTISTS", payload: res.data})
    })
  },[])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)
