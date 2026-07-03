import { useContext } from "react"
import ProductContext from "../context/ProductContext"


const ProductSearchInput = () => {

  const { searchProduct, handleOnChangeProductsSearch } = useContext(ProductContext);

  console.log(searchProduct);

  return (
    <>
      <input type="text" onChange={handleOnChangeProductsSearch} value={searchProduct} />
    </>
  )
}

export default ProductSearchInput