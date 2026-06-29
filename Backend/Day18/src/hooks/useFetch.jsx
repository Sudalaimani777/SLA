import { useEffect, useState } from "react";


const useFetch = (apiURL) => {

    const [saveData, setSaveData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(apiURL);
                const data = await response.json();
                setSaveData(data);
            }catch(err){
                return err;
            }
        }
        fetchData();
    },[]);

    return {
        saveData
    }
}

export default useFetch