import { useEffect, useState } from "react";



const useFetch = (api) => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(api);
                const data = await response.json();
                setApiData(data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [api])

    return {
        apiData
    }
}

export default useFetch