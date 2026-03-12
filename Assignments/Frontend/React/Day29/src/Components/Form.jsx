import React from 'react'

const Form = () => {
  return (
    <>
      <form action="">
        <p>
          <label htmlFor="userName">UserName : </label>
          <input type="text" name="userName" id="userName" />
        </p>
        <p>
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" id="password" />
        </p>
        <p>
          <input type="submit" value="Login" />
        </p>
      </form>
    </>
  )
}

export default Form