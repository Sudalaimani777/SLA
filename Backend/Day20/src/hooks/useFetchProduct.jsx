import { useEffect, useState } from "react"


const useFetchProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const fetchProducts = async() =>{
            try{
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setProducts(data.products);
            }catch(err){
                console.log(err)
            }
        }
        fetchProducts();
    },[])

  return {
    products
  }
}

export default useFetchProduct