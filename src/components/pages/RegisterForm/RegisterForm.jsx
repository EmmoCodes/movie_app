import React from 'react'
import './RegisterForm.scss'
import { Link } from 'react-router-dom'

function RegisterForm() {
  return (
    <section className="register_page">
      <h4>Create an Account</h4>
      <form className="register_inputs">
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
      <div className="register_buttons">
        <Link to="/home">
          <button type="button">Create</button>
        </Link>
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
      </div>
    </section>
  )
}

export default RegisterForm
