const Header = ({userData}) => {

  const {userName, userEmail} = userData;

  return (
    <>
        <header>
            <h1>This is the Header Component</h1>
            <p>{userEmail}</p>
            <p>{userName}</p>
        </header>
    </>
  )
}

export default Header   