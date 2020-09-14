import React, { useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import '../styles/login.css'
// todo: figure this out later
// import { loginFrom, signupform } from './Forms'
import { login } from '../custom-hooks/useAuth'
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

    // SET STATES FOR THE FORMS
    const [clickedSingup, setClickedSingup] = useState('login')
    const [loginFormData, setLoginForm] = useState(login_initial)
    const [signupFormData, setSignupForm] = useState(signUp_initial)

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


    let { logged, setLogged } = useContext(LoggedInContext)
    const history = useHistory()
    // SUBMIT
    async function submitLogin(e) {

        e.preventDefault()
        console.log('logging in...')
        let _token = await login(loginFormData)
        window.localStorage.setItem("_token", JSON.stringify(_token.token))
        console.log(_token)

        setLoginForm(login_initial)
        // setLogged(!logged)
        history.push('/')

        // redirect to home
    }
    function submitSignup(e) {
        // todo: make a request to the api for signing up
        // todo: this should call Api.signup and return a token
        e.preventDefault()
        console.log('signing up...')

        setLoginForm(login_initial)
        setLogged(!logged)
        setSignupForm(signUp_initial)
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
                    </form>
                }

        </div>
        </>
    )


}

export default Login