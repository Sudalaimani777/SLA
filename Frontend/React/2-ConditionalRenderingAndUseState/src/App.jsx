// import { isLoggedIn } from "./Components/Login"
import Login from "./Components/Login/Login"
import { weatherData } from "./Components/Weather/index.js"

import Weather from "./Components/Weather/Weather"

function App() {

  return (
    <>
      <section>
        {/* <Login isLogin = {isLoggedIn}/> */}
        <Weather weatherData={weatherData} />
      </section>
    </>
  )
}

export default App;