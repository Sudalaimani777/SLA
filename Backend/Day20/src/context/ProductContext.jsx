import { createContext, useState } from "react";
import useFetchProduct from "../hooks/useFetchProduct";


const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const { products } = useFetchProduct();
    const [searchProduct, setSearchProduct] = useState("");
    const [searchProductCategory, setSearchProductByCategory] = useState("All Products");
    

    const handleOnChangeProductsCategory = (e) => {
        const { value } = e.target;
        setSearchProductByCategory(value)
    }

    const handleOnChangeProductsSearch = (e) => {
        const { value } = e.target;
        setSearchProduct(value);
    }

    const uniqueProductCategory = ["All Products", ...new Set(products.map(product => product.category))]

    const searchProductByBothSearchAndCategory = products.filter(product => {
        const matchedProductBySearch = product.title.toLowerCase().includes(searchProduct.toLowerCase());
        const matchedProductByCategory = searchProductCategory === "All Products" || searchProductCategory === product.category;

        return matchedProductByCategory && matchedProductBySearch
    })

    return (
        <ProductContext.Provider value={{ 
            searchProductByBothSearchAndCategory, 
            uniqueProductCategory,
            handleOnChangeProductsCategory, 
            handleOnChangeProductsSearch,
            searchProduct,
            searchProductCategory
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;