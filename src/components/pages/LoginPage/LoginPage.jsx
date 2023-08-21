import React from 'react'
import '../LoginPage/LoginPage.scss'

function LoginPage() {
  return (
    <section className="login_form">
      <form className="login_inputs">
        <label htmlFor="email">Your E-Mail</label>
        <input type="email" name="email" id="email" placeholder="E-Mail..." />
        <label htmlFor="username">Your User-Name</label>
        <input type="text" name="username" id="username" placeholder="Username..." />
        <label htmlFor="firstname">Your First Name</label>
        <input type="text" name="firstname" id="firstname" placeholder="Firstname..." />
        <label htmlFor="lastname">Your Last Name</label>
        <input type="text" name="lastname" id="lastname" placeholder="Lastname..." />
        <label htmlFor="password">Your Password</label>
        <input type="text" name="password" id="password" placeholder="Password..." />
      </form>
      <button>Login</button>
    </section>
  )
}

export default LoginPage
