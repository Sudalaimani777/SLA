import { useContext } from "react"
import ProductContext from "../context/ProductContext"

const CategoryFilter = () => {

  const { products, selectedCategory, setSelectedCategory } = useContext(ProductContext);

  const categories = ["all", ...new Set(products.map(product => product.category))]

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
  }

  return (
    <>
      <div>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="rounded-md border p-3"
        >
          {
            categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
      </div>
    </>
  )
}

export default CategoryFilter