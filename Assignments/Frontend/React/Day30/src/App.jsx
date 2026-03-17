import './App.css'
import Product from './components/Product/Product'
// import { userOne, userTwo, userThree } from './components/UserCard'
// import UserCard from './components/UserCard/UserCard'

function App() {

  const userProduct = [
    {id:1, name:"Kumar", age:21}
  ]


  return (
    <>
      {/* <section>
        <UserCard users={userOne} />
        <UserCard users={userTwo} />
        <UserCard users={userThree} />
      </section> */}
      <section>
        <Product data={userProduct}/>
      </section>
    </>
  )
}

export default App
