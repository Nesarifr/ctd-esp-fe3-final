import { createContext } from "react";
import { useState, useEffect } from "react";


export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

  const [data, setData] = useState([])
  // useEffect(() => {
  //   setData([{name: "beto", username: "Beto2", id: 2}, {name: 'alberto', username: 'alberto2', id: 3}])
  // }, [])

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((dataApi)=> setData(dataApi))
  }, [])
    // const url = 'https://jsonplaceholder.typicode.com/users'
    // const dataApi = useFetch (url).finally(data=>data)
    // console.log(data);
    
  //   const dataMemo = useMemo(() => {
  //     const dataApi =  fetchApi (url).then(data=>data)
  //     setData(dataApi)
  //     return dataApi
  //    }, [url])

  // async function fetchApi (url) {
  //   const dataApi = await fetch(url)
  //   .then((res) => res.json())
  //   return dataApi
  // }

  return (
    <ContextGlobal.Provider value={data}>
      {children}
    </ContextGlobal.Provider>
  );
};
