import React from 'react'
import '../LoginPage/LoginPage.scss'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <section className="login_page">
      <h4>Create an Account</h4>
      <form className="login_inputs">
        <label htmlFor="email"></label>
        <input type="email" name="email" id="email" placeholder="E-Mail..." />
        <label htmlFor="username"></label>
        <input type="text" name="username" id="username" placeholder="Username..." />
        <label htmlFor="firstname"></label>
        <input type="text" name="firstname" id="firstname" placeholder="Firstname..." />
        <label htmlFor="lastname"></label>
        <input type="text" name="lastname" id="lastname" placeholder="Lastname..." />
        <label htmlFor="password"></label>
        <input type="text" name="password" id="password" placeholder="Password..." />
      </form>
      <Link to="/home">
        <button>Create</button>
        <button>Login</button>
      </Link>
    </section>
  )
}

export default LoginPage
