import { Route, Routes } from "react-router-dom"
import Home from '../Pages/Home'
import About from '../Pages/About'
import ContactUs from '../Pages/ContactUs'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </>
    )
}
export default Routing;