import { Route, Routes } from 'react-router-dom'
import { Home, StudentProfilePage, EmployeeCardPage, ProductCardPage, MovieDetailsPage, CompanyInfoPage, Task6Page, Task7Page, Task8Page } from '../pages'

const AllRoutes = () => {

    const routes = [
        { path: "/", element: <Home /> },
        { path: "/student-profile", element: <StudentProfilePage /> },
        { path: "/employee-card", element: <EmployeeCardPage /> },
        { path: "/product-card", element: <ProductCardPage /> },
        { path: "/movie-details", element: <MovieDetailsPage /> },
        { path: "/company-info", element: <CompanyInfoPage /> },
        { path: "/task-6", element: <Task6Page /> },
        { path: "/task-7", element: <Task7Page /> },
        { path: "/task-8", element: <Task8Page /> },
    ]

    return (
        <>
            <Routes>
                {
                    routes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)
                }
            </Routes>
        </>
    )
}

export default AllRoutes
