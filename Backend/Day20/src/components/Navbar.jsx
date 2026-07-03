import { ProductSearchInput, ProductCategoryInput, ProductSortByPrice } from "./index"

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <ProductSearchInput />
          <ProductCategoryInput />
          <ProductSortByPrice />
        </nav>
      </header>
    </>
  )
}

export default Navbar