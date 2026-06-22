

const Button = ({children, clickEvent}) => {
  return (
    <>
       <button onClick={clickEvent}>{children}</button>
    </>
  )
}

export default Button