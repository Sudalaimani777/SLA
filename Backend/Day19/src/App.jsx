import useFetchProducts from './hooks/useFetchProducts.jsx'
import Home from './pages/Home.jsx'

function App() {

  const { products } = useFetchProducts();
  console.log(products);

  return (
    <>
      <div className="mx-auto max-w-7xl p-6">
        <Home />
      </div>
    </>

  )
}

export default App
