import { Route, Routes } from "react-router-dom"
import Array from "../pages/Array"
import MutatingMethods from "../pages/MutatingMethods"
import TransformMethods from "../pages/TransformMethods"
import SearchMethods from "../pages/SearchMethods"
import ReduceMethods from "../pages/ReduceMethods"
import OrderMethods from "../pages/OrderMethods"
import CreateMethods from "../pages/CreateMethods"



const AllRoutes = () => {

  const route = [
    { path: "/", element: <Array /> },
    {path:"mutatingmethods", element:<MutatingMethods/>},
    {path:"transformmethods", element:<TransformMethods/>},
    {path:"searchmethods", element:<SearchMethods/>},
    {path:"reducemethods", element:<ReduceMethods/>},
    {path:"ordermethods", element:<OrderMethods/>},
    {path:"createmethods", element:<CreateMethods/>},
  ]

  return (
    <>
      <Routes>

        {
          route.map(items => (
            <Route 
              key={items.path}
              path={items.path}
              element={items.element}
            />    
          ))
        }
      </Routes>
    </>
  )
}

export default AllRoutes