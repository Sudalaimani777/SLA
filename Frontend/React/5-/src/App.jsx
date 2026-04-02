import './App.css'
import NavBar from './NavBar'
import Login from './Pages/LoginPage/Login'
import Routing from './Routes/Routes'

// Folder Structure :-

// src -> 
  //Components -> Header.jsx, Footer.jsx, Form.jsx, Card.jsx (Reusuable block of codes that are used in other pages)
  //Pages -> Home.jsx, About.jsx, Contact.jsx (Collection of multiple components)
  //Types -> index.d.ts (TypeScript declaration file)
  //App.jsx (Main component that renders the pages and components)
  //main.jsx (Entry point of the application)

// JSX -> JavaScript XML -> It is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It is used to describe the UI of your application. It is not a string or HTML, but it is a syntax that gets transformed into JavaScript code by a compiler like Babel. It makes it easier to write and understand the structure of the UI. It also allows you to use JavaScript expressions inside the JSX code by using curly braces {}. For example, you can use variables, functions, and conditional statements inside the JSX code.

// Fragrament -> <></> -> It is used to wrap multiple elements without adding an extra node to the DOM. It is a shorthand for <React.Fragment></React.Fragment>. It doesnt add any extra node element in the DOM.

const App = () => {
  return (
    <>
      <section>
        <NavBar/>
        <Routing/>
        <Login/>
      </section>
    </>
  )
}
export default App