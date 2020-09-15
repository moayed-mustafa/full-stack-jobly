import React, { useState } from 'react'
import { updateUser } from '../custom-hooks/useFetch'
import {useHistory} from 'react-router-dom'


function Profile() {

    let initial_state = JSON.parse(window.localStorage.getItem("user"))
    initial_state.password = ""
    let history = useHistory()

    const [formData, setFormData] = useState(initial_state)
    const [flashState, setFlashState] = useState(false)
    const [flashMessage, setFlashMessage] = useState()

    function updateField(e) {
        e.persist()
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }

    async function submitForm(e) {
        try {

            e.preventDefault()
            console.log('submitting')
            // get the token
            let _token = JSON.parse(window.localStorage.getItem("_token"))
            // add it to the data that will be sent to the backend
            formData._token = _token

            let result = await updateUser(formData)
            // remove the user from localstorage
            window.localStorage.removeItem("user")
            delete result.photo_url
            // make a new user in localstorage with the result of the update
            window.localStorage.setItem("user", JSON.stringify(result))
            // redirect to homepage
            history.push('/')

        } catch (e) {
            console.log(e)
            setFlashState(true)
            setFlashMessage(message => message = e[0])
            console.log('an error occured!')

        }
    }
    return (
        <div className="forms">



        <form className="form" onSubmit={submitForm}>
                        <label htmlFor="username">Username:</label>
                        <input id="username"
                            type="text"
                            placeholder="username"
                            name="username"
                            value={formData.username}
                            onChange={updateField}
                        ></input>

                        <label htmlFor="first_name">First name:</label>
                        <input id="first_name"
                            type="text"
                            placeholder="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={updateField}
                        ></input>

                        <label htmlFor="last_name">Last name:</label>
                        <input id="last_name"
                            type="text"
                            placeholder="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={updateField}
                        ></input>

                        <label htmlFor="email">Email:</label>
                        <input id="email"
                            type="email"
                            placeholder="email"
                            name="email"
                            value={formData.email}
                            onChange={updateField}
                        ></input>

                        <label htmlFor="password">Re-Enter Password:</label>
                        <input type="password"
                            id="password"
                            placeholder="password"
                            name="password"
                            value={formData.password}
                            onChange={updateField}
                        ></input>
                <button>Update</button>
                {flashState ? <span className="flash-msg">{flashMessage}</span>: null}
            </form>
        </div>
    )

}

export default Profile