
import { useEffect, useState } from "react";

export function  useFetch (url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData(url) {
            const dataFetch = await fetch(url)
            const responseFetch = await dataFetch.json()
            console.log(responseFetch);
            setData(responseFetch)
        }
        fetchData(url);
    })
    console.log(data);
    return  data ;
}