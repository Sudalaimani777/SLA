import { useContext } from "react"
import ProductContext from "../context/ProductContext"


const ProductCategoryInput = () => {

  const {searchProductCategory, handleOnChangeProductsCategory, uniqueProductCategory} = useContext(ProductContext);

  console.log(searchProductCategory);
  console.log(uniqueProductCategory)

  return (
    <>
        <select onChange={handleOnChangeProductsCategory} value={searchProductCategory}>
          {
            uniqueProductCategory.map((cat => (
              <option value={cat} key={cat}>{cat}</option>
            )))
          }
        </select>
    </>
  )
}

export default ProductCategoryInput