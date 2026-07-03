import { createContext, useState } from "react";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const { products, loading, error } = useFetchProducts();

  const [searchTerm, setSearchTerm] = useState("");
  const[selectedCategory, setSelectedCategory] = useState("all");

  const filerAndCategory = products.filter(product => {
    const matchedProducts = product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    const matchedCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchedProducts && matchedCategory
  })

  return (
    <ProductContext.Provider value={{
      products,
      loading,
      error,
      searchTerm,
      setSearchTerm,
      selectedCategory,
      setSelectedCategory
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext;