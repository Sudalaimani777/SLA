import { useContext } from "react"
import useFetchProducts from "../hooks/useFetchProducts"
import ProductContext from "../context/ProductContext"
import Loading from "./Loading";
import Error from "./Error";
import ProductCard from "./ProductCard";

function ProductGrid() {

  const { products, error, loading, searchTerm, selectedCategory } = useContext(ProductContext);

  if (loading) return <Loading />

  if (error) return <Error />

  const filterProducts = products.filter(product => {
    const matchedProducts = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchedCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchedProducts && matchedCategory
  });

  // console.log(filterProducts);

  return (
    <div className="grid grid-cols-4 gap-6">
      {filterProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductGrid
