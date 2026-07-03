import { useContext } from "react";
import ProductContext from "../context/ProductContext";




const SearchBar = () => {

  const { searchTerm, setSearchTerm } = useContext(ProductContext);

  const handleSearchProduct = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  }

  console.log(searchTerm);

  return (
    <>
      <input
        type="text"
        placeholder="Search Your Favorite Product"
        value={searchTerm}
        onChange={handleSearchProduct}
        className="w-full rounded-md border p-3"
      />
    </>
  )
}

export default SearchBar