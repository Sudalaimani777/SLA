import SchoolList from "./components/SchoolList"
import { schools } from "./data/schoolData"


const App = () => {
  return (
    <>
      <SchoolList schools={schools} />
    </>
  )
}

export default App