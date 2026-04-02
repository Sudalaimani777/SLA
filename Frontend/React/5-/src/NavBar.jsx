import {Link} from 'react-router-dom'

//Link -> It is used to create a link to navigate to different routes in the application. It is similar to the anchor tag in HTML, but it is used for client-side routing in React applications. It prevents the default behavior of the anchor tag and allows you to navigate to different routes without refreshing the page. You can use the 'to' prop to specify the path you want to navigate to. For example, <Link to='/home'>Home</Link> will navigate to the '/home' route when clicked.

const NavBar = () => {
  return (
    <>
        <main>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
            </nav>
        </main>
    </>
  )
}

export default NavBar