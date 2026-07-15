import { useState } from "react";



const useToggle = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(prevToggle => !prevToggle);
    const style = toggle ? "hidden" : "block"

    return {
        toggle,
        handleToggle,
        style
    }
}

export default useToggle