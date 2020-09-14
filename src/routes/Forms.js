import React from 'react'

const loginForm = <form className="form">
<label htmlFor="username">Username:</label>
<input id="username" type="text" placeholder="username" name="username"></input>
<label htmlFor="password">Password:</label>
<input type="password" id="password" placeholder="password" name="password" ></input>
<button>Login</button>
</form>

const signupForm =
    <form className="form">
<label htmlFor="username">Username:</label>
     <input id="username" type="text" placeholder="username" name="username"></input>
     <label htmlFor="password">Password:</label>
     <input type="password" id="password" placeholder="password" name="password" ></input>
     <label htmlFor="first_name">First name:</label>
     <input id="first_name" type="text" placeholder="first_name" name="first_name"></input>
     <label htmlFor="last_name">Last name:</label>
     <input id="last_name" type="text" placeholder="last_name" name="last_name"></input>
     <label htmlFor="email">Email:</label>
     <input id="email" type="email" placeholder="email" name="email"></input>
     <button>Signup</button>
</form>


 export  {loginForm, signupForm}