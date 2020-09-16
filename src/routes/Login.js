import React, { useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import '../styles/login.css'
// todo: move the forms into their own components

import { login, signup} from '../custom-hooks/useAuth'
import {LoggedInContext} from '../custom-hooks/Context'




const Login = () => {

// SET INITIAL VALUES FOR THE FORMS
    const signUp_initial = {
            username: "",
            password : "",
            first_name: "",
            last_name: "",
            email: ""
    }
    const login_initial = {
            username: "",
            password : "",
    }

    // SET STATES FOR THE FORMS AND THE FLASH MESSAGES FOR ERRORS
    const [clickedSingup, setClickedSingup] = useState('login')
    const [loginFormData, setLoginForm] = useState(login_initial)
    const [signupFormData, setSignupForm] = useState(signUp_initial)
    const [flashState, setFlashState] = useState(false)
    const [flashMessage, setFlashMessage] = useState()

    // UPDATE FORMS ON TYPE
    function updateLogin(e) {
        e.persist()
        setLoginForm(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }
    function updateSignup(e) {
        e.persist()
        setSignupForm(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }


    const history = useHistory()

    // localstorage function
    function addToLocalStorage(user) {
        window.localStorage.setItem("_token", JSON.stringify(user.token))
        const user_data = {
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        }
        // SET USERNAME AND USER IN LOCAL STORAGE
        window.localStorage.setItem("user", JSON.stringify(user_data))
        window.localStorage.setItem("username", JSON.stringify(user.username))
    }
    // SUBMIT
    async function submitLogin(e) {

        try {

            e.preventDefault()
            console.log('logging in...')
            let user = await login(loginFormData)
            addToLocalStorage(user)
            setLoginForm(login_initial)
            history.push('/')
        } catch (e) {
            setFlashState(true)
            setFlashMessage(message => message = e[0])
        }

    }
    async function submitSignup(e) {

        try {
            e.preventDefault()
            console.log('signing up...')
            setLoginForm(login_initial)
            let user = await signup(signupFormData)
            addToLocalStorage(user)

            setSignupForm(signUp_initial)
            history.push('/')

        } catch (e) {
            setFlashState(true)
            setFlashMessage(message => message = e[0])
        }
    }

    // RENDER
    return (
        <>
        <div className="forms">

            <span className="button-group">
                <button className="login-button"  onClick={()=> setClickedSingup(clickedSingup =>clickedSingup ='login' ) }>Login</button>
                <button className="signup-button"  onClick={()=> setClickedSingup(clickedSingup =>clickedSingup = 'signup' )}>Signup</button>

            </span>

                {clickedSingup === 'login' ?


                    <form className="form" onSubmit={submitLogin}>
                        <label htmlFor="username">Username:</label>
                        <input id="username"
                            type="text"
                            placeholder="username"
                            name="username"
                            value={loginFormData.username}
                            onChange={updateLogin}>
                            </input>
                        <label htmlFor="password">Password:</label>
                        <input type="password"
                            id="password"
                            placeholder="password"
                            name="password"
                            value={loginFormData.password}
                            onChange={updateLogin}>

                            </input>
                        <button>Login</button>
                        {flashState ? <span className="flash-msg">{flashMessage}</span>: null}
                    </form>

                    :
                    <form className="form" onSubmit={submitSignup}>
                        <label htmlFor="username">Username:</label>
                        <input id="username"
                            type="text"
                            placeholder="username"
                            name="username"
                            value={signupFormData.username}
                            onChange={updateSignup}
                        ></input>

                        <label htmlFor="password">Password:</label>
                        <input type="password"
                            id="password"
                            placeholder="password"
                            name="password"
                            value={signupFormData.password}
                            onChange={updateSignup}
                        ></input>

                        <label htmlFor="first_name">First name:</label>
                        <input id="first_name"
                            type="text"
                            placeholder="first_name"
                            name="first_name"
                            value={signupFormData.first_name}
                            onChange={updateSignup}
                        ></input>

                        <label htmlFor="last_name">Last name:</label>
                        <input id="last_name"
                            type="text"
                            placeholder="last_name"
                            name="last_name"
                            value={signupFormData.last_name}
                            onChange={updateSignup}
                        ></input>

                        <label htmlFor="email">Email:</label>
                        <input id="email"
                            type="email"
                            placeholder="email"
                            name="email"
                            value={signupFormData.email}
                            onChange={updateSignup}
                        ></input>
                        <button>Signup</button>
                        {flashState ? <span className="flash-msg">{flashMessage}</span>: null}
                    </form>
                }

        </div>
        </>
    )


}

export default Login