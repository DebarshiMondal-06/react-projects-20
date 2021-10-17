/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useQuery } from "@apollo/client";
import { LOAD_USER_CART, LOAD_WATCHES } from './Queries';


const createGlobalContext = createContext();


const ContextGlobal = ({ children }) => {
  const [cookie] = useCookies();
  const [userItem, setUserItem] = useState([]);
  const watchData = useQuery(LOAD_WATCHES, {
    context: {
      headers: {
        "Authorization": "Access"
      }
    }
  });
  const { data, refetch } = useQuery(LOAD_USER_CART, {
    variables: { user_id: cookie.userevent },
    skip: cookie && cookie.userevent ? false : true,
    context: {
      headers: {
        "Authorization": "Access"
      }
    },
  });




  useEffect(() => {
    if (data) {
      setUserItem(data.getUserCartData)
    }
  }, [data]);



  return <createGlobalContext.Provider value={{
    watchData,
    userItem,
    refetch
  }}>
    {children}
  </createGlobalContext.Provider>
}


export { ContextGlobal, createGlobalContext };
