import { ProductProvider } from "./context/ProductContext"
import ProductPage from "./pages/ProductPage"


const App = () => {



  return (
    <>
      <ProductProvider>
        <ProductPage />
      </ProductProvider>
    </>
  )
}

export default App