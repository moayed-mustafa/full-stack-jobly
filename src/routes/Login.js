import React, {useState} from 'react'
import '../styles/login.css'


const Login = () => {
    /**
     *
     * I'll need a toggling  button groups
     * one that says login  : this shows a login form
     * one that says signup : this shows a signup form
     * The question is how are we going to do this??

     */

    const [clickedSingup, setClickedSingup] = useState('login')

    const toggleLogin = () => {
        setClickedSingup(clickedSingup =>clickedSingup ='login' )
    }
    const toggleSignup = () => {
        setClickedSingup(clickedSingup =>clickedSingup = 'signup' )
    }

    return (
        <>
        <div className="forms">

            <span className="button-group">
                <button className="login-button"  onClick={toggleLogin}>Login</button>
                <button className="signup-button"  onClick={toggleSignup}>Signup</button>

            </span>

                {clickedSingup === 'login' ?

                    <form className="form">
                        <label htmlFor="username">Username:</label>
                        <input id="username" type="text" placeholder="username" name="username"></input>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password"  placeholder="password" name="password" ></input>
                    </form>

                    :
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
                </form>}

        </div>
        </>
    )


}

export default Login