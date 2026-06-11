import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Services from "../pages/Services"
import About from "../pages/About"
import Contact from "../pages/Contact"



const AllRoutes = () => {

    const route = [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/services", element: <Services /> },
        { path: "/contact", element: <Contact /> },
    ]

    return (
        <>
            <Routes>
                {
                    route.map(route => (
                        <Route key={route.element} path={route.path} element={route.element} />
                    ))
                }
            </Routes>
        </>
    )
}

export default AllRoutes