import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <h1>Register page</h1>
      <Link to="/login">Login Page</Link>
       {/* <a href='https://www.google.com/'>Google</a>  to navigATE TO external links - use href */}
    </div>
  )
}

export default Register