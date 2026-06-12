import { Routes, Route } from "react-router-dom"
import Layout from "../components/Layout"
import { LoginPage } from "../pages"



const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>

                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>
    )
}

export default AppRoutes